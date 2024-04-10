const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const customerSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4() },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  phoneNumber: String,
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
