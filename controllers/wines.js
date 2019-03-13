const express = require('express')
const router = express.Router()
const Wine = require('../models/Wine.js')

// GET all route
router.get('/', (req, res) => {
    Wine.find()
      .then(wines => res.json(wines))
})

// CREATE route
router.post('/', (req, res) => {
    const newWine = new Wine({
      name: req.body.name
    })

    newWine.save().then(wine => res.json(wine))
})

// DELETE route
router.delete('/:id', (req, res) => {
  Wine.findById(req.params.id)
    .then(wine => wine.remove().then(() => {
      res.json({ success: true})
    }))
    .catch(error => res.status(404).json({ success: false}))
})


module.exports = router;
