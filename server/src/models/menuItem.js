const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const menuItemSchema = new Schema({
  name: String,
  price: Number,
  category: String
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
