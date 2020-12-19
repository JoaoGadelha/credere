// defines the schema for the space probe

const mongoose = require('mongoose');
 

 const usrSchema = new mongoose.Schema({
   x: String,
   y: String,
   direction: String
}, { collection: 'credere' });

module.exports = mongoose.model('credere', usrSchema);
