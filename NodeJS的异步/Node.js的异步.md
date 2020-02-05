# Node.js 的异步

## Node.js 的非阻塞式 I/O

- I/O 即 Input/Output，一个系统的输入和输出
- 阻塞I/O和非阻塞I/O的区别就在于，系统接收输入再到输出这个期间还能不能接收其它输入。

### 代码示例

参考 `./阻塞与非阻塞IO.js`  
需安装一个包： npm install glob  
glob 可以获取目录下的文件以及文件名。

## Node.js 异步编程 - callback

- 回调函数格式规范
  - error-first callback
  - Node-style callback
- 第一个参数是error，后面的参数才是结果

node 中每一个事件循环都是一个调用栈。在异步函数中 throw error 有些情况 try catch 会失效。

### 异步流程控制的问题

回调地狱。  
异步并发的问题。  

解决方案：

- async.js npm 包，已过时。
- thunk

## 事件循环

代码演示：`./eventloop.js`  