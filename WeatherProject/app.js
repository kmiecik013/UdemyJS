const express = require('express')
const app = express()
const https = require('https');
const port = 3000

app.get('/', (req, res) => {

  url = 
  https.get(url)



  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})