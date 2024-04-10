const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const bookSchema = new mongoose.Schema({
  id: String,
  name: String,
  sales: Number,
  description: String,
  price: Number,
  image: String,
  viewCounts: Number,
  author: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;