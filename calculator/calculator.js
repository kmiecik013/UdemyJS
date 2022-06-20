const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/",(req,res) => {
  

  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  let result = num1*num2;

res.send("thanks for calculating " + result);
});


app.get("/bmicalculator", (req,res) => {
  res.sendFile(__dirname + "/bmlCalculator.html") 
  })

app.post("/bmi", (req,res) => {
  let weight = Number(req.body.weight)
  let height = Number(req.body.height)
  let bmi = Math.round((weight/(height*height))*100)/100

  res.send("Your BMI is " + bmi)
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})