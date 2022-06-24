const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ = require("lodash") 

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistdb", {
  useNewUrlParser: true,
});

//-----Schema Item ----
const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Go to the toilet",
});

const item2 = new Item({
  name: "Go for a run",
});

const item3 = new Item({
  name: "Eat lunch",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name:String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);



app.get("/", (req, res) => {
  let day = date();

  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Item have been added");
        }
      });
      res.redirect("/")
 
    } else {

      res.render("list", { listTitle: "Today", newListItems: foundItems });
      console.log(foundItems);
    }
  });
});

app.get("/:customListName", function(req,res){
  
  const customListName= _.capitalize(req.params.customListName)

  List.findOne({name:customListName}, function(err, foundList){
      if (!err) {
        if (!foundList) {
          const list = new List({
            name:customListName,
            items: defaultItems
          })
        
          if (Item.find())
        
          list.save() 
          res.redirect("/" + customListName);
        } else {
          res.render("list",{listTitle: foundList.name, newListItems: foundList.items} );
         
        }

      }
  })

  const list = new List({
    name:customListName,
    items: defaultItems
  })

  if (Item.find())

  list.save()

})

app.post("/", (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list

  const item = new Item({
    name: itemName
  });

  if (listName === "Today"){
    item.save()
    res.redirect("/")
  } else {
    List.findOne({name:listName}, function(err, foundList){
      foundList.items.push(item)
      foundList.save()
      res.redirect("/" + listName);
    })
  }





});

app.post("/delete", function(req,res){
  const checkItemId = req.body.checkbox
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkItemId, function(err){
    if (!err) {
      console.log("successful deletion") 
      res.redirect("/")
    }
   
  })
  } else {

    List.findOneAndUpdate({name:listName}, {$pull:{items:{_id:checkItemId}}}, function(err, foundList){
      if(!err) {
        res.redirect("/" + listName)
      }
    })
      
  }

 
})





app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  let day = date();
  res.render("about", { listTitle: day });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
