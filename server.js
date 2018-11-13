
var express = require("express");
 var dotenv = require('dotenv')
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");



var db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3349;


// dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// Static directory
app.use(express.static("public"));

//routing to our API folder with all the routes get and post 
require("./routes/apiRoutes.js")(app);



var env = process.env.NODE_ENV || 'production',
    config = require('./config')[env],
    mongoose = require('mongoose');

var db = mongoose.connect(config.db);


// var url = process.env.MONGOLAB_URI;


//connection to our mongo server 
//  mongoose.connect("mongodb://localhost/forALEXA");

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongoose.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
// var url = 'mongodb://localhost:27017/my_database_name';      
//(Focus on This Variable)

// Use connect method to connect to the Server
//   MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     console.log('Connection established to', url);
//     // do some work here with the database.
//     //Close connection
//     db.close();
//   }
// });


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });