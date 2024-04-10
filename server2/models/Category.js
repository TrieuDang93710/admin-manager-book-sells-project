const mongoose = require('mongoose');
const book = require('./Book');

const bookTypeSchema = new mongoose.Schema({
  id: String,
  name: String,
  books: [book.schema], 
});

const categorySchema = new mongoose.Schema({
  id: String,
  name: String,
  bookTypes: [bookTypeSchema],
});


const Category = mongoose.model('Category', categorySchema);
const BookType = mongoose.model('BookType', bookTypeSchema);

module.exports = {Category, BookType};