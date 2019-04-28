const fs = require('fs')

fs.readFile('./readfile.js', 'utf8', (err, data) => {
	if (err) {throw err}

		console.log(data)
})

const data = fs.readFileSync('./run.js', 'utf8')

console.log(data)