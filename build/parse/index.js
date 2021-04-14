const psFile = require("./ps-file")
const psComponent = require("./ps-component")

const { cssRouter, beforeLoadJsRouter, jsRouter, mainRouter, componentsRouter } = require("../../src/router")

const css = psFile("css", [...cssRouter])
const js = psFile("js", [...jsRouter])
const beforeLoadJs = psFile("js", [...beforeLoadJsRouter])

const cmp = psComponent(mainRouter, componentsRouter)

module.exports = {
  css,
  js,
  beforeLoadJs,
  main: cmp.main,
  component: cmp.component,
}
