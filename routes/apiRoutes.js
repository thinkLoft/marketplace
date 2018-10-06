// var db = require("../models/models");
var connection = require("../config/connection.js");
var express = require("express");
var app = express.Router();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Get all POSTS
app.get("/", function(req, res) {
  db.selectAllProducts(function(data) {
    console.log(JSON.stringify(data));
    res.json(data);
  });
});

// POST route for a new user
app.post("/api/posts/createUser", urlencodedParser, function(req, res) {
  console.log(req.body);
  // res.render("createAccount.html", { qs: req.query });

  if (!req.body) return res.sendStatus(400);
  // res.send("welcome, " + req.body.firstName);

  var queryString =
    "INSERT INTO user (firstName, lastName, email) VALUES (?,?,?)";

  connection.query(
    queryString,
    [req.body.firstName, req.body.lastName, req.body.email],
    function(err, result) {
      if (err) throw err;
      console.log("User Successfully Added!", result);
      res.end();
    }
  );
});

// POST route for saving a new post
app.post("/api/posts/createPost", function(req, res) {
  console.log(req.body);

  // db.insertProductsProducts({
  //   image: req.body.image,
  //   title: req.body.title,
  //   description: req.body.description,
  //   category: req.body.category,
  //   price: req.body.price
  // });
});

// Delete a post by id (must be user that creates ad)
app.delete("/api/posts/:id", function(req, res) {
  db.deleteProductProduct({
    where: {
      id: req.params.id
    }
  });
});

module.exports = app;
