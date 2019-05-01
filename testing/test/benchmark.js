const {num1, num2} = require('../src/fn')

// const s1 = Date.now()
// for(let i = 0;i < 10000;i++) {
// 	num1('23131')
// }
// const e1 = Data.now()

// console.log(e1-s1)


// const s2 = Date.now()
// for(let i = 0;i < 10000;i++) {
// 	num2('23131')
// }
// const e2 = Data.now()

// console.log(e2-s2)

const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

suite.add('parseInt', () => {
	num1('23131')
}).add('Number', () => {
	num2('23131')
}).on('cycle', event => {
	console.log(String(event.target))
}).on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').map('name'))
}).run({'async': true})