import PrivilegeDao from './privilege.dao';
import RolePrivilegeDao from './role-privilege.dao';
import RoleDao from './role.dao';
import UserRoleDao from './user-role.dao';
import log from '../../config/log4js.config';

var privilegeDao = new PrivilegeDao();
var rolePrivilegeDao = new RolePrivilegeDao();
var roleDao = new RoleDao();
var userRoleDao = new UserRoleDao();

class RoleService {
    constructor() {}

    /**
     * for privilege
     */
    createPrivilege(privilege, callback) {
        return privilegeDao.insert(privilege, (privilegeCreated) => {
            callback(privilegeCreated);
        });
    }

    getAllPrivilege(callback) {
        return privilegeDao.readAll((allPrivileges) => {
            callback(allPrivileges);
        });
    }

    getByIdPrivilege(id, callback) {
        return privilegeDao.readById(id, (privilege) => {
            callback(privilege);
        });
    }

    updatePrivilege(privilege, callback) {
        return privilegeDao.update(privilege, (privilegeUpdated) => {
            callback(privilegeUpdated);
        });
    }

    deletePrivilege(id, callback) {
        return privilegeDao.delete(id, (privilegeDeleted) => {
            callback(privilegeDeleted);
        });
    }

    /**
     * for role-privilege
     */
    createRolePrivilege(rolePrivilege, callback) {
        return rolePrivilegeDao.insert(rolePrivilege, (rolePrivilegeCreated) => {
            callback(rolePrivilegeCreated);
        });
    }

    getAllRolePrivilege(callback) {
        return rolePrivilegeDao.readAll((allRolePrivileges) => {
            callback(allRolePrivileges);
        });
    }

    getByIdRolePrivilege(id, callback) {
        return rolePrivilegeDao.readById(id, (rolePrivilege) => {
            callback(rolePrivilege);
        });
    }

    updateRolePrivilege(rolePrivilege, callback) {
        return rolePrivilegeDao.update(rolePrivilege, (rolePrivilegeUpdated) => {
            callback(rolePrivilegeUpdated);
        });
    }

    deleteRolePrivilege(id, callback) {
        return rolePrivilegeDao.delete(id, (rolePrivilegeDeleted) => {
            callback(rolePrivilegeDeleted);
        });
    }

    /**
     * for role
     */
    createRole(role, callback) {
        return roleDao.insert(role, (roleCreated) => {
            callback(roleCreated);
        });
    }

    getAllRole(callback) {
        return roleDao.readAll((allRoles) => {
            callback(allRoles);
        });
    }

    getByIdRole(id, callback) {
        return roleDao.readById(id, (role) => {
            callback(role);
        });
    }

    updateRole(role, callback) {
        return roleDao.update(role, (roleUpdated) => {
            callback(roleUpdated);
        });
    }

    deleteRole(id, callback) {
        return roleDao.delete(id, (roleDeleted) => {
            callback(roleDeleted);
        });
    }

    /**
     * for user-role
     */
    createUserRole(userRole, callback) {
        return userRoleDao.insert(userRole, (userRoleCreated) => {
            callback(userRoleCreated);
        });
    }

    getAllUserRole(callback) {
        return userRoleDao.readAll((allUserRoles) => {
            callback(allUserRoles);
        });
    }

    getByIdUserRole(id, callback) {
        return userRoleDao.readById(id, (userRole) => {
            callback(userRole);
        });
    }

    updateUserRole(userRole, callback) {
        return userRoleDao.update(userRole, (userRoleUpdated) => {
            callback(userRoleUpdated);
        });
    }

    deleteUserRole(id, callback) {
        return userRoleDao.delete(id, (userRoleDeleted) => {
            callback(userRoleDeleted);
        });
    }
}

export default RoleService;