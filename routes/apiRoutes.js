var db = require("../models/models");
var express = require("express");
var app = express.Router();

// Get all POSTS
app.get("/", function(req, res) {
  db.selectAllProducts(function(data) {
    console.log(JSON.stringify(data));
    res.json(data);
  });
});

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

// POST route for saving a new post
app.post("/api/posts/createPost", function(req, res) {
  console.log(req.body);
  db.insertProductsProducts({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price
  });
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
