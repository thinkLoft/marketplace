var db = require("../models/models");
var connection = require("../config/connection.js");

module.exports = function(app) {
  /////////// POST INFORMATION \\\\\\\\\

  // Get all posts
  app.get("/api/posts/", function(req, res) {
    db.selectAllProducts(function(data) {
      res.json(data);
    });
  });


  // GET individual post
  app.get("/api/posts/:id", function(req, res) {
     
    var postId = req.params.id

    var queryString =
      "SELECT * FROM products WHERE id=" + postId + ";";

      connection.query(
      queryString, function(err, result) {
        if (err) throw err;
        res.json(result)
      }
    );

    
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
    })
  });

  // POST route for saving a new post
  app.post("/api/posts/createPost", function(req, res) {
    console.log(req.body);
  });

  // update ad created by unique user
  app.put("/api/post/:id", function(req, res) {
    db.updateProductsProducts(req.body, {
      where: {
        id: req.params.id
      }
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
  });

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

  // update user information
  app.put("/api/user/:id", function(req, res) {
    db.updateUserUsert({
      where: {
        userid: req.params.id
      }
    });
  });

  // Delete account by user id
  app.delete("/api/user/:id", function(req, res) {
    db.deleteUserUser({
      where: {
        id: req.params.id
      }
    });
  });
};



