const path = require("path")
const fs = require("fs")
const shell = require("shelljs")

if (!shell.which("git")) {
  //在控制台输出内容
  shell.echo("Sorry, this script requires git")
  shell.exit(1)
}

module.exports = content => {
  const file = path.join(__dirname, `../dist/${content.filename}-build.json`)
  const dir = path.join(__dirname, "../dist")
  shell.rm("-rf", dir)
  fs.mkdir(dir, err => {
    if (err) console.log(err)
  })
  //写入文件
  fs.writeFile(file, JSON.stringify(content), function (err) {
    if (err) {
      return console.log(err)
    }
  })
}
