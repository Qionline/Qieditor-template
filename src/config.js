const filename = "qifile"   // 导出时的文件名
const title = "Qieditor-template 开发指南"            // html标题
const bodyColor = "#fff"    // 背景色
const externalCss = []      // 引入第三方css【url】
const externalJs = []       // 引入第三方js【url】

const params = {}           // 全局变量

const imgUpConfig = {       // 七牛云图片上传配置
  type: "qn",
  accessKey: "",
  secretKey: "",
  imgUrl: "",
  qnScope: "",
  region: "",
}

module.exports = {
  filename,
  title,
  bodyColor,
  externalCss,
  externalJs,
  params,
  imgUpConfig
}
