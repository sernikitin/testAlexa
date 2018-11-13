
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");



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

//connection to our mongo server 
 mongoose.connect("mongodb://localhost/forALEXA");


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });