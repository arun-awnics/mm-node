/*
DAO for User-Message-Map api
*/

// Require model
import UserMessageMap from './user-message-map.model';

exports.create = (userMessageMap) => {
    userMessageMap.save((err, userMessageMap) => {
        if (err) throw err;
    });
}

exports.getAll = (callback) => {
    UserMessageMap.find({}, (err, userMessageMap) => {
        if (err) throw err;
        callback(userMessageMap);
    });
}

exports.getById = (id, callback) => {
    UserMessageMap.find({ messageId: id }, (err, userMessageMap) => {
        if (err) throw err;
        callback(userMessageMap);
    });
}

exports.update = (userMessageMap, callback) => {
    var condition = { messageId: userMessageMap.messageId };
    var options = { multi: true };

    UserMessageMap.update(condition, userMessageMap, options, callback);
    (err, numAffected) => {
        if (err) throw err;
        callback(userMessageMap);
    }
}

exports.delete = (id, callback) => {

    var condition = { messageId: id };

    UserMessageMap.remove(condition, (err, userMessageMap) => {
        if (err) throw err;
        callback(userMessageMap);
    });
}