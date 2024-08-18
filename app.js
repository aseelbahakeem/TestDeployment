//jshint esversion:6
//requiring the modules :
const express = require("express"); // to require the express module
const bodyParser = require("body-parser"); // to require the body parser module
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require("mongoose");

// connecting to the database :
const app = express();

// setting up the view engine and the public folder : 
app.set("view engine", "ejs");

// setting up the body parser and the static folder :
app.use(bodyParser.urlencoded({ extended: true }));

// setting up the mongoose : 
app.use(express.static("public")); // to use the static files in the public folder

app.get("/", function (req, res) { // to render the home page
  res.render("home"); // rendering the home page
});

app.listen(3000, function () { // to listen to the port 3000
  console.log("Server started on port 3000"); // to print the message on the console
});