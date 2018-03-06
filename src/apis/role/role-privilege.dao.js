import rolePrivilegeModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
 *DAO for RolePrivilege api
 */
class RolePrivilegeDao {
    constructor() {}

    /**
     * insert method
     */
    insert(rolePrivilege, callback) {
        sequelize.sync({ force: false }).then(() => {
            return sequelize.transaction(function(t) {
                return rolePrivilegeModel.role_privilege.create(rolePrivilege, { transaction: t }).then(function(rolePrivilegeInserted) {
                    callback(rolePrivilegeInserted);
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        return rolePrivilegeModel.role_privilege.findAll().then((allRolePrivilege) => {
            callback(allRolePrivilege);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        return rolePrivilegeModel.role_privilege.findById(id).then((rolePrivilege) => {
            callback(rolePrivilege);
        });
    }

    /**
     * Update method
     */
    update(rolePrivilege, callback) {
        return sequelize.transaction(function(t) {
            return rolePrivilegeModel.role_privilege.update(rolePrivilege, {
                where: {
                    id: rolePrivilege.id
                }
            }, { transaction: t }).then(function(rolePrivilegeUpdated) {
                callback(rolePrivilegeUpdated);
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        return sequelize.transaction(function(t) {
            return rolePrivilegeModel.role_privilege.destroy({
                where: {
                    id: id
                }
            }).then(function(rolePrivilegeDeleted) {
                callback(rolePrivilegeDeleted);
            });
        });
    }
}

export default RolePrivilegeDao;