setImmediate(() => {
	console.log('setImmediate')
})

setTimeout(()=> {
	console.log('timeout')
},0)

process.nextTick(() => {
	// 这个比上面的执行的早
	console.log('nextTick')
	process.nextTick(() => {
		console.log('nextTick')
	})
})