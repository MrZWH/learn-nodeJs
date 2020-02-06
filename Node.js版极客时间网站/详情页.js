const koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const rpcClient = require('./client')
const template = require('./template')

const app = new koa()

app.use(
	mount('/static', static(__dirname + '/source/static/'))
)

app.use(async (ctx) => {
	const result = await new Promise((resolve, reject) => {
		rpcClient.write({
			columnid: ctx.query.columnid
		}, function (err, data) {
			err ? reject(err) : resolve(data)
		})
	})

	ctx.status = 200;

	ctx.body = template(__dirname + '/template/index.html')(result)
})

app.listen(3000)


