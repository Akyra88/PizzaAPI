const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

// set up express app
const app = express();

//set up static files
app.use(express.static('public'));


// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));


// middleware error handler
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in the console
    res.status(422).send({error: err.message});
});

// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
require('./routes/api')

mongoose.Promise = global.Promise;

// Connecting to the database
//config.url
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen for requests
app.listen(process.env.PORT || 5000,  function(){
    console.log('now listening for requests');
});