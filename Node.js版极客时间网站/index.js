const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new koa()

app.use(
	static(__dirname + '/source/')
)

app.use(
	mount('/', async (ctx) => {
		// 提前下载好的 下载页面 html
		ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
	})
)

app.listen(3000)


