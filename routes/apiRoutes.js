var db = require("../models/models");
var express = require("express");
var app = express.Router();

// POST route for a new user
app.post("/api/posts/createUser", function(req, res) {
  console.log(req.body);
  db.insertUserUser({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    email: req.params.email,
    password: req.params.password,
    userID: req.params.userID
  });
});

module.exports = app;
