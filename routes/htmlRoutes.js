<<<<<<< HEAD
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/createAccount.html'));
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
};
=======
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/createAccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/createAccount.html"));
  });

  app.get("/feedback", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/feedback.html"));
  });

  app.get("/individualAd", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/individualAds.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  // blog route loads blog.html
  app.get("/postAd", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/postAd.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
>>>>>>> master
