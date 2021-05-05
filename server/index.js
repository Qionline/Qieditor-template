const express = require("express")
const chalk = require("chalk")
const app = express()
const path = require("path")

const json = require("../build/json")

const PORT = 7707

function getIPAddress() {
  var interfaces = require("os").networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
        return "http://" + alias.address + ":" + PORT
      }
    }
  }
}

const LOCAL_IP = getIPAddress()

// main route
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./index.html")))
app.get("/json", (req, res) => res.send(json))

// app start up
app.listen(PORT, () => {
  process.stdout.write(process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H")
  console.log("\x1b[32m%s\x1b[0m\n", "Compiled successfully!")
  console.log("You can now view \x1B[1mqieditor-dev-page\x1b[0m in the browser.\n")
  console.log("\x1B[1mLocal:\x1B[0m             \x1B[3m\x1b[33m%s\x1b[0m", "http://localhost:" + PORT)
  console.log("\x1B[1mOn Your Network:\x1B[0m   \x1B[3m\x1b[36m%s\x1b[0m\n", LOCAL_IP)
  console.log("To create a Qi-Template build, use \x1B[1m\x1b[34m%s\x1b[0m.", "yarn build")
})
