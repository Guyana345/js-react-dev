import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Tafadzwa'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="home">
				<div className="text">
					<h1>Hello and Welcome to the js(react) starter-kit</h1>
					<p>You can use this kit as per you wish</p>
					<p>
						<b>NOTE</b>
					</p>
					<p>you can contribute to this project</p>
					<p>Thanks for the support</p>
				</div>

				<footer>Made with love by {this.state.name}</footer>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
