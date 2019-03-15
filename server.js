//----------------//
//  Dependencies  //
//----------------//
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')
const cors = require('cors')
const config = require('config')

const app = express()

//--------------//
//  Middleware  //
//--------------//
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(methodOverride('_method'))


//--------------------//
//  Wines Controller  //
//--------------------//
const winesController = require('./controllers/wines.js')
app.use('/wines', winesController)

//--------------------//
//  Users Controller  //
//--------------------//
const usersController = require('./controllers/users.js')
app.use('/users', usersController)

//-------------------//
//  Auth Controller  //
//-------------------//
const authController = require('./controllers/auth.js')
app.use('/auth', authController)

//-------------------------//
//  Environment Variables  //
//-------------------------//
const port = process.env.PORT || 5000
const MONGODB_URI = config.get('MONGODB_URI')

//---------------------------//
//  App Listener: Port 5000  //
//---------------------------//
app.listen(port, () => {
  console.log('Server is connected on port number: ' + port);
})

//------------------------//
//  Connect to Mongooose  //
//------------------------//
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true,
    useCreateIndex: true
  },
  () => { console.log('Mongoose connection established:', MONGODB_URI) }
)
//--Error Messages--//
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('Mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))
