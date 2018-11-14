import React, { Component } from 'react';
import Venue from "./Venue.js";

export default class Venues extends Component {
	render() {
		return (
			<div>
				<ol className="venues">
					{this.props.venues && this.props.venues.map((venue, index) => (
						<Venue key={index} {...venue} handleVenueClick={this.props.handleVenueClick} /> ))}
				</ol>
			</div>
		);
	}
}
