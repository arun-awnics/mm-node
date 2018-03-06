import express from 'express';
import GroupService from './group.service';
import log from '../../config/log4js.config';

var router = express.Router();
var groupService = new GroupService();

/**
 * @swagger
 * definitions:
 *   Group:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       url:
 *         type: string
 *       userId:
 *         type: string
 *       description:
 *         type: string
 *       picture:
 *         type: string
 *       createdBy:
 *         type: string
 *       updatedBy:
 *         type: string
 *       
 */
/**
 * @swagger
 * /group/controllers/createGroup:
 *   post:
 *     tags:
 *       - Group
 *     description: Creates a new group in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: group
 *         description: Group object 
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Group'
 *     responses:
 *       200:
 *         description: Successfully created in MySql db
 */
router.post('/controllers/createGroup', function(req, res) {
    var group = req.body;
    groupService.create(group, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/getGroups:
 *   get:
 *     tags:
 *       - Group
 *     description: Returns all group from MySql
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of group from MySql
 *         schema:
 *           $ref: '#/definitions/Group'
 */
router.get('/controllers/getGroups', function(req, res) {
    groupService.getAll((result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/getGroupById/{id}:
 *   get:
 *     tags:
 *       - Group
 *     description: Returns Group by id from MySql
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for Group to return
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Group'
 *     responses:
 *       200:
 *         description: An Group return from MySql
 */
router.get('/controllers/getGroupById/:id', function(req, res) {
    var id = req.params.id;
    groupService.getById(id, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/putGroup:
 *   put:
 *     tags:
 *       - Group
 *     description: Updates a single Group in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Group data that needs to be update
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Group'
 *     responses:
 *       200:
 *         description: Successfully updated in MySql db
 */
router.put('/controllers/putGroup', function(req, res) {
    var group = req.body;
    groupService.update(group, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/deleteGroup/{id}:
 *   delete:
 *     tags:
 *       - Group
 *     description: Deletes a single Group from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Group's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql db
 */
router.delete('/controllers/deleteGroup/:id', function(req, res) {
    var id = req.params.id;
    groupService.delete(id, (result) => {
        res.send('Number of groups deleted: ' + result);
    });
});

/**
 * @swagger
 * definitions:
 *   GroupUserMap:
 *     properties:
 *       id:
 *         type: integer
 *       groupId:
 *         type: string
 *       userId:
 *         type: string
 *       createdBy:
 *         type: string
 *       updatedBy:
 *         type: string
 */
/**
 * @swagger
 * /group/controllers/createGroupUserMap:
 *   post:
 *     tags:
 *       - GroupUserMap
 *     description: Creates a new GroupUserMap in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: groupUserMap
 *         description: GroupUserMap object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/GroupUserMap'
 *     responses:
 *       200:
 *         description: Successfully created in MySql db
 */
router.post('/controllers/createGroupUserMap', function(req, res) {
    var groupUser = req.body;
    groupService.createGroupUserMap(groupUser, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/getGroupUserMaps:
 *   get:
 *     tags:
 *       - GroupUserMap
 *     description: Returns all groupUserMap from MySql db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of groupUserMap from MySql db
 *         schema:
 *           $ref: '#/definitions/GroupUserMap'
 */
router.get('/controllers/getGroupUserMaps', function(req, res) {
    groupService.getAllGroupUserMaps((result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/getGroupUserMapById/{id}:
 *   get:
 *     tags:
 *       - GroupUserMap
 *     description: Returns groupUserMap by id from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for groupUserMap to return 
 *         required: true
 *         type: integer
 *         schema:
 *           $ref: '#/definitions/GroupUserMap'
 *     responses:
 *       200:
 *         description: An GroupUserMap return from MySql db
 */
router.get('/controllers/getGroupUserMapById/:id', function(req, res) {
    var id = req.params.id;
    groupService.getGroupUserMapById(id, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/putGroupUserMap:
 *   put:
 *     tags:
 *       - GroupUserMap
 *     description: Updates a single GroupUserMap in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: GroupUserMap data that needs to be update
 *         required: true
 *         schema:
 *           $ref: '#/definitions/GroupUserMap'
 *     responses:
 *       200:
 *         description: Successfully updated in MySql db
 */
router.put('/controllers/putGroupUserMap', function(req, res) {
    var groupUser = req.body;
    groupService.updateGroupUserMap(groupUser, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /group/controllers/deleteGroupUserMap/{id}:
 *   delete:
 *     tags:
 *       - GroupUserMap
 *     description: Deletes a single GroupUserMap from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: GroupUserMap's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql db
 */
router.delete('/controllers/deleteGroupUserMap/:id', function(req, res) {
    var id = req.params.id;
    groupService.deleteGroupUserMap(id, (result) => {
        res.send('Number of groupUserMap deleted: ' + result);
    });
});

/**
 * for fetching all the groups for given user
 */
router.get('/controllers/getGroups/user/:userId/groups', (req, res) => {
    groupService.getAllGroupsByUserId((req.params.userId))
        .then(result => res.send(result));
});

/**
 * creating new group by doctor/bot
 */
router.post('/controllers/createGroupAuto/:receiverId', function(req, res) {
    var group = req.body;
    var receiverId = req.params.receiverId;
    groupService.createGroupAuto(group, receiverId, (result) => {
        res.send(result);
    });
});

/**
 * creating new group manually by doctor/bot
 */
router.post('/controllers/createGroupManual/:receiverId/:doctorId', function(req, res) {
    var group = req.body;
    var receiverId = req.params.receiverId;
    var doctorId = req.params.doctorId;
    groupService.createGroupManual(group, receiverId, doctorId, (result) => {
        res.send(result);
    });
});

module.exports = router;
