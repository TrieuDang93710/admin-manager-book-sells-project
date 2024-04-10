const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Buyer",
  },
  statused: {
    type: String,
    required: true,
  },
});

let Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
