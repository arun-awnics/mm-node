/*
DAO for OrderRequests api
*/

import OrderRequest from './orderRequest.model';

exports.create = (orderRequest, callback) => {
    // Call the built-in save method to save to the database
    orderRequest.save((err, orderRequest) => {
        if (err) throw err;
        callback(orderRequest);
    });
}

exports.getAll = (callback) => {
    // get all the orderRequests
    OrderRequest.find({}, (err, orderRequests) => {
        if (err) throw err;
        callback(orderRequests);
    });
}

exports.getById = (id, callback) => {
    // get orderRequest by ID
    OrderRequest.find({ id: id }, (err, orderRequest) => {
        if (err) throw err;
        callback(orderRequest);
    });
}

exports.update = (orderRequest, callback) => {
    // update an orderRequest
    var condition = { id: orderRequest.id };
    var options = { multi: true };

    OrderRequest.update(condition, orderRequest, options, callback);

    callback = (err, numAffected) => {
        if (err) throw err;
    }
}

exports.delete = (id, callback) => {
    // delete an orderRequest
    var condition = { id: id };

    OrderRequest.remove(condition, (err, orderRequest) => {
        if (err) throw err;
        callback(orderRequest);
    });
}