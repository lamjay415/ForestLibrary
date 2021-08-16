const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require('passport');

app.get('/', (req, res) => res.send("Forest Library test"));

const db = require('./config/keys').mongoURI;


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB successfully'))
    .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
app.use(passport.initialize());
require('./config/passport')(passport);


app.use("/api/users", users);

