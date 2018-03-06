import userModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/**
 * DAO for user api
 */
class UserDao {
    constructor() {}

    /**
     * insert method
     */
    insert(user, callback) {
        sequelize.sync({ force: false }).then(() => {
            sequelize.transaction().then(function(t) {
                userModel.user.create(user, { transaction: t }).then(function(userInserted) {
                    callback(userInserted);
                }).then(function() {
                    t.commit();
                }).catch(function(error) {
                    t.rollback();
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        userModel.user.findAll().then((user) => {
            callback(user);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        userModel.user.findById(id).then((user) => {
            callback(user);
        });
    }

    /**
     * Update method
     */
    update(user, callback) {
        sequelize.transaction().then(function(t) {
            userModel.user.update(user, {
                where: {
                    id: user.id
                }
            }, { transaction: t }).then(function(userUpdated) {
                callback(userUpdated);
            }).then(function() {
                t.commit();
            }).catch(function(error) {
                t.rollback();
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        sequelize.transaction().then(function(t) {
            userModel.user.destroy({
                where: {
                    id: id
                }
            }).then(function(user) {
                callback(user);
            }).then(function() {
                t.commit();
            }).catch(function(error) {
                t.rollback();
            });
        });
    }
}

module.exports = UserDao;