import React, { Component } from 'react';

export default class Venue extends Component {
	render() {
		return (
			<div>
				<li className="venue" onClick={() => this.props.handleVenueClick(this.props)} >
					{this.props.name}
				</li>
			</div>
		);
	}
}
