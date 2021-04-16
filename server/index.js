const express = require("express")
const chalk = require("chalk")
const app = express()
const path = require("path")

const json = require("../build/json")

// main route
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./index.html")))
app.get("/json", (req, res) => res.send(json))

// app start up
app.listen(7707, () => {
  process.stdout.write(process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H")
  console.log('\x1b[34m%s\x1b[0m  \x1b[33m%s\x1b[0m','QiEditor Dev Server:', 'http://localhost:7707');
})
