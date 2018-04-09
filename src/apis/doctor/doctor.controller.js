import express from 'express';
import DoctorService from './doctor.service';
import log from '../../config/log4js.config';

var router = express.Router();
var doctorService = new DoctorService();

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
 * /doctor/controllers/getDoctors:
 *   get:
 *     tags:
 *       - Doctor
 *     description: Returns all doctors from MySql db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of doctors from MySql db
 *         schema:
 *           $ref: '#/definitions/Doctor'
 */
router.get('/doctors', function(req, res) {
    doctorService.getAll((result) => {
        res.json(result);
    });
});

/**
 * @swagger
 * /doctor/controllers/putDoctor:
 *   put:
 *     tags:
 *       - Doctor
 *     description: Updates a single doctor in MySQL db
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Doctor data that needs to be update 
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Doctor'
 *     responses:
 *       200:
 *         description: Successfully updated in MySql db
 */
router.put('/doctors', function(req, res) {
    var doctor = req.body;
    doctorService.update(doctor, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /doctor/controllers/deleteDoctor/{id}:
 *   delete:
 *     tags:
 *       - Doctor
 *     description: Deletes a  doctor from MySql
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Doctor's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql
 */
router.delete('/doctors/:id', function(req, res) {
    var id = req.params.id;
    doctorService.delete(id, (result) => {
        res.send('Number of doctor deleted: ' + result);
    });
});

/**
 * @swagger
 * /doctor/controllers/getDoctorById/{id}:
 *   get:
 *     tags:
 *       - Doctor
 *     description: Returns doctor by id from MySql
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for doctor to return
 *         required: true
 *         type: integer
 *         schema:
 *           $ref: '#/definitions/Doctor'
 *     responses:
 *       200:
 *         description: An doctor return from MySql db
 */
router.get('/doctors/:id', function(req, res) {
    var id = req.params.id;
    doctorService.getById(id, (result) => {
        res.send(result);
    });
});

/**
 * API's for consultation-schedule(user and doctor)
 */
router.post('/consultations', function(req, res) {
    var consultation = req.body;
    doctorService.createConsultation(consultation, (result) => {
        res.send(result);
    });
})

router.get('/consultations', function(req, res) {
    doctorService.getAllConsultation((result) => {
        res.send(result);
    });
});

router.get('/consultations/:id', function(req, res) {
    var id = req.params.id;
    doctorService.getByIdConsultation(id, (result) => {
        res.send(result);
    });
});

router.put('/consultations', function(req, res) {
    var consultation = req.body;
    doctorService.updateConsultation(consultation, (result) => {
        res.send(result);
    });
});

router.delete('/consultations/:id', function(req, res) {
    var id = req.params.id;
    doctorService.deleteConsultation(id, (result) => {
        res.send('Number of consultation deleted: ' + result);
    });
});

module.exports = router;