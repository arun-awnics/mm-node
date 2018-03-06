import groupUserMapModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
DAO for GroupUserMapDao api
*/
class GroupUserMapDao {
    constructor() {}

    /**
     * insert method
     */
    insert(groupUser, callback) {
        sequelize.sync({ force: false }).then(() => {
            sequelize.transaction().then(function(t) {
                groupUserMapModel.group_user_map.create(groupUser, { transaction: t }).then(function(groupUserInserted) {
                    callback(groupUserInserted);
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
        groupUserMapModel.group_user_map.findAll().then((allGroupUser) => {
            callback(allGroupUser);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        groupUserMapModel.group_user_map.findById(id).then((group) => {
            callback(group);
        });
    }

    /**
     * Update method
     */
    update(groupUser, callback) {
        sequelize.transaction().then(function(t) {
            groupUserMapModel.group_user_map.update(groupUser, {
                where: {
                    id: groupUser.id
                }
            }, { transaction: t }).then(function(groupUserUpdated) {
                callback(groupUserUpdated);
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
            groupUserMapModel.group_user_map.destroy({
                where: {
                    id: id
                }
            }).then(function(groupUserDeleted) {
                callback(groupUserDeleted);
            }).then(function() {
                t.commit();
            }).catch(function(error) {
                t.rollback();
            });
        });
    }
}

export default GroupUserMapDao;