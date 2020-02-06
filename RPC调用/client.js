const net = require('net')

const socket = new net.Socket({})

socket.connect({
	host: '127.0.0.1',
	port: 4000
});

socket.write('good morning')

const lessonids = [
	'122',
	'133'
]

let buffer = Buffer.alloc(4)
let id = Math.floor(Math.random() * lessonids.length)

socket.on('data', (buffer) => {
	const seqBuffer = buffer.slice(0, 2)
	const titleBuffer = buffer.slice(2)
	console.log(seqBuffer.readInt16BE(), titleBuffer.toString())

	console.log(lessonids[id], buffer.toString())
})

let seq = 0;
function encode(index) {
	buffer = Buffer.alloc(6)
	buffer.writeInt16BE(seq)
	buffer.writeInt32BE(
		lessonids[id], 2
	);
	console.log(seq, lessonids[index])
	seq++
	return buffer
}

setInterval(function() {
	id = Math.floor(Math.random() * lessonids.length)
	socket.write(encode(id))
}, 50)
