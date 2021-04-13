const { filename, title, bodyColor, css, beforeLoadJs, js, externalCss, externalJs, params, imgUpConfig } = require("../src/config")

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

  main: [
    {
      id: 1,
      name: "顶部banner信息",
      params: {
        upVersion: {
          type: "text",
          title: "版本号",
          value: "1.2.5",
        },
        title: {
          type: "text",
          title: "大标题",
          value: "Update Notice of Version 1.2.4",
        },
        update: {
          type: "text",
          title: "首行内容",
          value: "Updates：",
        },
        btn: {
          type: "text",
          title: "按钮内容",
          value: "Update Now",
        },
        list: {
          type: "array",
          title: "图片路径",
          template: "<p><%p1%></p>",
          item: {
            p1: {
              type: "text",
              title: "段落",
              value: "",
            },
          },
          value: [
            {
              p1: {
                type: "text",
                title: "段落",
                value: "1. Added VIP Baron: You can enjoy more features by subscribing to VIP Baron;",
              },
            },
          ],
        },
      },
      htmlstr: ``,
    },
  ],
  component: [],
}
