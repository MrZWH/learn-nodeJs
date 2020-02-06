# Node.js版极客时间网站

- 重构极客时间网站，使用Node.js 搭建 BFF 层。
- 向前端提供 HTTP 服务，与后端进行 RPC 通信。

## 极客时间整站与第一个页面的需求解构

- 列表页，适合做 SEO，
- 详情页
- 播放页
- 下载页

### 开始开发

需要下载一些 npm 模块：
- koa、koa-mount、koa-static

### 详情页需求解构

- 使用 RPC 通信从后台服务器获取数据
- 模板渲染
  - include 子模版（切分程序逻辑的方式，更好维护）
  - xss 过滤、模板 helper 函数

#### 使用 ES6 模板字符串实现模板引擎

- 通过 vm 模块编译 JavaScript 形成函数
  - xss 过滤、模板 helper 函数
  - include 子模块

### 课程播放页

- API 服务 -RESTful
  - 简单易懂
  - 可以快速搭建
  - 在数据的聚合方面有很大的劣势
- API 服务 - GraphQL
  - 专注数据聚合，前端要什么就返回什么

#### GraphQL

- Facebook 开发的实现 API 服务的库
  - 让前端有能自定义查询数据的能力

配合 koa-graphql 使用

浏览器端请求路径`localhost:3000/?query={comment{name,content,praiseNum}}`

发送 POST 请求时：
```json
{
	"query": "mutation {praise(id: 3)}"
}
```