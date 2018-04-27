import React, { Component } from 'react';
import './App.scss';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <header className="App-header">
          <h1 className="App-title">Counting Stars Temporary Title</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
