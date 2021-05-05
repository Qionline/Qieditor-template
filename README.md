# QiEditor-template
QiEditor 页面开发/生成 模板


## 进行模板开发

```bash
yarn
yarn serve
```

## 生成配置文件

```bash
yarn build
```

生成的dist/.json文件交由运营进行配置即可

## 文件结构介绍

src 下文件目录结构对应 [配置文件](https://github.com/Qionline/Qieditor#%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE%E9%A1%B9)

### `src/css`

对应配置文件中的 global.css

### `src/js`

对应配置文件中的 global.js

### `src/main`

对应配置文件中的 main[]

其中文件中的书写格式如下：

在`<script qi-data></script>`中添加变量，变量格式可见[qieditor变量文档](https://github.com/Qionline/Qieditor#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)。如：
```html
<script qi-data>
  return {
    name: "我是主文件",
    params: {
      main1: {
        type: "text",
        title: "主文件1",
        value: "主文件1",
      },
    },
  }
</script>
```
在此标签下编写正常的html页面即可。变量可通过 `<%param%>` 的方式调用。

### `src/components`

对应配置文件中的 component[]。文件书写格式同 `src/main`。

### `src/router.js`

以上所有文件需要于 `src/router.js` 中进行添加才可执行编译/打包

### `src/config.js`

对应配置文件中的 globla 中的其他配置项
