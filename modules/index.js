const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("db Working"));

module.exports = {
  Comment: require("./CharSchema"),
};
