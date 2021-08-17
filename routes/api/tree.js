const express = require("express");
const router = express.Router();
const User = require("../../models/user");   
const Tree = require('../../models/Tree');

const passport = require('passport');


router.get("/", (req, res) => {
   res.json({ msg: "This is the landing page." }); 
});

router.post("/tree", (req, res) => {
   //if there is a user which there is a tree.
   User.findOne({username: req.body.username})
   .then(user => {
      if(user){
         return res.status(400).json({username: "There is one tree registered already"})
      }else{
         const newTree = new Tree({
            _id: Schema.Types.ObjectId,
            leaves: [{ type: Schema.Types.ObjectId, ref: 'Leaf' }]
         });
         newTree.save()
         .then(tree => res.json(tree))
         .catch(err => console.log(err))
      }
   })
})


module.exports = router;
