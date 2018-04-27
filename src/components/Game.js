import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

export default class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  state = {
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    isAnswerCorrect: null,
    usedNumbers: [],
    redraws: 5
  };
  selectNumber = clickedNumber => {
    // depends on the pervious state
    if (this.state.selectedNumbers.length === 2) {
      return;
    }
    this.setState(prevState => ({
      isAnswerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = clickedNumber => {
    // depends on the pervious state
    this.setState(prevState => ({
      isAnswerCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => {
        return number !== clickedNumber;
      })
    }));
  };
  checkAnswer = () => {
    this.setState(prevState => ({
      isAnswerCorrect:
        prevState.randomNumberOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      isAnswerCorrect: null,
      randomNumberOfStars: Game.randomNumber()
    }));
  };
  redraw = () => {
    this.setState(prevState => ({
      selectedNumbers: [],
      isAnswerCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
      redraws: prevState.redraws - 1
    }));
  };
  render() {
    // destructure
    const {
      selectedNumbers,
      randomNumberOfStars,
      isAnswerCorrect,
      usedNumbers,
      redraws
    } = this.state;
    return (
      <div>
        <h3>Play a game</h3>
        <div className="game__top">
          <Stars randomNumberOfStars={randomNumberOfStars} />
          <Button
            selectedNumbers={selectedNumbers}
            isAnswerCorrect={isAnswerCorrect}
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            redraws={redraws}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <Numbers
          selectedNumbers={selectedNumbers}
          usedNumbers={usedNumbers}
          selectNumber={this.selectNumber}
        />
      </div>
    );
  }
}
