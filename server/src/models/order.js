const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
  name: String,
  remark: String,
  menuItems: Array,
  totalDishes: Number,
  discountCards: Number,
  total: Number,
  qty: Number,
  orderedAt: String,
  scannedAt: String,
  deliveredAt: String,
  status: String
});

// "[{\"foodId\":\"5b1aa7ec7ffd9a121d5030ef\",\"name\":\"chicken appel\",\"category\":\"adult\",\"price\":16,\"qty\":2}]";
module.exports = mongoose.model('Order', orderSchema);
