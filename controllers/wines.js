const express = require('express')
const router = express.Router()
const Wines = require('../models/Wine.js')

router.get('/', (req, res) => {
    res.send('Found the wine page!')
})

module.exports = router;
