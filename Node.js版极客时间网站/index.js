const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new koa()

app.use(
	static(__dirname + '/source/')
)

// 提前下载好的 下载页面 html
const buffer = fs.readFileSync(__dirname + '/source/index.html')
app.use(
	mount('/', async (ctx) => {
		ctx.status = 200
		ctx.type = 'html'
		ctx.body = buffer
	})
)

app.listen(3000)


