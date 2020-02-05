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

## 异步编程 —— Promise

- 当前事件循环得不到结果，但未来的事件循环会给到你结果
- 是一个状态机
  - pending
  - fulfilled/resolved
  - rejected
- 执行 then 和 catch 会返回一个新的Promise，该Promise 最终状态根据 then 和 catch 的回调函数的执行结果决定
  - 如果回调函数最终是 throw，该 Promise 是 rejected 状态
  - 如果回调函数最终是 return，该 Promise 是 resolved 状态
  - 如果回调函数最终 return 了一个 Promise，该 Promise 会和回调函数 return 的 Promise 状态保持一致

## 异步编程 —— async-await

- async function 是 Promise 的语法糖封装
- 异步编程的终极方案 —— 以同步的方式写异步
  - await 关键字可以“暂停”async function 的执行
  - await 关键字可以以同步的写法获取 Promise 的执行结果
  - try-catch 可以获取 await 所得到的错误，即便这个错误是在另外一个事件循环，另外一个函数调用栈所创建的。
- 一个穿越事件循环存在的 function