var db = require("../models");


module.exports = function(app) {
  // Get all posts
  app.get("/api/posts", function(req, res) {
    db.marketplacedb.findAll({}).then(function(dbmarketplacedb) {
      res.json(dbmarketplacedb); 
    });
  });

  // POST route for saving a new post
  app.post("/api/posts/createPost", function(req, res) {
    console.log(req.body);
    db.marketplacedb.create({
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price
    })
      .then(function(dbmarketplacedb) {
        res.json(dbmarketplacedb);
      });
  });

  // Delete a post by id (must be user that creates ad)
  app.delete("/api/posts/:id", function(req, res) {
    db.marketplacedb.destroy(
      { 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbmarketplacedb) {
      res.json(dbmarketplacedb);
    });
  });
};

// update ad that user created 
app.put("/api/post/:id", function (req, res) {
  db.marketplacedb.update(req.body, 
    {
    where: {
      id: req.params.id
    }
  })
  .then(function(dbmarketplacedb) {
    res.json(dbmarketplacedb);
  })
})

// filter based on category 
app.get("/api/posts/:category", function(req, res) {
  db.marketplacedb.findAll({
    where: {
      category: req.params.category
    }
  }).then(function(dbmarketplacedb) {
    res.json(dbmarketplacedb);
  });
});

// filter based on price 
app.get("/api/post/:price", function(req, res) {
  db.marketplacedb.findAll({
    where: {
      price: req.params.price
    }
  }).then(function(dbmarketplacedb) {
    res.json(dbmarketplacedb);
  });
})

// search bar (search by title)
app.get("/api/post/:title", function(req, res) {
  db.marketplacedb.findAll({
    where: {
      title: req.params.title
    }
  }).then(function(dbmarketplacedb) {
    res.json(dbmarketplacedb);
  });
})
