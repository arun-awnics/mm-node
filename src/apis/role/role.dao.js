import roleModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
 *DAO for RolePrivilege api
 */
class RoleDao {
    constructor() {}

    /**
     * insert method
     */
    insert(role, callback) {
        sequelize.sync({ force: false }).then(() => {
            return sequelize.transaction(function(t) {
                return roleModel.role.create(role, { transaction: t }).then(function(roleInserted) {
                    callback(roleInserted);
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        return roleModel.role.findAll().then((allRole) => {
            callback(allRole);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        return roleModel.role.findById(id).then((role) => {
            callback(role);
        });
    }

    /**
     * Update method
     */
    update(role, callback) {
        return sequelize.transaction(function(t) {
            return roleModel.role.update(role, {
                where: {
                    id: role.id
                }
            }, { transaction: t }).then(function(roleUpdated) {
                callback(roleUpdated);
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        return sequelize.transaction(function(t) {
            return roleModel.role.destroy({
                where: {
                    id: id
                }
            }).then(function(roleDeleted) {
                callback(roleDeleted);
            });
        });
    }
}

export default RoleDao;