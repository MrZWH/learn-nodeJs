const fs = require('fs')

const promisify = require('util').promisify

const read = promisify(fs.readFile)

read('./promisify.js').then(data => {
	console.log(data.toString())
}).catch(ex => {
	console.log(ex)
})

async function test () {
	try {
		const content = await read('./promisify.js')

		console.log(content.toString())
	} catch(e) {
		// statements
		console.log(e);
	}
}

test()