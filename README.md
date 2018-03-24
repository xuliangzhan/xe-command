# xe-command

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)

XECommand 使用原生js实现复制文本到剪贴板的函数

## 兼容性

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

### CDN
使用 script 方式安装，XECommand 会定义为全局变量  
生产环境请使用 xe-command.min.js，更小的压缩版本，可以带来更快的速度体验。
#### cdnjs 获取最新版本
[点击浏览](https://cdn.jsdelivr.net/npm/xe-command/)已发布的所有 npm 包源码
``` shell
<script src="https://cdn.jsdelivr.net/npm/xe-command/dist/xe-command.js"></script>
```
#### unpkg 获取最新版本
[点击浏览](https://unpkg.com/xe-command/)已发布的所有 npm 包源码
``` shell
<script src="https://unpkg.com/xe-command/dist/xe-command.js"></script>
```

### AMD
``` shell
require.config({
  paths: {
    // ...,
    'xe-command': './dist/xe-command.min'
  }
})
```

### NPM
``` shell
npm install xe-command --save
```

## API :
#### copy (content) 复制文本到剪贴板
```shell
import XECommand from 'xe-command'

XECommand.copy('复制该内容到剪贴板')
```

#### print () 调用打印
```shell
import XECommand from 'xe-command'

XECommand.print()
```

## License
Copyright (c) 2017-present, Xu Liangzhan