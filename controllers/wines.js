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
      name: req.body.name,
      type: req.body.type,
      price: req.body.price
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

//SHOW route
router.get('/:id', auth, (req, res) => {
  Wine.findById(req.params.id, (err, foundWine) => {
    res.send(foundWine)
  })
})

//EDIT route - Need to TEST
router.put('/:id', auth, (req, res) => {
  Wine.findByIdAndUpdate(req.params.id, (err, wine) => {
    if (!wine) {
      res.status(404).send('Wine was not found. Please try again');
    } else {
      wine.name = req.body.name,
      wine.type = req.body.type,
      wine.price = req.body.price

      wine.save().then(wine => {
        res.json('Wine updated successfully!')
      })
      .catch(err => {
        res.status(400).send('Update was not successful.')
      })
    }
  })
})

//UPDATE route
// router.put('/:id', auth, (req, res) => {
//   Wine.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWine) => {
//     res.redirect('/wines')
//   })
// })


module.exports = router;
