const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let today = new Date();

  if (today.getDay() === 6 || today.getDate() === 0) {
    res.write("<h1>Yay it's the weekend</h1>")
  }

  else {
    res.write("<h1>DAarn workday</h1>")

    res.send()
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})