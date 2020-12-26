const mongoose = require("mongoose");

const CharSchmea = new mongoose.Schema({
  good: String,
  bad: String,
  rating: Number,
});

module.exports = mongoose.model("Char", CharSchmea);
