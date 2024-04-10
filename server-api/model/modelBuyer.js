const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  priceSell: {
    type: Number,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

let Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = { Buyer };
