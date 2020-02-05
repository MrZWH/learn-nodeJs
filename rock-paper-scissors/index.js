var playAction = process.argv[process.argv.length - 1];
console.log(playAction)

const game = require('./lib.js');

// const result = game(playAction)
// console.log('result', result)

let count = 0;

process.stdin.on('data', e => {
	const playAction = e.toString().trim()
	// console.log(playAction)

	const result = game(playAction)
	console.log(result)

	if (result == -1) {
		count++;
	}

	if (count === 3) {
		console.log('you so good,i don\'t play')
		process.exit();
	}
})