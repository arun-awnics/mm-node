import privilegeModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
DAO for Doctor api
*/
class PrivilegeDao {
    constructor() {}

    /**
     * insert method
     */
    insert(privilege, callback) {
        sequelize.sync({ force: false }).then(() => {
            return sequelize.transaction(function(t) {
                return privilegeModel.privilege.create(privilege, { transaction: t }).then(function(privilegeInserted) {
                    callback(privilegeInserted);
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        return privilegeModel.privilege.findAll().then((allPrivilege) => {
            callback(allPrivilege);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        return privilegeModel.privilege.findById(id).then((privilege) => {
            callback(privilege);
        });
    }

    /**
     * Update method
     */
    update(privilege, callback) {
        return sequelize.transaction(function(t) {
            return privilegeModel.privilege.update(privilege, {
                where: {
                    id: privilege.id
                }
            }, { transaction: t }).then(function(privilegeUpdated) {
                callback(privilegeUpdated);
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        return sequelize.transaction(function(t) {
            return privilegeModel.privilege.destroy({
                where: {
                    id: id
                }
            }).then(function(privilegeDeleted) {
                callback(privilegeDeleted);
            });
        });
    }
}

export default PrivilegeDao;