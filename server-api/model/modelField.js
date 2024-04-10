const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
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

let Field = mongoose.model("Field", fieldSchema);

module.exports = { Field };
