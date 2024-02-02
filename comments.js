// create web server
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const comments = require("./comments");

app.use(bodyParser.json());

// serve the public directory
app.use(express.static("public"));

// get comments
app.get("/comments", function (req, res) {
  res.json(comments.getComments());
});

// post comments
app.post("/comments", function (req, res) {
  const comment = req.body;
  comments.addComment(comment);
  res.json(comment);
});

// start the server
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
