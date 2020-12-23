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

app.get("/:id", async (req, res) => {
  const char = await db.Char.findOne({ name: req.params.id });
  res.json(char);
});

app.post("/create", async (req, res) => {
  try {
    const newChar = {
      name: req.body.name,
      cc: 0,
      gold: 0,
      exp: 900,
      Event: [],
    };
    await db.Char.create(newChar);
    res.json("Done");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
});

app.post("/addEvenet", async (req, res) => {
  try {
    const char = await db.Char.findOne({ name: req.body.char });
    const event = {
      name: req.body.event,
      gold: Number(req.body.gold),
      exp: Number(req.body.exp),
      cc: Number(req.body.cc),
    };
    console.log(char);
    char.Event.push(event);
    char.gold += event.gold;
    char.exp += event.exp;
    char.cc += event.cc;
    char.save();
    res.json("Done");
  } catch (err) {
    console.log(err);
    res.json("err");
  }
});

app.listen(PORT, () => console.log("server online"));
