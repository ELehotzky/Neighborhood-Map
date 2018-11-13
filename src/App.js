import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map.js";
import FourSquareAPI from "./API/";

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     venues: [],
  //     markers: [],
  //     center: [],
  //     zoom: 13
  //   };
  // }

  componentDidMount() {
    FourSquareAPI.search({
      near: "Houston, TX",
      query: "sushi", 
      limit: 10
    })
    .then(results => {
      console.log(results)
    })
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
