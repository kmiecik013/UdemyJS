const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = ["Buy Food", "Cook Food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-us", options);

  res.render("list", { listTitle: day, newListItems: items });
  console.log(currentDay, "curent day");
});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-us", options);
  res.render("about", {listTitle: day});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
