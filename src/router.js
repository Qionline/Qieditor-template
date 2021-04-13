// 注册css文件 (填入 /css 下的文件名)
const cssRouter = ['index.css']

// 注册beforejs文件 (填入 /js 下的文件名)
const beforeLoadJsRouter = ["before.js"]

// 注册js文件 (填入 /js 下的文件名)
const jsRouter = ["test.js", "t.js"]

// 注册main (填入 /main 的文件名)
const mainRouter = ["main.html"]

// 注册components (填入 /components 下的文件名)
const componentsRouter = ["cmp.html"]

module.exports = {
  cssRouter,
  beforeLoadJsRouter,
  jsRouter,
  mainRouter,
  componentsRouter,
}
