
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });