import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';
import _ from 'lodash';

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length,
    combinationsCount = 1 << listSize;
  for (var i = 1; i < combinationsCount; i++) {
    var combinationSum = 0;
    for (var j = 0; j < listSize; j++) {
      if (i & (1 << j)) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

export default class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null
  });
  state = Game.initialState();
  resetGame = () => this.setState(Game.initialState());
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
    this.setState(
      prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        isAnswerCorrect: null,
        randomNumberOfStars: Game.randomNumber()
      }),
      this.updateDoneStatus
    );
  };
  redraw = () => {
    this.setState(
      prevState => ({
        selectedNumbers: [],
        isAnswerCorrect: null,
        randomNumberOfStars: Game.randomNumber(),
        redraws: prevState.redraws - 1
      }),
      this.updateDoneStatus
    );
  };
  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(
      number => usedNumbers.indexOf(number) === -1
    );

    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  };
  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Congrats. You won!' };
      } else if (
        prevState.redraws === 0 &&
        !this.possibleSolutions(prevState)
      ) {
        return { doneStatus: 'Game over. You lost.' };
      }
    });
  };
  render() {
    // destructure
    const {
      selectedNumbers,
      randomNumberOfStars,
      isAnswerCorrect,
      usedNumbers,
      redraws,
      doneStatus
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
        {doneStatus ? (
          <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} />
        ) : (
          <Numbers
            selectedNumbers={selectedNumbers}
            usedNumbers={usedNumbers}
            selectNumber={this.selectNumber}
          />
        )}
      </div>
    );
  }
}
