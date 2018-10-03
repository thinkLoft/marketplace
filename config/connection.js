var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'marketplacedb',
  port: 8000
})

connection.connect(function (err) {
  if (err) {
    console.log(err)
    throw err;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;