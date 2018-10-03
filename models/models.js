var orm = require('../config/orm.js');

var data = {
  selectAllUser: function(cb) {
    orm.selectAll("user", function(res) {
      cb(res);
    });
  },
  insertUserUser: function(firstName, lastName, email, cb) {
    orm.insertUser("user", firstName, lastName, email, cb, function(res) {
      cb(res);
    });
  },
  updateUserUser: function(firstName, lastName, email, userID, cb) {
    orm.updateUser("user",firstName, lastName, email, password, userID, cb, function(res) {
      cb(res);
    });
  },
  deleteUserUser: function(firstName, lastName, email, userID, cb) {
    orm.deleteUser("user", firstName, lastName, email, userID, function(res){
      cb(res);
    });
  },

  selectAllProducts: function(cb) {
    orm.selectAll("products", function(res) {
      cb(res);
    });
  },
  insertProductsProducts: function(imageURL, title, description, category, price, userID, cb) {
    orm.insertProduct("products", imageURL, title, description, category, price, userID, function(res) {
      cb(res);
    });
  },
  updateProductsProducts: function(imageURL, title, description, category, price, userID, cb) {
    orm.updateProducts("products",imageURL, title, description, category, price, userID, cb, function(res) {
      cb(res);
    });
  },
  deleteProductProduct: function(imageURL, title, description, category, price, userID, cb) {
    orm.deleteProduct("products", imageURL, title, description, category, price, userID, function(res){
      cb(res);
    });
  },
};

module.exports = data;
 