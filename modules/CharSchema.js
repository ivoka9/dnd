const mongoose = require("mongoose");

const CharSchmea = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  exp: Number,
  gold: Number,
  cc: Number,
  Event: [
    {
      name: String,
      exp: Number,
      gold: Number,
      cc: Number,
    },
  ],
});

module.exports = mongoose.model("Char", CharSchmea);
