import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

export default class Game extends Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: Math.floor(Math.random() * 9)
  };
  selectNumber = clickedNumber => {
    // depends on the pervious state
    if (this.state.selectedNumbers.length === 2) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = clickedNumber => {
    // depends on the pervious state
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => {
        return number !== clickedNumber;
      })
    }));
  };

  render() {
    // destructure
    const { selectedNumbers, randomNumberOfStars } = this.state;
    return (
      <div>
        <h3>Play a game</h3>
        <div className="game__top">
          <Stars randomNumberOfStars={randomNumberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </div>
    );
  }
}
