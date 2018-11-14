import React, { Component } from 'react';
import Venues from "./Venues.js";

// Side menu and dynamic search bar

export default class Sidebar extends Component {

	constructor() {
		super();
		this.state = {
			search: "",
			venues: []
		}
	}

	handleSearch = () => {
		if (this.state.search.trim() !== "") {
			let venues = this.props.venues.filter((venue) => venue.name.toLowerCase().includes(this.state.search.toLowerCase()));
			return venues;
		}
		return this.props.venues;
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
		});
	}

	render() {
		return (
			<div className="sidebar">
				<input type={"search"} placeholder={"Search Venues"} onChange={this.handleChange} id={"search"} />
				<Venues {...this.props} venues={this.handleSearch()} handleVenueClick={this.props.handleVenueClick} />
			</div>
		);
	}
}
