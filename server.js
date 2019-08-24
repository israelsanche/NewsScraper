// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through our route middleware
app.use(routes);

// Connect to Mongo with if for deployed
if (process.env.NODE_ENV === "production") {
  mongoose.connect(
    process.env.MONGODB_URI ||  "mongodb://<dbuser>:<dbpassword>@ds263927.mlab.com:63927/heroku_89w0jbm8",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );
}
else mongoose.connect(
  process.env.MONGODB_URI ||  "mongodb://localhost/mongoHeadlines",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
