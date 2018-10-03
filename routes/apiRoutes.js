var db = require("../models/models");
var express = require("express");
var app = express.Router();

/////////// POST INFORMATION \\\\\\\\\

// Get all posts
app.get("/api/posts/", function(req, res) {
  db.selectAllProducts(function(data) {
    console.log(JSON.stringify(data));
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
  })
});

// Delete a post by id (must be user that creates ad)
app.delete("/api/posts/:id", function(req, res) {
  db.deleteProductProduct(
    { 
    where: { 
      id: req.params.id 
    } 
  });
});


// update ad created by unique user 
app.put("/api/post/:id", function (req, res) {
  db.updateUserUser(req.body, 
    {
    where: {
      id: req.params.id
    }
  })
})

/////// FILTER and SEARCH BAR \\\\\\\\\\

// filter based on category 
app.get("/api/posts/:category", function(req, res) {
  db.selectAllProducts({
    where: {
      category: req.params.category
    }
  });
});

// filter based on price 
app.get("/api/post/:price", function(req, res) {
  db.selectAllProducts({
    where: {
      price: req.params.price
    }
  });
})

// search bar (search by title)
app.get("/api/post/:title", function(req, res) {
  db.selectAllProducts({
    where: {
      title: req.params.title
    }
  });
});

////////// USER INFORMATION \\\\\\\\\\


// find and display user information
app.get("/api/user/:id", function(req, res) {
  db.selectAllUser({
    where: {
      userid: req.params.id
    }
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
  })
});

// update user information 
app.get("/api/user/:id", function(req, res) {
  db.updateUserUsert({
    where: {
      userid: req.params.id
    }
  });
});

 // Delete account by user id 
app.delete("/api/user/:id", function(req, res) {
  db.deleteUserUser(
    { 
    where: { 
      id: req.params.id 
    } 
  });
});

module.exports = app;


