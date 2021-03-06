// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//makes sure that the items in the public folder are used.
//added so CSS works

// Set Handlebars.
var exphbs = require("express-handlebars");
app.use(express.static(path.join(__dirname, "/public")));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Gets the routes from the applications
var routes = require("./controllers/burger_controller");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



//makes sure the routes are used for the application
app.use(routes);
