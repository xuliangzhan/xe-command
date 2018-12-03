# xe-command

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm build](https://travis-ci.org/xuliangzhan/xe-command.svg?branch=master)](https://travis-ci.org/PanJiaChen/xuliangzhan/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-command/blob/master/LICENSE)

XECommand 使用原生js实现复制文本到剪贴板的函数,支持常用H5的浏览器IE、Chrome、Firefox、Opera、Safari、IOS、Android，压缩后还不到1KB的轻量级copy函数

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
10+ ✔ | Latest ✔ | Latest ✔ | 41+ ✔ | 29+ ✔ | 10+ ✔ |

## Install

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-command/dist/xe-command.js"></script>
```

```HTML
<script src="https://unpkg.com/xe-command/dist/xe-command.js"></script>
```

```JavaScript
npm install xe-command --save
```

## Demo

```JavaScript
import XECommand from 'xe-command'

document.querySelector('.button').addEventListener('click', evnt => {
  XECommand.copy('Copy this content to the clipboard')
})
```

## License

Copyright (c) 2017-present, Xu Liangzhan