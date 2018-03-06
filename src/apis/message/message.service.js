/**
 * 1. create
 * 2. 
 */

import messageDao from './message.dao';
import userMapDao from './user-message-map.dao';
import groupMapDao from './group-message-map.dao';
import Message from './message.model';
import GroupMessageMap from './group-message-map.model';
import UserMessageMap from './user-message-map.model';
import Status from '../../util/status.message';

class MessageService {
    constructor() {}

    sendMessage(message, callback) {
        if (message.receiverType === 'group') {
            this.sendGroupMessage(message, callback);
        } else if (message.receiverType === 'private') {
            this.sendUserMessage(message, callback)
        } else {
            return;
        }
    }

    sendGroupMessage(message, callback) {

        //createMessage and createGroupMap using DAO object
        var msg = new Message(message);
        var grpMessage = new GroupMessageMap({
            groupId: message.receiverId,
            userSId: message.senderId,
            createdBy: message.senderId,
            updatedBy: message.senderId
        });
        messageDao.create(msg, callback);
        groupMapDao.create(grpMessage);
    }

    sendUserMessage(message, callback) {
        //createMessage and createUserMap using DAO object
        var msg = new Message(message);
        var userMessage = new UserMessageMap({
            messageId: msg._id,
            userRId: message.receiverId,
            userSId: message.senderId,
            createdBy: message.senderId,
            updatedBy: message.senderId,
            createdTime: new Date(),
            updatedTime: new Date()
        });
        messageDao.create(msg, callback);
        userMapDao.create(userMessage);
    }

    readAll(callback) {
        messageDao.getAll(callback);
    }

    readById(id, callback) {
        messageDao.getById(id, callback);
    }

    remove(id, callback) {
        messageDao.delete(id, callback);
    }

    update(message, callback) {
        messageDao.update(message, callback);
    }

    /**
     * render 100 message onclick of any group
     */
    getLimitedMessages(receiverId, senderId, offset, size, callback) {
        Message.find({ receiverId: receiverId }, (err, messages) => {
            if (err) throw err;
            callback(messages);
        }).limit(parseInt(offset + size)).skip(parseInt(offset)).sort({ $natural: -1 });
    }
}

export default MessageService;