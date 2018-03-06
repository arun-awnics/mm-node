/**
 * Message api models
 */

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    receiverId: Number,
    receiverType: String, // group or individual
    senderId: Number, //userId
    picUrl: String,
    text: String,
    type: String,
    status: String,
    contentType: String,
    contentData: {
        data: [String]
    },
    responseData: {
        data: [String]
    },
    lastUpdateTime: Date,
    createdBy: String,
    updatedBy: String,
    createdTime: { type: Date, default: Date.now() },
    updatedTime: { type: Date }
}, { collection: 'message' });

// Compile model from schema
var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;