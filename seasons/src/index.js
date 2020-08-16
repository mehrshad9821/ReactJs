import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{
	state = { lat: null, erromsg: ''};
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
		(position)=> {
			//setstate!!!!!!!! format!!!!
			this.setState({lat: position.coords.latitude});
		},
		(err) => {

			this.setState({erromsg: err.message});
		}

		);
	}
	//helper function
	renderContent(){
		if (this.state.erromsg && !this.state.lat){
			return <div> Error: {this.state.erromsg}</div>
		}

		if (!this.state.erromsg && this.state.lat){
			return <SeasonDisplay lat = {this.state.lat}/>
		}
		else {
			return <Spinner msg = "Please accept location request!"/>;
		}
	}
	render(){
		return (
			<div className = 'border red'>
			{this.renderContent()}
			</div>
			);
	}
}
ReactDOM.render(
	<App />,
	document.querySelector('#root'));