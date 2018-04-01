import React from 'react';

import ReactDOM from 'react-dom';

import Head from './components/head'
import Section from './components/section'
import Footer from './components/footer'


class App extends React.Component{	
	
	
	render(){
		return(
			<div id='one'>
				<Head/>
				<Section/>
				<Footer/>
			</div>
		)
	}
	
}

ReactDOM.render(<App/>,document.getElementById('demo'))






