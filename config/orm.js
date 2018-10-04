var connection = require("./connection.js");

// In order to write the query, we need 4 question marks.
// The below Function loops through and creates an array of question marks - ["?", "?", "?", "?"] - and turns it into a string.
// ["?", "?", "?", "?"].toString() => "?,?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertUser: function(tableInput, firstName, lastName, email, password, cb) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += firstName.toString();
    queryString += lastName.toString();
    queryString += email.toString();
    queryString += password.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += "); ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertProduct: function(
    tableInput,
    firstName,
    lastName,
    image,
    price,
    title,
    category,
    description,
    cb
  ) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += firstName.toString();
    queryString += lastName.toString();
    queryString += image.toString();
    queryString += price.toString();
    queryString += title.toString();
    queryString += category.toString();
    queryString += description.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += "); ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateSold: function(tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objToSql(objColVals); // e.g. {sold: true} => ["sold=true"]
    queryString += " WHERE id=";
    queryString += condition;
    queryString += " ; ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateProduct: function(
    tableInput,
    image,
    price,
    title,
    category,
    description,
    id,
    cb
  ) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objToSql(image);
    queryString += objToSql(price);
    queryString += objToSql(title);
    queryString += objToSql(category);
    queryString += objToSql(description);
    queryString += " WHERE id=";
    queryString += id;
    queryString += " ; ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Update User Profile query
  updateUser: function(
    tableInput,
    firstName,
    lastName,
    email,
    password,
    userID,
    cb
  ) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objToSql(firstName);
    queryString += objToSql(lastName);
    queryString += objToSql(email);
    queryString += objToSql(password);
    queryString += " WHERE userID=";
    queryString += userID;
    queryString += " ; ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // delete products query
  deleteProduct: function(tableInput, id, cb) {
    var queryString = "DELETE FROM " + tableInput;

    queryString += " WHERE id=";
    queryString += id;
    queryString += " ; ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // delete user query
  deleteUser: function(tableInput, userID, cb) {
    var queryString = "DELETE FROM " + tableInput;

    queryString += " WHERE userID=";
    queryString += userID;
    queryString += " ; ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
