const express = require('express')
const https = require('https');
const bodyParser = require("body-parser");
const port = 3000;


const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  
});

app.post("/", (req, res) => {

const query = req.body.cityName
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=fea93a98bf36edbc4104f8b92caa8e9b&units=metric"
 
console.log(req.body)

https.get(url, (response) => {
    console.log(response.statusCode)


    response.on("data", (data) => {
        const weatherData = JSON.parse(data)
        const mainTemperature = weatherData.main.temp
        const description = weatherData.weather[0].main
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        console.log(mainTemperature);
        console.log(description);

        res.write("<p> The weather is " + description + "</p>")

        res.write("<h1>The temperatur is " + (mainTemperature) + " C </h1>")

        res.write("<img src=" + imageURL + ">");

        res.send()
    })
  })


})
 




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})