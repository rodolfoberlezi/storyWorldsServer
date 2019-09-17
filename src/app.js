const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/router');

const app = express();

mongoose.connect("mongodb://localhost:27017/storyworld", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(3333, (err) => {
    if (err) {
        console.log("Fail to start server");
    }
    console.log("Server up and running!");
});