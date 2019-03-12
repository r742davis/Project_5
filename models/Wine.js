const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema for Wine
const WineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // ,
  // type: {
  //   type: String,
  //   required: true
  // },
  // price: {
  //   type: Number,
  //   required: true
  // },
  // region: {
  //   type: String
  // },
  // alcoholPercentage: {
  //   type: Number,
  //   required: true
  // },
  // vintage: {
  //   type: Number,
  //   required: true
  // },
  // producer: {
  //   type: String,
  //   required: true
  // },
  // reserve: {
  //   type: Boolean
  // },
  // estate: {
  //   type: Boolean
  // },
  // tastingNotes: {
  //   type: String
  // },
  // grape: {
  //   type: String
  // },
  // wineScore: {
  //   type: Number
  // }
})

const Wine = mongoose.model('Wine', WineSchema)

module.exports = Wine
