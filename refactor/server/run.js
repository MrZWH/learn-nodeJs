const mount = require('koa-mount')
const requestFactor = require('./server/request-factor')

module.exports = function (app) {
	const koa = new (require('koa'))
	koa.use(async (ctx, next) => {
		if (ctx.url == '/favicon.ico') {
			return;
		}
		await next()
	})

	Object.keys(app).forEach(routepath => {
		const dataConfig
		koa.use(
			mount(routepath, async (ctx) => {
				ctx.status = 200

				ctx.body = await app[routepath](ctx.query)
			})
		)
	})

	koa.listen(3000)	
}
