const express = require("express");
const router = express.Router();
const tree = require('../../models/Tree')

const passport = require('passport');


router.get("/", (req, res) => {
   res.json({ msg: "This is the tree route" }); 
});

module.exports = router;
