/*
DAO for Group-Message-Map api
*/

// Require model
import GroupMessageMap from './group-message-map.model';

exports.create = (groupMessageMap) => {
    groupMessageMap.save((err, groupMessageMap) => {
        if (err) throw err;
    });
}

exports.getAll = (callback) => {
    GroupMessageMap.find({}, (err, groupMessageMap) => {
        if (err) throw err;
        callback(groupMessageMap);
    });
}

exports.getById = (id, callback) => {
    GroupMessageMap.find({ messageId: id }, (err, groupMessageMap) => {
        if (err) throw err;
        callback(groupMessageMap);
    });
}

exports.update = (groupMessageMap, callback) => {
    var condition = { messageId: groupMessageMap.messageId };
    var options = { multi: true };

    GroupMessageMap.update(condition, groupMessageMap, options, callback);
    (err, numAffected) => {
        if (err) throw err;
        callback(groupMessageMap);
    }
}

exports.delete = (id, callback) => {

    var condition = { messageId: id };

    GroupMessageMap.remove(condition, (err, groupMessageMap) => {
        if (err) throw err;
        callback(groupMessageMap);
    });
}