# xe-command

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)

XECommand 使用原生js实现复制文本到剪贴板的函数,支持常用H5的浏览器IE、Chrome、Firefox、Opera、Safari、IOS、Android

## 兼容性

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## CDN 安装

使用 script 方式安装，XECommand 会定义为全局变量  
生产环境请使用 xe-command.min.js，更小的压缩版本，可以带来更快的速度体验。
min压缩后还不到1KB的轻量级copy函数

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-command/dist/xe-command.js"></script>
<script src="https://unpkg.com/xe-command/dist/xe-command.js"></script>
```

### ES6 Module import

```JavaScript
import XECommand, { commandCopy } from 'xe-command'

document.querySelector('.button').addEventListener('click', function (evnt) {
  XECommand.copy('复制该内容到剪贴板')
  commandCopy('复制该内容到剪贴板')
})
```

## License

Copyright (c) 2017-present, Xu Liangzhan