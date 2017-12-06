'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phoneNo: {
            type: DataTypes.NUMERIC
        },
        picUrl: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        waitingTime: {
            type: DataTypes.NUMERIC
        },
        rating: {
            type: DataTypes.NUMERIC
        }
    });
    return User;
};