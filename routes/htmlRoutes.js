var db = require("../models/models");
var path = require("path");
var express = require("express");

var app = express.Router();

// Load index page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/index.html"));
// });

app.get("/", function(req, res) {
  db.selectAllProducts(function(user_data) {
    // console.log(user_data);
    console.log(JSON.stringify(user_data));
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
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
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Export routes for server.js to use.
module.exports = app;
