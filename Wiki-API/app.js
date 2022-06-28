const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema); 

app.get('/articles', (req, res) => {
  Article.find(function(err, foundArticles) {

    if (!err) {
    res.send(foundArticles)
    }
    else {
      res.send(err)
    }
})
});

app.post('/articles', (req, res) => {


  console.log(req.body.title);
  console.log(req.body.content)

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  })

  newArticle.save(function(err) {
    if (!err) {
      res.send("Successfully added a new article")
    } else {
      res.send(err)
    }
  });
})

app.delete("articles", (req, res) => {
  Article.deleteMany(function(err){
    if(!err){
      res.send("Success on deleting")
    } else {
      res.send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  