const cluster = require('cluster')
const os = require('os')

// 在主进程中执行逻辑
if (cluster.isMaster) {
	for (let i = 0; i < os.cpus().length / 2; i++) {
		const worker = cluster.fork()
		let missedPing = 0
		// 心跳检测
		let inter = setInterval(() => {
			console.log('ping')
			worker.send('ping')
			missedPing++;

			if (missedPing >= 3) {
				clearInterval(inter)
				process.kill(worker.process.pid)
			}
		}, 3000);
		worker.on('message', (msg) => {
			console.log('pong')
			if (msg === 'pong') {
				missedPing--;
			}
		})
	}
	cluster.on('exit', () => {
		setTimeout(() => {
			cluster.fork()
		}, 5000)
	})
} else {
	require('./app.js')

	// 心跳检测
	process.on('message', (str) => {
		if (str === 'ping') {
			process.send('pong')
		}
	})

	process.on('uncaughtException', (err) => {
		console.error(err)

		// 尽管监听了这个错误，但还是需要退出服务
		process.exit(1)
	})
	// 检查内存泄漏
	setInterval(() =>{
		console.log(process.memoryUsage().rss)
		if (process.memoryUsage().rss > 734003200) {
			console.log('oom')
			process.exit(1)
		}
	}, 5000)
}