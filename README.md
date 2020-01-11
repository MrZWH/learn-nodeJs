## nodejs 遇到的问题

- 线上程序运行不稳定
- 程序运行效率低，每秒能处理的请求数在意额很低的水平
- 培训困难，推广受阻

如何对nodejs进行：

- 开发调试
- 框架设计
- 性能优化
- 灾备方案
- 。。。

## 使用nodejs的难点在哪里

nodejs这门技术除了JavaScript之外其它地方和浏览器前端技术几乎毫无交集，即使是数据结构、设计模式等等程序员通用技巧也都有侧重点不一样的部分，比如在使用nodejs过程中前端工程师需要了解诸如RPC调用，进程管理等等非浏览器端知识，基础薄弱会有些难度。

除此之外推广过程中还会遇到产品、后台、运维、甚至你老板等等不同角色的质疑，导致前端同学使用nodejs开展业务会碰上各种各样的阻力，因此除了补充必要的后台开发知识和系统运维知识之外，还需要对nodejs这项技术的优缺点，他能给业务带来的价值都有非常深入的理解，才能说服他人配合你完成从前端到后台的一整套项目开发

## 主要内容
- NodeJS 特性 & 开发准备
- 核心 API
- 静态资源服务器 & HTTP 协议
- 发布模块到 npm
- 本地代码构建、打包
- API 单元测试 & UI 自动化测试
- 爬虫实战

## NodeJS 关键技术
- Stream
- 动态 Web framework
- child_process & cluster

## NodeJs 是什么
- Node.js is a Javascript runtime built on Chrome's V8
- Node.js uses an event-driven,non-blocking I/O model
- 在nodejs里运行JavaScript跟在chrome里运行JavaScript有什么不同？——基本上没有不一样
  - chrome浏览器用的是同样的JavaScript引擎和模型
  - nodejs没有浏览器API，加了许多nodejs api
  - 你在chrome 里写JavaScript控制浏览器，nodejs让你用类似的方式控制整个计算机。

#### 非阻塞 I/O
- 阻塞： I/O 时进程休眠等待 I/O 完成后进行下一步
-  I/O 时函数立即返回，进程不等待 I/O 完成

#### 事件驱动
- I/O 等异步操作结束后的通知
- 观察者模式

### 为什么偏爱 NodeJs
- 前端职责范围变大，统一开发体验
- 在处理高并发、 I/O 密集场景性能优势明显

#### CPU 密集 vs I/O 密集
- CPU 密集：压缩、解压、加密、解密
- I/O 密集：文件操作、网络操作、数据库

#### web 常见场景
- 静态资源读取
- 数据库操作
- 渲染页面

#### 高并发应对之道
- 增加机器数
- 增加每台机器的 CPU 数---多核

#### 进程
- 进程：是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位。
- 多进程：启动多个进程，多个进程可以一块执行多个任务

#### 线程
- 线程：进程内一个相对独立的、可调度的执行单元，与同属一个进程的线程共享进程的资源
- 多线程：启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务

#### NodeJs 的单线程
- 单线程只是针对主进程，I/O 操作系统底层多线程调度
- 单线程不是单进程

#### NodeJs 工作模型
![](./images/nodejs工作模型.PNG)

#### 常用场景
- web server，通常被用来做一个BFF层，即 Backend For Frontend（服务于前端的后端），通俗的说就是专门为前端业务提供数据的后端程序，这类程序的特点是不需要太强大的运算能力，但对程序的灵活性有较高的要求
  - 搭建一个BFF层的好处，1.对业务来说，能让前端有能力自由组装后台数据，这样可以减少大量的业务沟通成本，加快业务的迭代速度。同时前端工程师能自主决定与后端通讯方式，让前端有更多能力着手于web性能优化。
  - 2.对后端和运维来说Nodejs BFF层搭建，绝对不是光靠前端工程师就能完成的事情，在搭建过程中涉及到了RPC调用系统运维等等场景，都需要后端和运维的紧密配合，搭建BFF层除了后续能大幅减少自己在繁重业务中的工作量之外，还可以大大提升自己在架构领域的知识经验。
  - 3.对前端工程师自身来说，node.js虽然是一门非浏览器端技术，但它基于JavaScript环境能让前端工程师快速上手，学会一门非浏览器端技术，能让对于学习计算机领域其他知识非常有好处。可以经由nodejs涉足 数据库、操作系统、人工智能等等领域，让前端工程师不在因为技术的壁垒将眼光局限在浏览器这一个环境内。
  - 腾讯视频，用来做搜索引擎优化+首屏速度优化——服务端渲染
