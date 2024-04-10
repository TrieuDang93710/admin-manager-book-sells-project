const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

let Status = mongoose.model("Status", statusSchema);

module.exports = { Status };
