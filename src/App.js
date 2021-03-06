import React, { Component } from 'react';
import './App.scss';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <main className="main">
          <header className="app__header">
            <h1 className="app__title">Counting Stars</h1>
          </header>
          <Game />
        </main>
      </div>
    );
  }
}

export default App;
