<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateLeafInput = require('../../validation/leaves');
const Leaf = require("../../models/Leaf");

router.get('/test', (req, res)=> {
    res.json({msg: "This is leaf route"});
});

router.get('/', (req, res)=> {
    Leaf
        .find()
        .sort({date: -1})
        .then(leaves=> res.json(leaves))
        .catch(err => res.status(400).json(err));
});
router.get("/user/:user_id", (req, res)=> {
    Leaf
        .find({user: req.params.user_id})
        .then(leaves=> res.json(leaves))
        .catch (err => res.status(400).json(err));
});

router.get("/:id", (req, res)=> {
    Leaf 
        .findById(req.params.id)
        .then(leaf=> res.json(leaf))
        .catch(err => res.status(400).json(err));
});

router.post("/", 
    (req, res)=> {
        const { isValid, errors } = validateLeafInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        const newLeaf = new Leaf({
            title: req.body.title,
            userId: req.body.userId
        });
    newLeaf
     .save()
     .then(leaf => res.json(leaf));
    //  .catch(err => console.log(err));
});
=======
const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateLeafInput = require('../../validation/leaves');
const Leaf = require("../../models/leaf");

router.get('/test', (req, res)=> {
    res.json({msg: "This is leaf route"});
});

router.get('/', (req, res)=> {
    Leaf
        .find()
        .sort({date: -1})
        .then(leaves=> res.json(leaves))
        .catch(err => res.status(400).json(err));
});
router.get("/user/:user_id", (req, res)=> {
    Leaf
        .find({user: req.params.user_id})
        .then(leaves=> res.json(leaves))
        .catch (err => res.status(400).json(err));
});

router.get("/:id", (req, res)=> {
    Leaf 
        .findById(req.params.id)
        .then(leaf=> res.json(leaf))
        .catch(err => res.status(400).json(err));
});

router.post("/", 
    (req, res)=> {
        const { isValid, errors } = validateLeafInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        const newLeaf = new Leaf({
            tree: req.tree.id,
            title: req.body.title,
            author: req.body.author
        });
    newLeaf
     .save()
     .then(leaf => res.json(leaf));
    //  .catch(err => console.log(err));
});
>>>>>>> 18023da50a5d19ade5862c7fc9a4ca98140e5573
module.exports = router;