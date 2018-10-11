var mysql = require("mysql2");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "marketplacedb",
    port: 3306
  });
}

connection.connect(function(err) {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
