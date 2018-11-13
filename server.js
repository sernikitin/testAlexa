
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");



var db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3349;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static directory
app.use(express.static("public"));

//routing to our API folder with all the routes get and post 
require("./routes/apiRoutes.js")(app);

//connection to our mongo server 
// mongoose.connect("mongodb://heroku_91zm5llr:DBpassword123@ds159993.mlab.com:59993/heroku_jbjk6mn2");

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';


mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });