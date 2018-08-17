//////////////////////////
// dependencies
//////////////////////////
var express = require("express");
var bodyParser = require("body-parser");

///////////////////////
// configure Express
///////////////////////
var app = express();

// sets the port info
app.set('port', (process.env.PORT || 8080));

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets/img')); 

/////////////////
// handlebars
/////////////////
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//////////////////////////////////////
// start lisetening for requests
//////////////////////////////////////
app.listen(app.get('port'), function() {
    console.log("App now listening at localhost: " + app.get('port'));
});