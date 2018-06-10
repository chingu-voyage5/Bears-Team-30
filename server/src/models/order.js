const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
  name: { type: String, required: true },
  remark: String,
  menuItems: { type: Array, required: true },
  totalQty: { type: Number, required: true },
  discountCards: Number,
  total: { type: Number, required: true },
  orderedAt: { type: String, required: true },
  scannedAt: String,
  deliveredAt: String,
  status: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
