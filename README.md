# xe-command

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm build](https://travis-ci.org/xuliangzhan/xe-command.svg?branch=master)](https://travis-ci.org/xuliangzhan/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-command/blob/master/LICENSE)

## Installing

```JavaScript
npm install xe-command --save
```

```JavaScript
import XECommand from 'xe-command'
```

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-command/dist/xe-command.js"></script>
```

```HTML
<script src="https://unpkg.com/xe-command/dist/xe-command.js"></script>
```

## Example

```JavaScript
document.querySelector('.button').addEventListener('click', evnt => {
  if (XECommand.copy('Copy this content to the clipboard')) {
    alery('Copy success.')
  } else {
    alert('The browser is not supported.')
  }
})
```

## License

Copyright (c) 2017-present, Xu Liangzhan