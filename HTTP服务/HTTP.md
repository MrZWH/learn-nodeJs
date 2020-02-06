# HTTP 服务

## 什么是 HTTP 服务

HTTP 是什么？

- 应用层协议
- 五层网络协议里的一部分

一个网页请求，包含两次 HTTP 包交换：

- 浏览器向 HTTP 服务器发送请求 HTTP 包
- HTTP 服务器向浏览器返回 HTTP 包

HTTP 服务要做什么事情？

- 解析进来的 HTTP 请求报文
- 返回对应的 HTTP 返回报文

## 简单实现一个 HTTP 服务

代码 [./http.js](./http.js)

## Express

- 核心功能：
  - 路由
  - request/response 简化
    - request：pathname、query等
    - response：send()、json() 等

一旦有异步，洋葱模型就打破了。

## koa

- 核心功能：
  - 比 express 更极致的 request/response 简化
    - ctx.status = 200
    - ctx.body = ‘hello’
  - 使用 async function 实现的中间件
    - 有“暂停执行”的能力
    - 在异步的情况下也符合洋葱模型
  - 精简内核，所有额外功能都移到中间件里实现。

特点：

- 中间件
- Context，Request and Response

koa 自己不带路由。  
路由中间件：koa-mount。需要安装。

Express vs Koa

- express 门槛更低，koa 更强大优雅
- express 封装更多的东西，开发更快速，koa 可定制性更高