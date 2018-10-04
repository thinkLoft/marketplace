var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "marketplacedb",
  port: 3306
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
