const fs = require('fs')

fs.watch('./', {
	recursive: true // 是否递归，子文件夹是否监视
}, (eventType, filename) => {
	console.log(eventType, filename)
})