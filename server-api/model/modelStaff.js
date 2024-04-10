const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
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
  office: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Office",
  },
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

let Staff = mongoose.model("Staff", staffSchema);

module.exports = { Staff };
