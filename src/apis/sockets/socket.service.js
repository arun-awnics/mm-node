import Dotenv from 'dotenv';
import MessageService from '../message/message.service';
import GroupService from '../group/group.service';
import log from '../../config/log4js.config';
import UserService from '../user/user.service';
import UserModel from '../user/index';

const jwt = require('jsonwebtoken');
const dotenv = Dotenv.config({ path: '.env.dev' });
const messageService = new MessageService();
const groupService = new GroupService();
const userService = new UserService();

exports.connectSocket = (io) => {
    io.use(function(socket, next) {
            if (socket.handshake.query && socket.handshake.query.token) {
                jwt.verify(socket.handshake.query.token, process.env.JWT_SECRET, function(err, decoded) {
                    if (err) return next(new Error('Authentication error'));
                    socket.decoded = decoded;
                    next();
                });
            } else {
                next(new Error('Authentication error'));
            }
        })
        .on('connection', function(socket) {
            // get userId from client
            socket.on('user-connected', userId => {
                log.info('a user connected with ID: ' + userId);

                userService.getById(userId, (user) => {
                    if (user.id === userId) {
                        userService.updateRegisteredUser({ 'id': userId, 'socketId': socket.id, 'status': 'online' }, (user) => {});
                    }
                });
            });

            /**
             * for sending message to group/user which is emitted from client(msg with an groupId/userId)
             */
            socket.on('send-message', (msg) => {
                // if it is a group message
                if (msg.receiverType === "group") {
                    userService.getById(msg.senderId, (result) => {
                        msg.createdBy = `${result.firstname} ${result.lastname}`;
                        msg.updatedBy = `${result.firstname} ${result.lastname}`;
                        msg.picUrl = result.picUrl;
                        messageService.sendMessage(msg, (result) => {
                            groupService.getAllUsersByGroupId(msg.receiverId, (user) => {
                                io.in(user.socketId).emit('receive-message', result); //emit one-by-one for all users
                            });
                        });
                    });
                }
                // if it is a private message 
                else if (msg.receiverType === "private") {
                    userService.getById(msg.senderId, (result) => {
                        msg.createdBy = `${result.firstname} ${result.lastname}`;
                        msg.updatedBy = `${result.firstname} ${result.lastname}`;
                        msg.picUrl = result.picUrl;
                        messageService.sendMessage(msg, (result) => {
                            userService.getById(msg.receiverId, (user) => {
                                socket.to(user.socketId).emit('receive-message', result);
                            });
                        });
                    });
                }
                // if neither group nor user is selected
                else {
                    userService.getById(msg.senderId, (result) => {
                        socket.to(result.socketId).emit('receive-message', { "text": 'Select a group or an user to chat with.' }); //only to sender
                    });
                }
            });

            socket.on('send-typing', (data) => {
                // if it is a group message
                if (data.receiverType === "group") {
                    groupService.getAllUsersByGroupId(data.receiver.id)
                        .then((users) => {
                            users.map(user => {
                                socket.to(user.socketId).emit('receive-typing', data); //emit one-by-one for all users
                            });
                        });
                }
                // if it is a private message 
                else if (data.receiverType === "private") {
                    userService.getById(data.receiver.id, (result) => {
                        socket.to(result.socketId).emit('receive-typing', data);
                    });
                }
                // if neither group nor user is selected
                else {
                    console.log('There has been an error');
                }
            });

            /**
             * for updating the message in mongo
             */
            socket.on('update-message', (data) => {
                messageService.update(data, (res) => {
                    groupService.getAllUsersByGroupId(data.receiverId, (user) => {
                        io.in(user.socketId).emit('updated-message', res); //emit one-by-one for all users
                    });
                });
            });

            socket.on('user-disconnect', (userId) => {
                socket.disconnect();
                userService.getById(userId, (user) => {
                    if (user.id === userId) {
                        userService.updateRegisteredUser({ 'id': userId, 'status': 'offline' }, (user) => {
                            log.info('User logged out: ', userId);
                        });
                    }
                });
            });
        });
}