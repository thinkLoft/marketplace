var path = require("path");

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
  });

  app.get("/createAccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/createAccount.html"));
  });

  app.get("/feedback", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/feedback.html"));
  });

  app.get("/individualAd/*", function(req, res) {
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
};