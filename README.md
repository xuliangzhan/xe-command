# XECommand 支持复制文本到剪贴板、打印...

## 通过NPM安装最新版本

``` shell
npm install xe-command --save
```

### 按需引入
``` shell
import { copy, print } from 'xe-command'

copy('复制该内容到剪贴板')
print()
```

### 引入所有
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

#### print () 打印页面
```shell
import { print } from 'xe-command'

print()
```

## License
Copyright (c) 2017-present, Xu Liangzhan