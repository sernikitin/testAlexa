
var express = require("express");
// var dotenv = require('dotenv')
var http = require ('http');         // For serving a basic web page.

var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");


// dotenv.config()
var db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3349;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// Static directory
app.use(express.static("public"));

//routing to our API folder with all the routes get and post 
require("./routes/apiRoutes.js")(app);



// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';

    // The http server will listen to an appropriate port, or default to
    // port 5000.
    var theport = process.env.PORT || 5000;


    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

//connection to our mongo server 
//  mongoose.connect("mongodb://localhost/forALEXA");


app.listen(theport, function() {
    console.log("App running on port " + theport + "!");
  });