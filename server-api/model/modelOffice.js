const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  staff: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
  ],
});

let Office = mongoose.model("Office", officeSchema);

module.exports = { Office };