- 开发工作流，本地代码构建
- 实用工具开发
  - Visual studio Code
- 客户端应用
  - 在已有网站的情况下需要新开发客户端应用。
  - 用nodejs客户端技术（electron）实现，最大限度复用现有工程。

### 环境 & 调试
#### 环境
- CommonJS
  - 每个文件是一个模块，有自己的作用域
  - 在模块内部 module 变量代表模块本身
  - module.exports 属性代表模块对外接口
  -  require 规则
	- / 表示绝对路径，./ 表示相对于当前文件的
	- 支持 js、json、node 扩展名，不写依次尝试
	- 不写路径则认为是 build-in 模块或者各级 node_modules 内的第三方模块
  - require 特性
    - module 被加载的时候执行，加载后缓存
    -
- global
- process

chalk npm 包可以在命令行输出有颜色的、下划线、阴影  
`npm root -g`看全局安装路径。

#### global
- CommonJS
- Buffer（二进制数据处理）、process、console
  - process.cwd() 当前命令所执行的路径
  - process 下的 argv, argv0, execArgv, execPath
  - process.env
- timer
  - process.nextTick 把回调函数放在当前队列的最后一个
  - setImmediate 回调函数放在下个队列的队首
  - setTimeout 是放在两者之间

#### 调试
- Inspector
  - node --inspect-brk 14_debug.js
- VS Code
  - 条件调试
  - ```
{
	"type": "node",
	"request": "launch",
	"program": "${file}",
	"cwd": "${cwd}"
}
```

### NodeJs 基础 API
#### path
和路径有关的一切  
nodejs.cn 访问中文文档。  
- normalize join resolve
- basename extname dirname
- parse format
- sep delimiter win32 posix

- __dirname、 __filename 总是返回文件的绝对路径
- process.cwd() 总是返回执行 node命令所在文件夹

./:
- 在 require 方法中总是相对当前文件所在文件夹
- 在其他地方和 process.cwd() 一样，相对 node 启动文件夹

#### Buffer
- 用于处理二进制数据流
-实例类似整数数组，大小固定
- C++ 代码在 V8 堆外分配物理内存
- Buffer.byteLength
- Buffer.ifBuffer()
- Buffer.concat()
- buf.length
- buf.toString()
- buf.fill()
- buf.equals() 两个buffer 的内容是否相等
- buf.indexOf
- buf.copy

#### event
#### fs
高并发的时候用同步函数会挡住其他用户
- readFile
- writeFile
- stat
- rename
- unlink
- readdir
- mkdir
- rmdir
- watch
- createReadStream
  - stream：有方向的数据
- createWriteStream

解决回调地狱问题：promisify、async

### 项目初始化
#### .gitignore 
- 匹配模式前加 / 代表项目根目录
- 匹配模式最后加 / 代表是目录
- 匹配模式前加 ! 代表取反
- * 代表任意个字符
- ? 匹配任意一个字符
- ** 匹配多级目录

`.npmignore`是发布包到npm上时需要忽略的文件  
`.editorconfig`  

#### ESLint
eslint.cn/docs/about/
安装：
```shell
npm i -S eslint babel-eslint
```
生产 eslint 配置文件：
```shell
eslint --init
```
使用 precommit git 钩子，代码错误不能提交
```shell
npm i pre-commit -S
```
`.eslintignore`忽略文件，`.eslintrc.js`配置文件


### 案例项目--静态资源服务器
官方文档：
nodejs.cn/api

安装命令行输出美化包：
```shell
npm i chalk -S
```
浏览器接收响应渲染 html 页面设置：
```js
  res.setHeader('Content-Type', 'text/html')
```
自动重启服务包：
```
npm i -g supervisor
```
使用`supervisor app.js`启动文件

#### handlebars 模板引擎
handlebarsjs.com
```
npm i handlebars
```
读取文件时不要用相对路径，因为相对路径和启动目录有关

`path.extname`获取文件的后缀名。


#### gzip deflate 压缩文件流
Accept-Encoding、Content-Encoding
使用 nodejs 提供的压缩：
```js
const {createGzip, createDeflate} = require('zlib')
```

