const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Wine
const WineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String
  },
  price: {
    type: Number
  },
  ownerId: {
    type: String
  },
  region: {
    type: String
  },
  alcoholPercent: {
    type: Number
  },
  vintage: {
    type: Number
  },
  producer: {
    type: String
  },
  tastingNotes: {
    type: String
  },
  grape: {
    type: String
  }
})

const Wine = mongoose.model('Wine', WineSchema)

module.exports = Wine
