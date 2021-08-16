const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


router.post('/register', (req, res) => {
    User.findOne({ username: req.body.username })
    .then(user => {
        if (user) {
            return res.status(400).json({username: "A user is already register with that username"})
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (err, hash)=> {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user=> res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
    .then(user => {
        if(!user) {
            return res.status(404).json({username: "This user doesn't not exist"});
        }
        bcrypt.compare(password, user.password)
            .then(isMatch=> {
                if(isMatch) {
                    const payload ={
                        id: user.id,
                        username: user.username,
                    }
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 3600},
                        (err, token)=> {
                            res.json({ 
                                success: true,
                                token: "Bearer " + token
                             });
                        }

                    )
                    
                } else {
                    return res.status(400).json({password: "Incorrect password"})
                }
                
            })
    });
})

module.exports = router;