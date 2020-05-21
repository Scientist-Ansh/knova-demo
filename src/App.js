import React, { Component } from 'react';
import './App.css';

import Canvas from './Components/Canvas'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LETS DESIGN SOMETHING AMAZING</h1>
        <Canvas/>
      </div>
    );
  }
}

export default App;