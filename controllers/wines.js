const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const Wine = require('../models/Wine.js')

// GET all route
router.get('/', auth, (req, res) => {
    Wine.find()
      .then(wines => res.json(wines))
})

// CREATE route
router.post('/', auth, (req, res) => {
    const newWine = new Wine({
      name: req.body.name
    })

    newWine.save().then(wine => res.json(wine))
})

// DELETE route
router.delete('/:id', auth, (req, res) => {
  Wine.findById(req.params.id)
    .then(wine => wine.remove().then(() => {
      res.json({ success: true})
    }))
    .catch(error => res.status(404).json({ success: false}))
})

//EDIT route - Need to Add


module.exports = router;
