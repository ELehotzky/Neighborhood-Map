import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    // Lat/long taken from https://tools.wmflabs.org/geohack/geohack.php?pagename=Houston_Heights&params=29_47_53_N_95_23_53_W_region:US-TX_type:city
    defaultCenter={{ lat: 29.798, lng: -95.398 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

export default class Map extends Component {
  render() {
    return (
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAwz8Q-Z1qgP-D5S7I6yeQqABmK7wpT5vU"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )
  }

}



