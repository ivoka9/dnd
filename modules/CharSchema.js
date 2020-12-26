const mongoose = require("mongoose");

const CommentSchme = new mongoose.Schema({
  good: String,
  bad: String,
  rating: Number,
});

module.exports = mongoose.model("Comment", CommentSchme);
