const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  if (currentDay === 6) {
    day = "Saturday";
  } else if (currentDay === 0) {
    day = "Sunday";
  } else if (currentDay === 1) {
    day = "Monday";
  } else if (currentDay === 2) {
    day = "Tuesday";
  } else if (currentDay === 3) {
    day = "Wednesday";
  } else if (currentDay === 4) {
    day = "Thursday";
  } else if (currentDay === 5) {
    day = "Friday";
  }
  res.render("list", { kindOfDay: day });
  console.log(currentDay, "curent day");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
