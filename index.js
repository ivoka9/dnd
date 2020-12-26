const express = require("express");
const db = require("./modules");
const app = express();
const bodyParser = require("body-parser");
const e = require("express");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

require("dotenv").config();

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.post("/comment", async (req, res) => {
  const newCooment = {
    good: req.body.good,
    bad: req.body.bad,
    rating: Number(req.body.rating),
  };
  const char = await db.Comment.create(newCooment);
  await char.save();

  res.json("Thank you");
});

app.listen(PORT, () => console.log("server online"));
