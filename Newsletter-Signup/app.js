const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const http = require()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
  let firstName = req.body.fName
  let lastName = req.body.lName
  let email = req.body.email

  let data = {
    members: [
      {
        email_address: email,
        status:"subscribed",
        merge_fields: {
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  }

  let jsonData = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/447c8cec5b"

  const options = {
    method:"POST",  
    auth: "michaelk:e1fd623d09495d6afbee0c8bd188b689-us14"
  }

  const request = https.request(url, options, (response)=> {

      console.log(response.statusCode)

      response.on("data", (data) => {
        console.log(JSON.parse(data))
      })
  })

  request.write(jsonData);
  request.end();



 
})




app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})

//e1fd623d09495d6afbee0c8bd188b689-us14

