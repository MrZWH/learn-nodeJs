const React = require('react')
const Container = require('../components/container.jsx')

module.exports = function (data) {
	return <Container
		columns={data}
		filt={()=>{}}
		sort={()=>{}}
	/>
}