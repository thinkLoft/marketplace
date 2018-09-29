var connection = require("./connection.js");
var firebase = require("./firebase.js");

var orm = {
  selectAll: function(tableInput, cb) {
    connection.query("select * from " + tableInput + ";", function(
      err,
      result
    ) {
      // if (err) throw err;
      console.log("[mysql error]", err);
      cb(result);
    });
  },

  insertProduct: function(tableInput, imageURL, title, description, category, price, userID, cb) {
    connection.query(
      "insert " +
        "into " +
        tableInput +
        " " +
        "(image, title, description, category, price, userID, sold) values ('"+imageURL+"', '"+title+"', '"+description+"', '"+category+"', " + price + ", " + userID + ");",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  },

  insertUser: function(tableInput, firstName, lastName, email, password, cb) {
    connection.query(
      "insert " +
        "into " +
        tableInput +
        " " +
        "(firstName, lastName, email, password) values ('"+firstName+"', '"+lastName+"', '"+email+"', '"+password+"');",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  },

  updateSold: function(tableInput, condition, cb) {
    connection.query(
      "update " +
        tableInput +
        " " +
        "set sold=true where id=" +
        condition +
        " ;",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  },

  updateProduct: function(tableInput, imageURL, title, description, category, price, id, cb) {
    connection.query(
      "update " +
        tableInput +
        " " +
        "set image = "+ '"'+imageURL+'"' + ", title = "+ '"'+title+'"' + ", description = "+ '"'+description+'"' + ", category = "+ '"'+category+'"' + ", price = "+price+ " where id= "+id+ ";",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  },

  updateUser: function(tableInput, firstName, lastName, email, password, userID, cb) {
    connection.query(
      "update " +
        tableInput +
        " " +
        "set firstName = "+ '"'+firstName+'"' + ", lastName = "+ '"'+lastName+'"' + ", email = "+ '"'+email+'"' + ", password = "+ '"'+password+'"' + " where userID= "+userID+ ";",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  }

};

module.exports = orm;
