import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

export default class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play a game</h3>
        <div className="game__top">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}
