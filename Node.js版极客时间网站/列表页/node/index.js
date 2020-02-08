const mount = require('koa-mount')
const static = require('koa-static')
const app = new (require('koa'))

const ReactDOMServer = require('react-dom/server')

require('@babel/register')({
	presets: ['@babel/preset-react']
})

const getFakeData = require('./fake-data')
const template = require('./template')(__dirname + '/index.htm')

const getApp = require('./app.jsx')

app.use(mount('/static', static(__dirname + '/source')))

app.use(mount('/data', async (ctx) => {
	const category = isNaN(+ctx.query.category) ? 0 : +ctx.query.category
	const sort = isNaN(+ctx.query.sort) ? 0 : +ctx.query.sort

	const data = getFakeData(sort, category)

	ctx.status = 200
	ctx.body = data
}))

app.use(async (ctx) => {
	const category = isNaN(+ctx.query.category) ? 0 : +ctx.query.category
	const sort = isNaN(+ctx.query.sort) ? 0 : +ctx.query.sort

	const data = getFakeData(sort, category)

	const reactString = ReactDOMServer.renderToString(
		getApp(data)
	)

	console.log(reactString)

	ctx.status = 200;
	ctx.body = template({
		reactString,
		reactData: data
	})
})

app.listen(3000)
