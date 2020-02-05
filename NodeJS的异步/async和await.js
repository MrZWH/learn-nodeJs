// 返回相同
// console.log(async function () {
// 	throw new Error('4')
// }())

// console.log(function () {
// 	return new Promise(resolve, reject) {
// 		reject('4')
// 	}
// }())

(async function () {
	try{
		await interview(1)
		await interview(2)
		await interview(3)
	} catch (e) {
		return console.log('cry at ' + e.round)
	}
	console.log('smile')
})()