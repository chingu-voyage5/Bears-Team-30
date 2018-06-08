const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema(
  {
    name: String,
    remark: String,
    menuItems: Array,
    totalDishes: Number,
    discountCards: Number,
    total: Number,
    category: String,
    scannedAt: Date,
    deliveredAt: Date,
    status: String
  },
  { timestamps: { orderedAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('Order', orderSchema);
