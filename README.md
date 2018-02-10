# XECommand 支持复制文本到剪贴板、打印...

[![npm version](https://img.shields.io/npm/v/xe-command.svg?style=flat-square)](https://www.npmjs.org/package/xe-command)
[![npm downloads](https://img.shields.io/npm/dm/xe-command.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-command)

XECommand 使用原生js实现复制文本到剪贴板的函数，部分版本较低的浏览器的不支持，运行环境 ES5+。

### CDN 安装
使用 script 方式安装，XECommand 会定义为全局变量<br/>
生产环境请使用 xe-command.min.js，更小的压缩版本，可以带来更快的速度体验。
#### cdnjs 获取最新版本, [点击浏览](https://cdn.jsdelivr.net/npm/xe-command/)已发布的所有 npm 包的源代码。
``` shell
<script src="https://cdn.jsdelivr.net/npm/xe-command@1.0.6/dist/xe-command.js"></script>
```
#### unpkg 获取最新版本, [点击浏览](https://unpkg.com/xe-command@1.0.6/)已发布的所有 npm 包的源代码
``` shell
<script src="https://unpkg.com/xe-command@1.0.6/dist/xe-command.js"></script>
```

### AMD 安装， 以 require.js 为例
``` shell
// require 配置
require.config({
  paths: {
    // ...,
    'xe-command': './dist/xe-command.min'
  }
})

// ./app.js 调用
define(['xe-command'], function (XECommand) {
  XECommand.copy('复制该内容到剪贴板')
})
```

### ES6 Module 安装方式
``` shell
npm install xe-command --save
```

### 部分导入
``` shell
import { copy, print } from 'xe-command'

copy('复制该内容到剪贴板')
print()
```

### 导入所有
``` shell
import XECommand from 'xe-command'

XECommand.copy('复制该内容到剪贴板')
XECommand.print()
```

## API :
#### copy (content) 复制文本到剪贴板
```shell
import { copy } from 'xe-command'

copy('复制该内容到剪贴板')
```

#### print () 调用打印
```shell
import { print } from 'xe-command'

print()
```

## License
Copyright (c) 2017-present, Xu Liangzhan