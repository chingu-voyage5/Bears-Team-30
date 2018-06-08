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
    qty: Number,
    scannedAt: Date,
    deliveredAt: Date,
    status: String
  },
  { timestamps: { orderedAt: 'createdAt', updatedAt: 'updatedAt' } }
);

orderSchema.pre('save', function(next) {
  let prices = this.menuItems.map(item => item.price);
  this.total =
    prices.reduce((sum, currentValue) => sum + currentValue) -
    this.discountCards * 2;
  this.totalDishes = prices.length;

  next();
});

module.exports = mongoose.model('Order', orderSchema);
