const express = require("express");
const app = express();
const path = require("path");

const json = require("../build/json");

// main route
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./index.html")));
app.get("/json", (req, res) => res.send(json));

// app start up
app.listen(7707, () => console.log("Express server listening on port: http://localhost:7707"));
