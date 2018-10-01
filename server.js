var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

//npm package method overide added 
var methodOverride = require('method-override');

//var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();


// app.use(express.static(__dirname + '/public'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(methodOverride('_method'));

require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});






// // Middleware
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json());
// //__dirname used so public folder can be found from root directory
// app.use(express.static(__dirname + "/public"));
// //Method Override added
// app.use(methodOverride('_method'));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// // Routes
// //var routeAPI = require("./routes/apiRoutes.js")(app);
// var routes = require("./routes/htmlRoutes.js");
// app.use('/', routes);
// //app.use('/', routeAPI);
// //app.use('/', routeHTML);

// var syncOptions = {
//   force: false
// };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// // db.sequelize.sync(syncOptions).then(function () {
// //   app.listen(PORT, function () {
// //     console.log(
// //       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
// //       PORT,
// //       PORT
// //     );
// //   });
// // });

module.exports = app;