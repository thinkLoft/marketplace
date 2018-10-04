var orm = require("../config/orm.js");

var data = {
  selectAllUser: function(cb) {
    orm.selectAll("user", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertUserUser: function(firstName, lastName, email, password, cb) {
    orm.insertUser("user", firstName, lastName, email, password, cb, function(
      res
    ) {
      cb(res);
    });
  },
  updateUserUser: function(firstName, lastName, email, password, userID, cb) {
    orm.updateUser(
      "user",
      firstName,
      lastName,
      email,
      password,
      userID,
      cb,
      function(res) {
        cb(res);
      }
    );
  },

  selectAllProducts: function(cb) {
    orm.selectAll("products", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertProductsProducts: function(
    imageURL,
    title,
    description,
    category,
    price,
    userID,
    cb
  ) {
    orm.insertProducts(
      "products",
      imageURL,
      title,
      description,
      category,
      price,
      userID,
      cb,
      function(res) {
        cb(res);
      }
    );
  },
  updateProductsProducts: function(
    imageURL,
    title,
    description,
    category,
    price,
    userID,
    cb
  ) {
    orm.updateProducts(
      "products",
      imageURL,
      title,
      description,
      category,
      price,
      userID,
      cb,
      function(res) {
        cb(res);
      }
    );
  }
};

module.exports = data;
// module.exports = products;
