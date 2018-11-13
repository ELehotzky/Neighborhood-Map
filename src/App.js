import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map.js";
import FourSquareAPI from "./API/";

class App extends Component {

  componentDidMount() {
    FourSquareAPI.search({
      near: "Houston, TX",
      query: "sushi",
      limit: 10
    })
    .then(resp => console.log(resp))
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
