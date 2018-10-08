// var db = require("../models/models");
var connection = require("../config/connection.js");
var express = require("express");
var app = express.Router();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  /////////// POST INFORMATION \\\\\\\\\

  // Get all posts
  app.get("/api/posts/", urlencodedParser, function(req, res) {
    console.log(req.body);
    // res.render("createAccount.html", { qs: req.query });

    if (!req.body) return res.sendStatus(400);
    // res.send("welcome, " + req.body.firstName);

    var queryString = "SELECT * FROM products";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log("Products Available!", result);
      res.json(result);
      res.end();
    });
  });

  // POST route for creating a new user
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

  // POST route for creating a new post
  app.post("/api/posts/createPost/", urlencodedParser, function(req, res) {
    console.log(req.body);

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
        console.log("Ad/Post Successfully Added!", result);
        res.redirect("/");
        res.end();
      }
    );
  });

  // POST route for updating a post by id
  // Below Updating POst code yet need some work after we finalize what is URL
  app.post("/api/post/:id", urlencodedParser, function(req, res) {
    console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString =
      "UPDATE products SET (image, title, description, category, price, email) VALUES (?,?,?,?,?,?,) WHERE id=?";

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
        console.log("Ad/Post Successfully Updated!", result);
        res.redirect("/");
        res.end();
      }
    );
  });

  // Get all posts by filter
  app.get("/api/posts/category", urlencodedParser, function(req, res) {
    // console.log(req.body);

    if (!req.body) return res.sendStatus(400);

    var queryString = "SELECT * FROM products WHERE category=?";

    connection.query(queryString, [req.body.category], function(err, result) {
      if (err) throw err;
      console.log("Products Available!", result);
      res.redirect("/categoryPage.html");
      res.end();
    });
  });

  // update ad created by unique user
  // app.put("/api/post/:id", function(req, res) {
  //   db.updateProductsProducts(req.body, {
  //     where: {
  //       id: req.params.id
  //     }
  //   });
  // });

  // Delete a post by id (must be user that creates ad)
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.deleteProductProduct({
  //     where: {
  //       id: req.params.id
  //     }
  //   });
  // });

  /////// FILTER and SEARCH BAR \\\\\\\\\\

  // filter based on category
  // app.get("/api/posts/:category", function(req, res) {
  //   db.selectAllProducts({
  //     where: {
  //       category: req.params.category
  //     }
  //   });
  // });

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

  // update user information
  // app.put("/api/user/:id", function(req, res) {
  //   db.updateUserUsert({
  //     where: {
  //       userid: req.params.id
  //     }
  //   });
  // });

  // Delete account by user id
  // app.delete("/api/user/:id", function(req, res) {
  //   db.deleteUserUser({
  //     where: {
  //       id: req.params.id
  //     }
  //   });
  // });
};
