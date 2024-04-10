const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, default: 0 },
  status: { type: String, default: 'Pending' },
  paymentMethod: { type: String },
  shippingAddress: {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String },
    province: { type: String },
    district: { type: String },
    ward: { type: String },
    detail: { type: String, required: true },
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
