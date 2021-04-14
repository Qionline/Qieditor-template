const { filename, title, bodyColor, externalCss, externalJs, params, imgUpConfig } = require("../src/config")
const { css, js, beforeLoadJs, main, component } = require("./parse")

module.exports = {
  filename,
  global: {
    direction: "ltr",
    title,
    bodyColor,
    css,
    beforeLoadJs,
    js,
    externalCss,
    externalJs,
    params,
    imgUpConfig,
  },
  main,
  component,
}
