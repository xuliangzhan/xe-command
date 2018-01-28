# XECommand 支持复制文本到剪贴板、打印...

XECommand 使用原生js实现复制文本到剪贴板的函数，部分版本较低的浏览器的不支持，运行环境 ES5+。

### 直接引用 script 全局安装，XECommand 会定义为全局变量
``` shell
<script src="./dist/xe-command.min.js" type="text/javascript"></script>

// 全局调用
XECommand.copy('复制该内容到剪贴板')
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