/**
 * user-message-map api models
 */

//Require Mongoose
import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

var UserMessageMapSchema = new Schema({
    messageId: String,
    userRId: String,
    userSId: String,
    createdBy: String,
    updatedBy: String,
    createdTime: { type: Date, default: Date.now },
    updatedTime: { type: Date, default: Date.now }
}, { collection: 'user_message_map' });

// Compile model from schema
var UserMessageMap = mongoose.model('UserMessageMap', UserMessageMapSchema);

module.exports = UserMessageMap;