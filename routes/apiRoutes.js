var connection = require("../config/connection.js");
var express = require("express");
var app = express.Router();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  /////////// POST INFORMATION \\\\\\\\\

  // Get all posts - WORKING!!
  app.get("/api/posts/", urlencodedParser, function(req, res) {
    // res.render("createAccount.html", { qs: req.query });

    if (!req.body) return res.sendStatus(400);
    // res.send("welcome, " + req.body.firstName);

    var queryString = "SELECT * FROM products";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // console.log("Products Available!", result);
      res.json(result);
      res.end();
    });
  });

  // Create a new user - WORKING!!
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
        // res.json(result);
        res.redirect("/");
        res.end();
      }
    );
  });

  // GET individual post
  app.get("/api/posts/:id", function(req, res) {
    var postId = req.params.id;

    var queryString = "SELECT * FROM products WHERE id=" + postId + ";";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      res.json(result);
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

  // Create a new post - WORKING!!
  app.post("/api/posts/createPost/", urlencodedParser, function(req, res) {


    if (!req.body) return res.sendStatus(400);

    var queryString =
      "INSERT INTO products (image, title, description, category, price, email) VALUES (?,?,?,?,?,?)";

    connection.query(
      queryString,
      [
        req.body.image,
        req.body.title,
        req.body.description,
        req.body.category,
        req.body.price,
        req.body.email
      ],
      function(err, result) {
        if (err) throw err;
        // console.log("Ad/Post Successfully Added!", result);
        res.redirect("/");
        res.end();
      }
    );
  });

  // UPDATE/Edit Product - WORKING!!
  app.post("/api/posts/id/:id", urlencodedParser, function(req, res) {
    
    if (!req.body) return res.sendStatus(400);

    var queryString =
      "UPDATE products SET image=?, title=?, description=?, category=?, price=?, email=? WHERE id=?";

    connection.query(
      queryString,
      [
        req.body.image,
        req.body.title,
        req.body.description,
        req.body.category,
        req.body.price,
        req.body.email,
        req.params.id
      ],
      function(err, result) {
        if (err) throw err;
        // console.log("Ad/Post Successfully Updated!", result);
        // res.redirect("/");
        res.json(result);
        res.end();
      }
    );
  });

  // UPDATE/Edit User - WORKING!!
  app.post("/api/posts/user/:email", urlencodedParser, function(req, res) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString =
      "UPDATE user SET firstName=?, lastName=?, email=? WHERE email=?";

    connection.query(
      queryString,
      [req.body.firstName, req.body.lastName, req.body.email, req.params.email],
      function(err, result) {
        if (err) throw err;
        // console.log("Ad/Post Successfully Updated!", result);
        // res.redirect("/");
        res.json(result);
        res.end();
      }
    );
  });

  // Get all posts by Category filter - WORKING!!
  app.get("/api/posts/category/:category", urlencodedParser, function(
    req,
    res
  ) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString = "SELECT * FROM products WHERE category=?";

    connection.query(queryString, [req.params.category], function(err, result) {
      if (err) throw err;
      console.log("Products Available!", result);
      // res.sendFile("/categoryPage.html");
      res.json(result);
      res.end();
    });
  });

  // Get all posts/Ads by User - WORKING!!
  app.get("/api/posts/email/:email", urlencodedParser, function(req, res) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString = "SELECT * FROM products WHERE email=?";

    connection.query(queryString, [req.params.email], function(err, result) {
      if (err) throw err;
      // console.log("Products Available for this user!", result);
      res.json(result);
      res.end();
    });
  });

  // Delete one Product query - WORKING!!
  app.get("/api/posts/deleteProduct/:id", urlencodedParser, function(req, res) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString = "DELETE FROM products WHERE id=?";

    connection.query(queryString, [req.params.id], function(err, result) {
      if (err) throw err;
      // console.log("Products Deleted!", result);
      res.json(result);
      res.end();
    });
  });

  // Delete Account - WORKING!!
  app.get("/api/posts/deleteUser/:email", urlencodedParser, function(req, res) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString = "DELETE FROM user WHERE email=?";

    connection.query(queryString, [req.params.email], function(err, result) {
      if (err) throw err;
      // console.log("User Deleted!", result);
      res.json(result);
      res.end();
    });
  });

  /////// FILTER and SEARCH BAR \\\\\\\\\\

  // filter based on price
  // app.get("/api/post/:price", function(req, res) {
  //   db.selectAllProducts({
  //     where: {
  //       price: req.params.price
  //     }
  //   });
  // });

  // search bar (search by title)
  // app.get("/api/post/:title", function(req, res) {
  //   db.selectAllProducts({
  //     where: {
  //       title: req.params.title
  //     }
  //   });
  // });

  ////////// USER INFORMATION \\\\\\\\\\

  // find and display user information
  // app.get("/api/user/:id", function(req, res) {
  //   db.selectAllUser({
  //     where: {
  //       userid: req.params.id
  //     }
  //   });
  // });
};
