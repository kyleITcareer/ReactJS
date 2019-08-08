import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Loader';

class App extends React.Component {
	state = { lat: null, errorMessage: ''};

	componentDidMount(){
// This is an example showing how you'd acquire a client's location and be able to use that for certain actions,
// such as being able to get the appropriate weather information from an API or direct them as needed.
		window.navigator.geolocation.getCurrentPosition(
		position => this.setState({ lat: position.coords.latitude}),
		err => this.setState({ errorMessage: err.message})
		);
	}
// This render was used in order to encapsulate the information here that would be changed over time as an App
// develops. If you had to use this again and content would change, you wouldn't have to be going through the other
// render below this to change the styling placed around this new content being rendered.
	renderContent() {
		if (this.state.errorMessage && !this.state.latitude){
				return <div>Error: {this.state.errorMessage} </div>;
			}

			if (!this.state.errorMessage && this.state.lat){
				return <SeasonDisplay lat={this.state.lat} />
			}

			return <Spinner message="Please allow location request" />;
		}
// This render was created with the use of being able to render different elements 
// using a uniform structure, such as a red border around them

	render(){
			return <div className="border red">{this.renderContent()}</div>;
	}
};

ReactDOM.render(<App />, document.querySelector('#root'));