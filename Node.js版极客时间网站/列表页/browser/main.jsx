const React = require('react')
const ReactDOM = require('react-dom')

const Container = require('../components/container.jsx')
const data = window.reactInitData;

ReactDOM.render(
	<Container
		columns={data}
		filt={()=>{}}
		sort={()=>{}}
	/>,
	document.getElementById('reactapp')
)