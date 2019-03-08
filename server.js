const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Body Parser Middleware
app.use(bodyParser.json())

const port = 5000

app.listen(port, () => {
  console.log('Server is connected on port number: ' + port);
})
