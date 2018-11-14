import React, { Component } from 'react';
import Venues from "./Venues.js";

export default class Sidebar extends Component {

	constructor() {
		super();
		this.state = {
			search: ""
		}
	}


	handleSearch = () => {

	}

	handleChange = (event) => {
		this.setState({
			search: event.target.value
		});
		const markers = this.props.venues.map((venue) => {
			const inSearch = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
			const marker = this.props.markers.find((marker) => marker.id === venue.id);
			if (inSearch) {
				marker.isVisible = true;
			} else {
				marker.isVisible = false;
			}
			return marker;
		});
		this.props.updateSuperState({
			markers
		})
	}

	render() {
		return (
			<div className="sidebar">
				<input type={"search"} placeholder={"Search Venues"} onChange={this.handleChange} id={"search"} />
				<Venues {...this.props} handleVenueClick={this.props.handleVenueClick} />
			</div>
		);
	}
}
