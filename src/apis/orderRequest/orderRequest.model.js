/**
 * OrderRequest api models
 */

import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

var OrderRequestsSchema = new Schema({
    id: { type: Date, default: Date.now() },
    tel: String,
    fullname: String,
    watel: String,
    mail: String,
    uFile: String,
    manual: String,
    termsAccepted: Boolean,
    confirmationId: String,
    location: String,
    dp: String,
    button: String,
    speciality: String
}, { collection: 'order_request' });

// Compile model from schema
var OrderRequests = mongoose.model('OrderRequests', OrderRequestsSchema);

module.exports = OrderRequests;