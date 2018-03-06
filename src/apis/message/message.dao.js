/*
DAO for messages api
*/

import Message from './message.model';
import log from '../../config/log4js.config';

exports.create = (message, callback) => {

    //create a new message
    message.save((err, message) => {
        if (err) {
            log.error('err is: ', JSON.stringify(err));
        }
        callback(message);
    });
}

exports.getAll = (callback) => {
    // get all the messages
    Message.find({}, (err, messages) => {
        if (err) {
            log.error('err is: ', JSON.stringify(err));
        }
        callback(messages);
    });
}

exports.getById = (id, callback) => {
    // get a specific the message
    Message.find({ id: id }, (err, message) => {
        if (err) {
            log.error('err is: ', JSON.stringify(err));
        }
        callback(message);
    });
}

exports.update = (message, callback) => {
    var condition = { $and: [{ 'senderId': message.senderId }, { 'receiverId': message.receiverId }, { 'createdTime': message.createdTime }] };
    var options = { new: true }; //multi: true, upsert: true

    Message.findOneAndUpdate(condition, {
        $set: {
            "text": message.text,
            "type": "text",
            "contentType": "text"
        }
    }, options, (err, message) => {
        if (err) {
            log.error('err is: ', JSON.stringify(err));
        }
        callback(message);
    });
}

exports.delete = (id, callback) => {

    var condition = { id: id };

    Message.remove(condition, (err, message) => {
        if (err) {
            log.error('err is: ', JSON.stringify(err));
        }
        callback(message);
    });
}