module.exports = {
	'/detail': async function () {
		// 做 rpc 调用
		// 然后 render 出来

		return 'detail page'
	},
	'/list': {
		data: async function () {
			return 'list page'
		},
		render: function () {
			
		}
	},
	'/play': {
		data: require('./page.data.js'),
		template: fs.readFileSync(_dirname + '/play.template.html')
	}
}