var db = require("../models");


module.exports = function (app) {
    // HOME PAGE: getting users from database
    app.get("/api/getList", function (req, res) {
    // Find all user information
    db.User.find({})
        .then(function(dbUser) {
     
        res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

    });

    // post request 
    app.post("/api/submit/info", function(req, res) {
        // making a post request  sending body 
        db.User.create(req.body)
          .then(function(dbNote) {
            console.log(dbNote)
            res.json(dbNote);
          })
       
          .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
          });
      });




      app.get("/api/user/:id", function (req, res, next) {

        db.User.findOne({
            name: req.params.id
        })
        .then(function(dbUser) {
     console.log(dbUser)
        res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

    })





};
