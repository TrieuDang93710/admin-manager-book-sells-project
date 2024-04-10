const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },

  publishedDate: {
    type: String,
  },
  quantity: {
    type: String,
    required: true,
  },
  priceSell: {
    type: String,
    required: true,
  },
  priceDefault: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Field",
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Status",
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Buyer",
  },
});

let Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
