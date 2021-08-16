const express = require("express");
const router = express.Router();

const User = require('../../models/User');


router.get("/test", (req, res) => {
    res.json({ msg: "This is the users route" });
});
router.post('/register', (req, res) => {
    User.findOne({ username: req.body.username })
    .then(user => {
        if (user) {
            return res.status(400).json({username: "A user is already register with that username"})
        } else {
            const newUser = new User({
                username: req.body.username,
                tree: req.body.tree,
                password: req.body.password
            });
            newUser.save().then(user=> res.send(user)).catch(err => res.send(err));
        }
    });
});

module.exports = router;