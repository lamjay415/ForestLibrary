const express = require("express");
const router = express.Router();

const User = require('../../models/user');


router.get("/test", (req, res) => {
    res.json({ msg: "This is the users route" })
});


module.exports = router;