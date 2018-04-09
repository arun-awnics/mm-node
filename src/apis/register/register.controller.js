import express from 'express';
import DoctorService from '../doctor/doctor.service';
import UserService from '../user/user.service';
import log from '../../config/log4js.config';

const router = express.Router();
const doctorService = new DoctorService();
const userService = new UserService();

/**
 * @swagger
 * definitions:
 *   Doctor:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       picUrl:
 *         type: string
 *       regNo:
 *         type: string
 *       speciality:
 *         type: string
 *       experience:
 *         type: string
 *       Description:
 *         type: string
 *       email:
 *         type: string
 *       phoneNo:
 *         type: string
 *       status:
 *         type: string
 *       waitingTime:
 *         type: integer
 *       rating:
 *         type: integer
 *       videoUrl:
 *         type: string
 *       appearUrl:
 *         type: string
 *       thumbnailUrl:
 *         type: string
 *       lastUpdatedTime:
 *         type: string
 *         format: date
 *       termsAccepted:
 *         type: boolean
 */

/**
 * @swagger
 * /doctor/controllers/createDoctor:
 *   post:
 *     tags:
 *       - Doctor
 *     description: Creates a new doctor
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: doctor
 *         description: Doctor object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Doctor'
 *     responses:
 *       200:
 *         description: Successfully created in MySql
 */
router.post('/doctors', function(req, res) {
    var doctor = req.body;
    doctorService.create(doctor, (result) => {
        res.send(result);
    });
});

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
router.post('/users', function(req, res) {
    var user = req.body;
    userService.register(user, (result) => {
        res.send(result);
    });
});

/**
 * updateActivate 
 */
router.get('/activates/:token', function(req, res) {
    userService.activateUser(req.params.token, (result) => {
        res.sendFile('./activate.html', { root: __dirname });
    });
});

module.exports = router;