const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");

app.get('/', (req, res) => res.send("Forest Library test"));


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB successfully'))
    .catch(err => console.log(err));

app.use("/api/users", users);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));

