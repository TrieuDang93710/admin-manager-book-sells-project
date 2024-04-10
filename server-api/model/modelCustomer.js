const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  buyer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
    },
  ],
});

let Customer = mongoose.model("Customer", customerSchema);

module.exports = { Customer };
