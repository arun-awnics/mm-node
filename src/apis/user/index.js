import sequelize from '../../util/conn.mysql';
import fs from 'fs';
import path from 'path';
var basename = path.basename(__filename);
var db = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-13) === 'user.model.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

module.exports = db;