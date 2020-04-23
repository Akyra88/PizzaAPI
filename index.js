const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
//require('./product.routes.js')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen on port 4000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});

/*
//This is where we as the server to be listening to user with a specified IP and Port
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
*/