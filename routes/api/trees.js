const express = require("express");
const router = express.Router();
const Tree = require('../../models/Tree');

const passport = require('passport');


router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newTree = new Tree({
         user: req.user.id
      });
  
      newTree.save().then(tree => res.json(tree));
    }
  );


module.exports = router;
