const fs = require("fs")
const path = require("path")

/**
 * @param {"css" | "js"} type
 * @param {String[]} paths
 */
module.exports = function (type, paths) {
  let out = ""
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]
    out += fs.readFileSync(path.join(__dirname, `../../src/${type}/${p}`), "utf-8") + "\n"
  }
  return out
}
