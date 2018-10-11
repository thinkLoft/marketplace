var express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
