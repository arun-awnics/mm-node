import OrderRequestsService from './orderRequest.service';
import express from 'express';
import log from '../../config/log4js.config';

var orderRequestsService = new OrderRequestsService();
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   OrderRequest:
 *     properties:
 *       id:
 *         type: string
 *         format: date
 *       tel:
 *         type: string
 *       fullname:
 *         type: string
 *       watel:
 *         type: string
 *       mail:
 *         type: string
 *       uFile:
 *         type: integer
 *       manual:
 *         type: string
 *       termsAccepted:
 *         type: true
 *       confirmationId:
 *         type: string
 *       location:
 *         type: string
 *       waitingTime:
 *         type: integer
 *       dp:
 *         type: integer
 *       button:
 *         type: string
 *       speciality:
 *         type: string
 */
/**
 * @swagger
 * /orderRequest/controllers/createOrderRequest:
 *   post:
 *     tags:
 *       - OrderRequest
 *     description: Creates a new orderRequest in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: OrderRequest
 *         description: orderRequest object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OrderRequest'
 *     responses:
 *       200:
 *         description: Successfully created in MySql db
 */
router.post('/controllers/createOrderRequest', (req, res) => {
    orderRequestsService.create(req.body, (result) => {
        res.json(result);
    });
});

/**
 * @swagger
 * /orderRequest/controllers/readAllOrderRequests:
 *   get:
 *     tags:
 *       - OrderRequest
 *     description: Returns all orderRequest from MySql db
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of orderRequest from MySql db
 *         schema:
 *           $ref: '#/definitions/OrderRequest'
 */
router.get('/controllers/readAllOrderRequests', (req, res) => {
    orderRequestsService.readAll((results) => {
        res.json(results);
    });
});

/**
 * @swagger
 * /orderRequest/controllers/readOrderRequestById/{id}:
 *   get:
 *     tags:
 *       - OrderRequest
 *     description: Returns orderRequest by id from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id for orderRequest to return
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/OrderRequest'
 *     responses:
 *       200:
 *         description: An orderRequest return from MySql db
 */
router.get('/controllers/readOrderRequestById/:id', (req, res) => {
    orderRequestsService.readById(req.params.id, (result) => {
        res.json(result);
    });
});

/**
 * @swagger
 * /orderRequest/controllers/updateOrderRequest:
 *   put:
 *     tags:
 *       - OrderRequest
 *     description: Updates a single orderRequest in MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: orderRequest data that needs to be update
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OrderRequest'
 *     responses:
 *       200:
 *         description: Successfully updated in MySql db
 */
router.put('/controllers/updateOrderRequest', (req, res) => {
    orderRequestsService.update(req.body, (result) => {
        res.json(result);
    });
});

/**
 * @swagger
 * /orderRequest/controllers/removeOrderRequest/{id}:
 *   delete:
 *     tags:
 *       - OrderRequest
 *     description: Deletes a single orderRequest from MySql db
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: orderRequest's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted from MySql db
 */
router.delete('/controllers/removeOrderRequest/:id', (req, res) => {
    orderRequestsService.remove(req.params.id, (result) => {
        res.send('OrderRequest deleted');
    });
});

module.exports = router;