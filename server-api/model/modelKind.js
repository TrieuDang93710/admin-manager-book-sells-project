const mongoose = require("mongoose");

const kindSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  kind: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Field",
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

let Kind = mongoose.model("Kind", kindSchema);

module.exports = { Kind };