#### range
- range：bytes=[start]-[end]
- Accept-Ranges: bytes
- Content-Range: bytes start-end/total

http码 206 表示返回部分内容（Partial Content）。  
416：如果请求中包含了 Range 请求头，并且 Range 中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义 If-Range 请求头，那么服务器就应当返回416状态码。

使用 curl 命令行向服务器发送请求部分文件
```shell
curl -r 0-10 -i http://127.0.0.1:9527/LICENSE
```

#### 缓存
缓存header：
- Expires, Cache-Control
- If-Modufied-Since / Last-Modified
- If-None-Match / ETag

在浏览器中使用刷新会向服务器发送请求验证缓存（即使 Cache-Control 设置了过期时间）

#### 做成 cli 工具
安装：
```
npm i -g xxx
```
使用方法
```
xxx # 把当前文件夹作为静态资源服务器根目录
xxx -p 8080 # 设定端口号

xxx -h localhost # 设置 host 为 localhost

xxx -d /usr # 设置根目录为 /usr
```

分析命令行参数的npm工具包：yargs、commander
```shell
npm i yargs --save
```
```shell
chmod +x bin/anydoor
```

#### 版本号
- x.y.z
- 1.2.* = ~1.2.0
- 2.x = ^2.0.0

自动打开网页：
```
const {exec} = require('child_process')
```

### 在 npm 上发布包
```shell
npm login

npm publish
```

### gulp
中文网：www.gulpjs.com.cn
- `*` 匹配任意个字符
- `?` 匹配一个字符
- `[...]` 匹配范围内字符
- `!(pattern1|pattern2)` 匹配取反
- `?(pattern1|pattern2)` 匹配 0 或 1 个
- `+(pattern1|pattern2)` 匹配 1 或多个
- `*(a|b|c)` 匹配任意个
- `@(pattern|pat*|pat?erN) 匹配特定的一个`
- `**`任意层级匹配
- gulp.src 获取文件
- gulp.dest 写文件

#### gulp 用到的一些工具
- gulp-less
- del 删除文件
- gulp-autoprefixer 配置中 browser 采用[browserslist](http://github.com/ai/browserslist#queries)[browserslist]的写法
- gulp-clean-css css 压缩

#### gulp.watch
监听文件变化执行任务

### babel
```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
#### 配合 react
```shell
npm install --save-dev @babel/preset-react
```

### 测试
- assert 断言
断言库：  
chaijs.com  
```
npm i chai

```

https://mochajs.org
```
npm i -g mocha
// or
npm i -D mocha
```
- it.only 只执行这一个
- it.skip 跳过这个

#### 测试 覆盖率 istanbul
```
npm i -D istanbul
```
```shell
istanbul cover test.js
```

#### 持续集成
是软件开发流程，有两个特性：
- 频繁地将代码集成到主干
- 每次集成都通过自动化的构建来验证
这样做有两个好处：
- 尽早发现错误
- 防止分支大幅偏离主干
egg，github 上面有`build|passing`图标就代表持续集成。  
github.com/dwyl/repo-badges 图标生成的网站。  
https://travis-ci.org  
添加文件`.travis.yml`

生成代码覆盖率：
https://codecov.io

#### 性能方面的测试
Benchmark.js https://benchmarkjs.com
各个浏览器的性能测试：https://jsperf.com

### UI 测试常用工具
#### React 组件 UI 测试官方工具 Jest
```
npm i -D jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer
```
dom测试：Enzyme

sinon

#### webdriver
```
npm i selenium-webdriver
```
在 chrome 用时需要下载 [ChromeDriver-WebDriver for Chrome](https://sites.google.com/a/chromium.org/chromedriver/downloads)

### 爬虫
- 按照一定规则自动抓取网络信息的程序

#### 反爬虫
- User-Agent, Referer, 验证码
- 单位时间访问次数、访问量
- 关键信息图片混淆
- 异步加载

#### cheerio
可以将拿到的网页输出成能像 jQuery操作的dom

#### puppeteer
```
npm i puppeteer
```

### 深入学习
- through2
- Express、koa、egg
- SSR & 同构
- NodeJS 源码

## Node.js 版极客时间网站

- 列表页
  - 打通前后台
  - 服务端渲染
- 详情页
  - 网页路由
  - 异步加载
- 播放页
  - API 服务器