const fs = require('fs')

const content = Buffer.from('this is a test')

fs.writeFile('./text', content, {
	encoding: 'utf8'
}, err => {
	if (err) {throw err}

	console.log('done')
})

// fs.writeFile('./text', 'This is a test', {
// 	encoding: 'utf8'
// }, err => {
// 	if (err) {throw err}

// 	console.log('done')
// })