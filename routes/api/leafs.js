const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Leaf = require('../../models/leaf');
const validateLeafInput = require('../../validation/leafs');

router.get('/tree/:tree_id', (req, res) => {
    Leaf.find({user: req.params.tree_id})
        .then(leafs => res.json(leafs))
        .catch(err => res.status(404).json({ noleafsfound: 'No leafs found from that user'}))
});

router.get('/:id', (req, res) => {
    Leaf.findById(req.params.id)
        .sort({ date: -1 })
        .then(leaf => res.json(leaf))
        .catch(err =>
            res.status(404).json({ noleaffound: 'No leaf found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateLeafInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newLeaf = new Leaf({
        title: req.body.title,
        tree: req.tree.id
      });
  
      newLeaf.save().then(leaf => res.json(leaf));
    }
  );

  module.exports = router;