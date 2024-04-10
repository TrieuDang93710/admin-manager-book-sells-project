const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const cartItemSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  quantity: { type: Number, default: 1 },
  bookInfo: {
    id: String,
    name: String,
    sales: Number,
    description: String,
    price: Number,
    image: String,
    viewCounts: Number,
    author: String,
  },
});

const cartSchema = new mongoose.Schema({
  id: { type: String },
  items: [cartItemSchema],
  total: { type: Number, default: 0 },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
