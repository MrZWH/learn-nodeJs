const net = require('net')

const server = net.createServer((socket) => {
	socket.on('data', function (buffer) {
		const seqBuffer = buffer.slice(0, 2)
		// console.log(buffer, buffer.toString())
		const lessonid = buffer.readInt32BE(2)

		const buffer = Buffer.concat([
			seqBuffer,
			Buffer.from(data[lessonid])
		])
		socket.write(buffer)
	})
});

server.listen(4000)

const data = {
	122: 'zheshi122',
	133: 'zheshi133'
}