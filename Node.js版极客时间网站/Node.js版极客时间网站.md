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
