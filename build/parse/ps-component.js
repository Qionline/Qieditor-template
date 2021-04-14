const fs = require("fs")
const path = require("path")

let id = 1

function parseComponents(str) {
  const param = {
    name: "",
    params: {},
  }
  const html = str.replace(/<script qi-data>([\s\S]+?)<\/script>/gim, function (_, js) {
    //正则匹配出script中的内容
    const htmlParam = new Function(js)()
    param.name = htmlParam.name
    param.params = { ...htmlParam.params }
    return ""
  })

  return {
    id: id++,
    name: param.name,
    params: param.params,
    htmlstr: html,
  }
}

/**
 * @param {String[]} mainPath
 * @param {String[]} cmpPath
 */
module.exports = function (mainPath, cmpPath) {
  const out = { main: [], component: [] }
  for (let i = 0; i < mainPath.length; i++) {
    const p = mainPath[i]
    out.main.push(parseComponents(fs.readFileSync(path.join(__dirname, `../../src/main/${p}`), "utf-8")))
  }
  for (let i = 0; i < cmpPath.length; i++) {
    const p = cmpPath[i]
    out.component.push(parseComponents(fs.readFileSync(path.join(__dirname, `../../src/components/${p}`), "utf-8")))
  }
  return out
}
