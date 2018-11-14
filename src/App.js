import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map.js";
import FourSquareAPI from "./API/";
import Sidebar from "./components/Sidebar.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13,
      updateSuperState: (object) => {
        this.setState(object);
      }
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map((marker) => {
      marker.isOpen = false;
      return marker;
    })
    this.setState({
      markers: Object.assign(this.state.markers, markers) 
    });
  }

  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    });
    const venue = this.state.venues.find((venue) => venue.id === marker.id);
    FourSquareAPI.getVenueDetails(marker.id)
      .then(resp => {
        const newVenue = Object.assign(venue, resp.response.venue);
        this.setState({
          venues: Object.assign(this.state.venues, newVenue)
        });
        console.log(newVenue)
    })
  }

  handleVenueClick = (venue) => {
    const marker = this.state.markers.find((marker) => marker.id === venue.id);
    this.handleMarkerClick(marker);
  }

  componentDidMount() {
    FourSquareAPI.search({
      near: "Houston, TX",
      query: "sushi", 
      limit: 10
    })
    .then(results => {
      const {venues} = results.response;
      const {center} = results.response.geocode.feature.geometry;
      const markers = venues.map((venue) => {
        return {
          lat: parseFloat(venue.location.lat),
          lng: parseFloat(venue.location.lng),
          isOpen: false,
          isVisible: true,
          id: venue.id
        }
      });
      this.setState({
        venues,
        center,
        markers
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar {...this.state} handleVenueClick={this.handleVenueClick} />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;
