import rtg from 'random-token-generator';
import nodemailer from 'nodemailer';
import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
var Promise = require('bluebird');

import log from '../../config/log4js.config';
import sequelize from '../../util/conn.mysql';
import userModel from './index';
import UserDao from './user.dao';
import GroupDao from '../group/group.dao';
import GroupUserMapDao from '../group/groupUserMap.dao';
import groupModel from '../group/index';
import groupUserMapModel from '../group/index';
import MessageService from '../message/message.service';
import RoleService from '../role/role.service';
import RoleModel from '../role/index';

var userDao = new UserDao();
var groupDao = new GroupDao();
var groupUserMapDao = new GroupUserMapDao();
var messageService = new MessageService();
var roleService = new RoleService();

/**
 * UserService 
 */
class UserService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'test.arung@gmail.com',
                pass: 'changedPassword'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    register(user, callback) {
        //generate random key
        rtg.generateKey({
            len: 16,
            string: true,
            strong: false,
            retry: false
        }, function(err, key) {
            if (err) {
                log.info(err);
            } else {
                user.token = key; //assign generated key to user
            }
        });
        bcrypt.hash(user.password, 10, (err, hash) => {
            user.password = hash;
        });
        return userDao.insert(user, (userInserted) => {
            callback(userInserted);
            RoleModel.role.findOne({ where: { name: userInserted.role } }).then((role) => {
                var userRole = {
                    userId: userInserted.id,
                    roleId: role.id
                };
                roleService.createUserRole(userRole, (userRole) => {});
            });
            if (userInserted.role == 'patient') {
                this.activationLink(userInserted.token);
                var group = {
                    name: 'MedHelp',
                    url: `/medhelp/${userInserted.id}`,
                    userId: userInserted.id,
                    description: 'Med help',
                    picture: 'https://d30y9cdsu7xlg0.cloudfront.net/png/363633-200.png',
                    createdBy: 'docbot',
                    updatedBy: 'docbot'
                };
                return groupDao.insert(group, (createdGroup) => {
                    var groupUserMap = {
                        userId: createdGroup.userId,
                        groupId: createdGroup.id,
                        createdBy: 'user',
                        updatedBy: 'user'
                    };
                    groupUserMapDao.insert(groupUserMap, (createdGroupUserMap) => {});
                    sequelize
                        .query("select u.id, u.name, u.role, u.email, count(gu.userId) from user u LEFT JOIN group_user_map gu on u.id=gu.userId and u.role='BOT' group by u.id order by count(gu.userId) ASC", { type: sequelize.QueryTypes.SELECT })
                        .then((groupUserMaps) => {
                            var uId;
                            for (var i = 0; i < groupUserMaps.length; i++) {
                                if (groupUserMaps[i].role == 'bot' | groupUserMaps[i].role == 'BOT') {
                                    uId = groupUserMaps[i].id;
                                    break;
                                } else {
                                    continue;
                                }
                            }
                            var groupUserMapBot = {
                                groupId: createdGroup.id,
                                userId: uId,
                                createdBy: 'bot',
                                updatedBy: 'bot'
                            }
                            groupUserMapDao.insert(groupUserMapBot, (createdGroupUserMap) => {});
                            var msg = {
                                receiverId: createdGroup.id,
                                receiverType: 'group', // group or individual
                                senderId: uId,
                                text: 'Welcome to Mesomeds!! How can we help you?'
                            }
                            messageService.sendMessage(msg, (result) => {});
                        });
                });
            } else {
                return; //in case of bot
            }
        });
    }

    /**
     * activation link method
     */
    activationLink(token) {
        this.transporter.sendMail(this.emailFormat(token), function(error, info) {
            if (error) {
                console.log('error occured: ' + error);
            }
            console.log('Message sent');
        });
    }

    /**
     * email format
     */
    emailFormat(token) {
        var userMailOptions;
        const userOutput = `
            <h3>Greetings from Awnics!</h3>
            <p>Thank you for registering. Please click on the below link for activation.</p>
            <a href="http://localhost:3000/user/controllers/updateActivate/${token}" target="_blank">
                Click here to confirm
            </a>
            <p>Thanks and Regards,<br/>Awnics</p>
            `;

        // setup email data for user
        return userMailOptions = {
            from: 'test.arung@gmail.com',
            to: 'nilu.kumari@awnics.com',
            subject: 'Email activation link',
            text: "hello",
            html: userOutput
        };
    }

    /**
     * change activate column and match token
     */
    activateUser(token, callback) {
        userModel.user.find({ where: { token: token } }).then((resultFind) => {
            if (resultFind.token === token) {
                userModel.user.update({ "activate": 1, "role": "patient" }, { where: { token: resultFind.token } });
                callback(resultFind);
            } else {
                log.error('Error while updating the user ');
            }
        }).catch((err) => {
            log.error('Error while updating the user ', err);
        });
    }

    updateRegisteredUser(user, callback) {
        return userDao.update(user, (userUpdated) => {
            callback(userUpdated);
        });
    }

    getAll(callback) {
        return userDao.readAll((allUsers) => {
            callback(allUsers);
        });
    }

    getById(id, callback) {
        return userDao.readById(id, (userById) => {
            callback(userById);
        });
    }

    deleteRegisteredUser(id, callback) {
        return userDao.delete(id, (userDeleted) => {
            callback(userDeleted);
        });
    }

    /**
     * Find user by email for the login component
     */
    findUserByEmail(email, password, callback) {
        userModel.user.findOne({
            where: {
                email: email
            }
        }).then((user) => {
            callback(user);
        }).catch(err => {
            log.error('Error while fetching user in user service: ', err);
        });
    }

    /**
     * get all bots 
     */
    getAllBots(offset) {
        userModel.user.findAll({
            offset: offset,
            where: {
                name: Sequelize.literal(' name REGEXP "BOT*" ')
            }
        }).then((user) => {});
    }
}

export default UserService;