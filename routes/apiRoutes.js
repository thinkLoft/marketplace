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
    db.Post.create({
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete a post by id (must be user that creates ad)
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy(
      { 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

// update ad that user created 
app.put("/api/examples/:id", function (req, res) {
  db.Example.update(req.body, 
    {
    where: {
      id: req.params.id
    }
  })
  .then(function(dbExample) {
    res.json(dbExample);
  })
})

// filter based on category 
app.get("/api/examples/:category", function(req, res) {
  db.Example.findAll({
    where: {
      category: req.params.category
    }
  }).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

// filter based on price 
app.get("/api/examples/:price", function(req, res) {
  db.Example.findAll({
    where: {
      price: req.params.price
    }
  }).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

// filter based on user rating 
app.get("/api/examples/:rating", function(req, res) {
  db.Example.findAll({
    where: {
      rating: req.params.rating
    }
  }).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

