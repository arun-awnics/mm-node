import express from 'express';
import UserDao from './user.dao';
import UserService from './user.service';
import log from '../../config/log4js.config';
//import activate from './activate';

var router = express.Router();
var userDao = new UserDao();
var userService = new UserService();

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phoneNo:
 *         type: integer
 *       picUrl:
 *         type: string
 *       description:
 *         type: string
 *       status:
 *         type: string
 *       waitingTime:
 *         type: integer
 *       rating:
 *         type: integer
 *       token:
 *         type: string
 *       activate:
 *         type: integer
 *       privilege:
 *         type: string
 *       createdBy:
 *         type: string
 *       updatedBy:
 *         type: string
 */
/**
 * @swagger
 * /user/controllers/createUser:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created in MySql db
 */
router.post('/controllers/createUser', function(req, res) {
    var user = req.body;
    userService.register(user, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /user/controllers/getUser:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all user from MySql db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of user from MySql db
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/controllers/getUsers', function(req, res) {
    userService.getAll((result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /user/controllers/getUserById/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns user by id from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for user to return
 *         required: true
 *         type: integer
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: An user return from MySql db
 */
router.get('/controllers/getUserById/:id', function(req, res) {
    var id = req.params.id;
    userService.getById(id, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /user/controllers/putUser:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: User data that needs to be update
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated in MySql db
 */
router.put('/controllers/putUser', function(req, res) {
    var user = req.body;
    userService.updateRegisteredUser(user, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /user/controllers/deleteUser/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a user from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql db
 */
router.delete('/controllers/deleteUser/:id', function(req, res) {
    var id = req.params.id;
    userService.deleteRegisteredUser(id, (result) => {
        res.send('Number of user deleted: ' + result);
    });
});

/**
 * updateActivate 
 */
router.get('/controllers/updateActivate/:token', function(req, res) {
    userService.activateUser(req.params.token, (result) => {
        res.sendFile('./activate.html', { root: __dirname })
    });
});

/**
 * find user by name
 */
router.get('/controllers/findUserByEmail/:email', (req, res) => {
    userService.findUserByEmail(req.params.email, (result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(401).send({ success: false, message: 'authentication failed' });
        }
    });
});

module.exports = router;