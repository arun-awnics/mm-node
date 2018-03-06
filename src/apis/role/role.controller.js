import express from 'express';
import RoleService from './role.service';
import log from '../../config/log4js.config';

var router = express.Router();
var roleService = new RoleService();

/**
 * API's for privilege
 */
router.post('/createPrivilege', function(req, res) {
    var privilege = req.body;
    roleService.createPrivilege(privilege, (result) => {
        res.send(result);
    });
})

router.get('/getAllPrivilege', function(req, res) {
    roleService.getAllPrivilege((result) => {
        res.send(result);
    });
});

router.get('/getByIdPrivilege/:id', function(req, res) {
    var id = req.params.id;
    roleService.getByIdPrivilege(id, (result) => {
        res.send(result);
    });
});

router.put('/updatePrivilege', function(req, res) {
    var privilege = req.body;
    roleService.updatePrivilege(privilege, (result) => {
        res.send(result);
    });
});

router.delete('/deletePrivilege/:id', function(req, res) {
    var id = req.params.id;
    roleService.deletePrivilege(id, (result) => {
        res.send('Number of Privilege deleted: ' + result);
    });
});

/**
 * API's for role-privilege
 */
router.post('/createRolePrivilege', function(req, res) {
    var rolePrivilege = req.body;
    roleService.createRolePrivilege(rolePrivilege, (result) => {
        res.send(result);
    });
})

router.get('/getAllRolePrivilege', function(req, res) {
    roleService.getAllRolePrivilege((result) => {
        res.send(result);
    });
});

router.get('/getByIdRolePrivilege/:id', function(req, res) {
    var id = req.params.id;
    roleService.getByIdRolePrivilege(id, (result) => {
        res.send(result);
    });
});

router.put('/updateRolePrivilege', function(req, res) {
    var rolePrivilege = req.body;
    roleService.updateRolePrivilege(rolePrivilege, (result) => {
        res.send(result);
    });
});

router.delete('/deleteRolePrivilege/:id', function(req, res) {
    var id = req.params.id;
    roleService.deleteRolePrivilege(id, (result) => {
        res.send('Number of RolePrivilege deleted: ' + result);
    });
});

/**
 * API's for role
 */
router.post('/createRole', function(req, res) {
    var role = req.body;
    roleService.createRole(role, (result) => {
        res.send(result);
    });
})

router.get('/getAllRole', function(req, res) {
    roleService.getAllRole((result) => {
        res.send(result);
    });
});

router.get('/getByIdRole/:id', function(req, res) {
    var id = req.params.id;
    roleService.getByIdRole(id, (result) => {
        res.send(result);
    });
});

router.put('/updateRole', function(req, res) {
    var role = req.body;
    roleService.updateRole(role, (result) => {
        res.send(result);
    });
});

router.delete('/deleteRole/:id', function(req, res) {
    var id = req.params.id;
    roleService.deleteRole(id, (result) => {
        res.send('Number of Role deleted: ' + result);
    });
});

/**
 * API's for user-role
 */
router.post('/createUserRole', function(req, res) {
    var userRole = req.body;
    roleService.createUserRole(userRole, (result) => {
        res.send(result);
    });
})

router.get('/getAllUserRole', function(req, res) {
    roleService.getAllUserRole((result) => {
        res.send(result);
    });
});

router.get('/getByIdUserRole/:id', function(req, res) {
    var id = req.params.id;
    roleService.getByIdUserRole(id, (result) => {
        res.send(result);
    });
});

router.put('/updateUserRole', function(req, res) {
    var userRole = req.body;
    roleService.updateUserRole(userRole, (result) => {
        res.send(result);
    });
});

router.delete('/deleteUserRole/:id', function(req, res) {
    var id = req.params.id;
    roleService.deleteUserRole(id, (result) => {
        res.send('Number of UserRole deleted: ' + result);
    });
});

module.exports = router;