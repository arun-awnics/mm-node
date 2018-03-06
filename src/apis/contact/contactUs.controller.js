import express from 'express';
import ContactService from './contactUs.service';

var router = express.Router();
var contactService = new ContactService();

/**
 * @swagger
 * definitions:
 *   Contact:
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
 *         type: integer
 *       description:
 *         type: string
 *       email:
 *         type: string
 *       phoneNo:
 *         type: integer
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
 *       termsAccepted:
 *         type: true
 */
/**
 * @swagger
 * /contact/controllers/createContact:
 *   post:
 *     tags:
 *       - Contact
 *     description: Creates a new contact in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: contact object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Successfully created in MySql db
 */
router.post('/controllers/createContact', function(req, res) {
    var contact = req.body;
    contactService.create(contact, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /contact/controllers/getContacts:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns all contact from MySql db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of contact from MySql db.
 *         schema:
 *           $ref: '#/definitions/Contact'
 */
router.get('/controllers/getContacts', function(req, res) {
    contactService.getAll((result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /contact/controllers/getContactById/{id}:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns contact by id from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for contact to return
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: An contact return from MySql db
 *         schema:
 *           $ref: '#/definitions/Contact'
 */
router.get('/controllers/getContactById/:id', function(req, res) {
    var id = req.params.id;
    contactService.getById(id, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /contact/controllers/putContact:
 *   put:
 *     tags:
 *       - Contact
 *     description: Updates a single contact
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Contact data that needs to be update
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Successfully updated data in MySql
 */
router.put('/controllers/putContact', function(req, res) {
    var contact = req.body;
    contactService.update(contact, (result) => {
        res.send(result);
    });
});

/**
 * @swagger
 * /contact/controllers/deleteContact/{id}:
 *   delete:
 *     tags:
 *       - Contact
 *     description: Deletes a single contact from MySql
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Contact's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql db
 */
router.delete('/controllers/deleteContact/:id', function(req, res) {
    var id = req.params.id;
    contactService.delete(id, (result) => {
        res.send('Number of contact deleted: ' + result);
    });
});

module.exports = router;