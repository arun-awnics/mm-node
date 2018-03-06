import userRoleModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
 *DAO for RolePrivilege api
 */
class UserRoleDao {
    constructor() {}

    /**
     * insert method
     */
    insert(userRole, callback) {
        sequelize.sync({ force: false }).then(() => {
            return sequelize.transaction(function(t) {
                return userRoleModel.user_role.create(userRole, { transaction: t }).then(function(userRoleInserted) {
                    callback(userRoleInserted);
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        return userRoleModel.user_role.findAll().then((allUserRole) => {
            callback(allUserRole);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        return userRoleModel.user_role.findById(id).then((userRole) => {
            callback(userRole);
        });
    }

    /**
     * Update method
     */
    update(userRole, callback) {
        return sequelize.transaction(function(t) {
            return userRoleModel.user_role.update(userRole, {
                where: {
                    id: userRole.id
                }
            }, { transaction: t }).then(function(userRoleUpdated) {
                callback(userRoleUpdated);
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        return sequelize.transaction(function(t) {
            return userRoleModel.user_role.destroy({
                where: {
                    id: id
                }
            }).then(function(userRoleDeleted) {
                callback(userRoleDeleted);
            });
        });
    }
}

export default UserRoleDao;