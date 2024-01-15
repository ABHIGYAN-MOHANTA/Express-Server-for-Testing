require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/dist/about/about.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/dist/contact/contact.html");
});

app.get("/chat", function (req, res) {
  res.redirect("https://chat-vzq0.onrender.com/");
});

app.get("/movies", function (req, res) {
  const filePath = path.join(__dirname, "dist", "json", "movies.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  });
});

app.get("/books", function (req, res) {
  const filePath = path.join(__dirname, "dist", "json", "books.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  });
});

app.listen(process.env.PORT || 8080);
