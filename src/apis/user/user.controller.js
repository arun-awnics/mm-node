var express = require('express');
var router = express.Router();

var UserDao = require('./user.dao');
var userDao = new UserDao();

/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phoneNo:
 *         type: string
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
 */
/**
 * @swagger
 * /controllers/postUser:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
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
 *         description: Successfully created
 */
router.post('/controllers/createdUser', userDao.insert);

/**
 * @swagger
 * /controllers/getUser:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/controllers/getUser', userDao.readAll);

/**
 * @swagger
 * /controllers/getUserById:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns user by id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/controllers/getUserById/:id', userDao.readById);

/**
 * @swagger
 * /controllers/putUser/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/controllers/putUser/:id', userDao.update);

/**
 * @swagger
 * /controllers/deleteUser/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a user
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
 *         description: Successfully deleted
 */
router.delete('/controllers/deleteUser/:id', userDao.delete);

module.exports = router;