import React, { Component } from 'react';
import Venues from "./Venues.js";

export default class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<input type={"search"} placeholder={"Search Venues"} id={"search"} />
				<Venues {...this.props} handleVenueClick={this.props.handleVenueClick} />
			</div>
		);
	}
}
