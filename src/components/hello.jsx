import React, { Component } from 'react'
import store from '../app.jsx'

export default class Hello extends Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		console.log('Hello Component Mounted!');
	}

	setString() {
		store.dispatch({
			type: 'SETHELLOSTRING',
			text: this.input.value
		});
	}

	render() {
		const style = {
			fontSize: '1rem',
			width: '100%',
			height: '100%'
		};

		return (
			<div style={style}>
				<p>String: {this.props.helloString}</p>
				<input ref={i => this.input = i} className="text" type="text" /><button onClick={ () => this.setString()}>Set String</button>
			</div>
		);
	}
}