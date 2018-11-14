import React, { Component } from 'react';

export default class Venue extends Component {
	render() {
		return (
			<div>
				<li className="venue" onClick={() => this.props.handleVenueClick(this.props)} >
					<img alt={this.props.categories[0].name} src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} />
					{this.props.name}
				</li>
			</div>
		);
	}
}
