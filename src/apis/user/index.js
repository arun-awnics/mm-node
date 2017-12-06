'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var db = {};
var sequelize = new Sequelize('test', 'arun', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-13) === 'user.model.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;

db.sequelize.authenticate()
    .then(() => console.log('connection successfull for sequelize'))
    .catch(e => console.error('error in connection: ', e));

module.exports = db;