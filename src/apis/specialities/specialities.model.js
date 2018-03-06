/**
 * Specialities api models
 */

import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

var SpecialitiesSchema = new Schema({
    id: { type: Date, default: Date.now },
    name: String
}, { collection: 'specialities' });

// Compile model from schema
var Specialities = mongoose.model('Specialities', SpecialitiesSchema);

module.exports = Specialities;