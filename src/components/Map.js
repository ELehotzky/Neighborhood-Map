import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const mykey = `${process.env.REACT_APP_API_KEY}`;
const apiKey = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${mykey}`

const MyMapComponent = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={14} zoom={props.zoom}
    // Lat/long taken from https://tools.wmflabs.org/geohack/geohack.php?pagename=Houston_Heights&params=29_47_53_N_95_23_53_W_region:US-TX_type:city
    defaultCenter={{ lat: 29.798, lng: -95.398 }}
    center={props.center}
  >
    {props.markers && props.markers.filter((marker) => 
      marker.isVisible).map((marker, index) => {
        const venueInfo = props.venues.find((venue) => venue.id === marker.id);
       return (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} 
       onClick={() => props.handleMarkerClick(marker)} >
        {marker.isOpen && venueInfo.bestPhoto && (
          <InfoWindow>
            <React.Fragment>
              <img alt={"Front of Venue"} src={`${venueInfo.bestPhoto.prefix}150x150${venueInfo.bestPhoto.suffix}`} />
              <p>{venueInfo.name}</p>
            </React.Fragment>
        </InfoWindow>
        )}
        </Marker> 
       )
    })}
  </GoogleMap>
)))

export default class Map extends Component {
  render() {
    return (
        <MyMapComponent
        {...this.props}
          isMarkerShown
          googleMapURL={apiKey}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `70%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )
  }

}



