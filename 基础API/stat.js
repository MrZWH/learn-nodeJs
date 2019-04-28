const fs = require('fs')

fs.stat('./stat.js', (err, stats) => {
	if (err) {
		console.log('文件不存在')
		return
	}

	console.log(stats.ifFile())
	console.log(stats.ifDirectory())

	console.log(stats)
})