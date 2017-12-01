'use strict';

const mongoose = require('mongoose')
const Cat = mongoose.model('Cats')

exports.getCats = (req, res) => {
  Cat.find({}, (err, cat) => {
    if (err) {
      res.send(err)
    }
    res.json(cat)
  })
}

exports.createCat = (req, res) => {
  const newCat = new Cat(req.body)
  newCat.save((err, cat) => {
    if (err) {
      res.send(err)
    }
    res.json(cat)
  })
}

exports.getCat = (req, res) => {
  Cat.findById(req.params.catId, (err, cat) => {
    if (err) {
      res.send(err)
    }
    cat ? res.json(cat) : res.json({ message: 'Cat not found' })
  })
}

exports.updateCat = (req, res) => {
  Cat.findByIdAndUpdate(req.params.catId, req.body, {new:true}, (err, cat) => {
    if (err) {
      res.send(err)
    }
    cat ? res.json(cat) : res.json({ message: 'Cat not found' })
  })
}

exports.deleteCat = (req, res) => {
  Cat.findByIdAndRemove(req.params.catId, (err, cat) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Cat deleted' })
  })
}