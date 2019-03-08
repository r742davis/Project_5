//----------------//
//  Dependencies  //
//----------------//
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = mongoose.connection
const methodOverride = require('method-override')

const app = express()

//--------------//
//  Middleware  //
//--------------//
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

//-------------------------//
//  Environment Variables  //
//-------------------------//
const port = process.env.PORT || 5000
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/" + "wine"

//---------------------------//
//  App Listener: Port 5000  //
//---------------------------//
app.listen(port, () => {
  console.log('Server is connected on port number: ' + port);
})

//------------------------//
//  Connect to Mongooose  //
//------------------------//
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => { console.log('Mongoose connection established:', mongoURI) }
)
//--Error Messages--//
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
