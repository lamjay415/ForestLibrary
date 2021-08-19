const express = require("express");
const router = express.Router();
const Tree = require('../../models/Tree');

const passport = require('passport');


router.get('/test', (req, res) => {
  res.json({msg: "This is the tree test route"})
});

router.post('/', (req, res) => {
    const newTree = new Tree({
        userId: req.body.userId,
    });
    newTree
        .save()
        .then(tree => res.json(tree));
    }
);

router.get('/', (req, res) => {
    Tree.find()
        .sort({ date: -1 })
        .then(trees => res.json(trees))
        .catch(err => res.status(404).json({ notreefound: 'No tree found' }));
});

router.get('/profile', (req, res) => {
    res.send({msg: "Testing profile route"});
});


module.exports = router;
