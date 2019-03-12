const express = require('express')
const router = express.Router()
const Wine = require('../models/Wine.js')

// GET all route
router.get('/', (req, res) => {
    Wine.find()
      .then(wines => res.json(wines))
})

// router.get('/new', (req, res) => {
//   res.render('new.ejs')
// })

// CREATE route
router.post('/', (req, res) => {
    const newWine = new Wine({
      name: req.body.name
    })

    newWine.save().then(wine => res.json(wine))
})

module.exports = router;
