const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello ma boy!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p>Yo! Contact me at fiyinfoluoladele@gmail.com :)</p>");
});

app.get("/about", function (req, res) {
  res.send(
    "<h3>Call me Fiyin. It's a Nigerian name, I was born and raised there.</h3><h3>My goal here is to become a guru at software development, in order to build software with great understanding :)</h3>"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Football</li><li>Travel</li><li>Film</li></ul>");
});

app.listen(3000, function () {
  console.log("Just hanging, because server started on port 3000.");
});
