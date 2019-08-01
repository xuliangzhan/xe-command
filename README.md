# xe-command

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/xe-command/dist/xe-command.min.js?compression=gzip&label=gzip%20size:%20JS)](http://img.badgesize.io/https://unpkg.com/xe-command/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-command/blob/master/LICENSE)

## Installing

```shell
npm install xe-command --save
```

Get on [unpkg](https://unpkg.com/xe-command/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-command/) 上获取

```HTML
<script src="https://unpkg.com/xe-command/dist/xe-command.min.js"></script>
```

## Example

[Run this demo on jsfiddle.net](https://jsfiddle.net/fjvckd2a/)

```javascript
document.querySelector('.button').addEventListener('click', evnt => {
  if (XECommand.copy('Copy this content to the clipboard')) {
    alert('Copy success.')
  } else {
    alert('The browser is not supported.')
  }
})
```

## License

Copyright (c) 2017-present, Xu Liangzhan
