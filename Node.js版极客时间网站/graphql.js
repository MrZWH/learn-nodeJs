const app = new (require('koa'))
const mount = require('mount')
const fs = require('fs')
const static = require('koa-static')
const graphqlHTTP = require('koa-graphql')

app.use(
	mount('/api', graphqlHTTP({
		schema: require('./schema')
	}))
)

app.use(
	mount('/static', static(`${__dirname}/source/static`))
)

app.use(
	mount('/', async (ctx) => {
		
		// 提前下载好的 下载页面 html
		ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
	})
)

app.listen(3000)