var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StudentSchema = new Schema({

module.exports = mongoose.model('Student', StudentSchema);