/*
DAO for Specialities api
*/

import Speciality from './specialities.model';

exports.create = (speciality, callback) => {
    // Call the built-in save method to save to the database
    speciality.save((err, speciality) => {
        if (err) throw err;
        callback(speciality);
    });
}

exports.getAll = (callback) => {
    // get all the specialities
    Speciality.find({}, (err, specialities) => {
        if (err) throw err;
        callback(specialities);
    });
}

exports.getById = (id, callback) => {
    // get speciality by ID
    Speciality.find({ id: id }, (err, speciality) => {
        if (err) throw err;
        callback(speciality);
    });
}

exports.update = (speciality, callback) => {
    // update an speciality
    var condition = { id: speciality.id };
    var options = { multi: true };

    Speciality.update(condition, speciality, options, callback);

    callback = (err, numAffected) => {
        if (err) throw err;
    }
}

exports.delete = (id, callback) => {
    // delete an speciality
    var condition = { id: id };

    Speciality.remove(condition, (err, speciality) => {
        if (err) throw err;
        callback(speciality);
    });
}