var db = require("../models/models");


module.exports = function(app) {
  // =========================
  // ======= Navigation ======
  // =========================
  app.get('api/createAccount', function(req, res) {
  // REAL-TIME LISTENER
  // firebase.auth().onAuthStateChanged(function(user) {
  //   var html = '';
  //   if (user) {
  //     // user is signed in.
  //     displayNav(true);
  //   } else {
  //     // No user is signed in.
  //     displayNav(false);
  //   }
  // });
    res.json("hello");
  });
}
