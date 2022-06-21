const express = require('express')
const port = 3000
const bodyParser = require("body-parser")
const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
  let firstName = req.body.fName
  let lastName = req.body.lName
  let email = req.body.email

  console.log(firstName, "first name")
  console.log(lastName, "last name")
  console.log(email, "email")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})