import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Highlights from './Highlights';
import "../sass/main.scss";

class App extends Component {
  render() {
    return (
      <div style={{height:"2000px"}}>
        <Navbar />
        <Header />
        <Highlights />
      </div>
    );
  }
}

export default App; 