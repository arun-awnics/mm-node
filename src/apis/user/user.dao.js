var userModel = require('./index');
const log = require('../../config/log4js.config');

/*
    DAO for user api
*/
class UserDao {
    constructor() {}

    /*
        insert method
    */
    insert(req, res) {
        var user = {
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            picUrl: req.body.picUrl,
            description: req.body.description,
            status: req.body.status,
            waitingTime: req.body.waitingTime,
            rating: req.body.rating
        };
        return userModel.sequelize.transaction().then(function(t) {
            userModel.User.sync({ force: false }).then(function() {
                return userModel.User.create(user, { transaction: t }).then(function(user) {
                    log.info('user created');
                    res.send('User created: ' + JSON.stringify(user));
                }).then(function() {
                    log.info('transaction committed');
                    return t.commit();
                    //return t.rollback();
                }).catch(function(error) {
                    return t.rollback();
                });
            });
        });
    }

    /*
        read all method
    */
    readAll(req, res) {
        return userModel.sequelize.transaction().then(function(t) {
            userModel.User.findAll({ transaction: t }).then((user) => {
                res.send('All user: ' + JSON.stringify(user));
            });
        });
    }

    /*
        read method based on id
    */
    readById(req, res) {
        return userModel.sequelize.transaction().then(function(t) {
            userModel.User.findById(req.params.id, { transaction: t }).then((user) => {
                res.send('user by id: ' + JSON.stringify(user));
            });
        });
    }

    /*
        Update method
    */
    update(req, res) {
        var user = {
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            picUrl: req.body.picUrl,
            description: req.body.description,
            status: req.body.status,
            waitingTime: req.body.waitingTime,
            rating: req.body.rating
        };
        var condition = {
            where: {
                id: req.params.id
            }
        };
        return userModel.sequelize.transaction().then(function(t) {
            userModel.User.update(user, condition, { transaction: t }).then(function(user) {
                log.info('data Updated');
                res.send('updated user: ' + req.params.id);
            }).then(function() {
                t.commit();
                log.info('transaction committed');
            }).catch(function(error) {
                return t.rollback();
            });
        });
    }

    /*
        Delete method
    */
    delete(req, res) {
        return userModel.sequelize.transaction().then(function(t) {
            userModel.User.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(user) {
                log.info('entry deleted');
                res.send('deleted user id: ' + req.params.id);
            }).then(function() {
                t.commit();
                log.info('transaction committed');
            }).catch(function(error) {
                return t.rollback();
            });
        });
    }
}

module.exports = UserDao;