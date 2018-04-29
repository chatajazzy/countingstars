import React from 'react';
import correct from '../correct.svg';
import incorrect from '../incorrect.svg';
import reload from '../reload.svg';
import equal from '../equal.svg';

const Button = props => {
  let button;
  switch (props.isAnswerCorrect) {
    case true:
      button = (
        <button className="btn btn-correct" onClick={props.acceptAnswer}>
          <img className="btn__img" src={correct} />
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-incorrect">
          <img className="btn__img" src={incorrect} />
        </button>
      );
      break;
    default:
      button = (
        <button
          className="btn"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}
        >
          <img className="btn__img" src={equal} />
        </button>
      );
      break;
  }
  return (
    <div>
      {button}
      <button
        className="btn"
        onClick={props.redraw}
        disabled={props.redraws === 0}
      >
        <img className="btn__img" src={reload} />
      </button>
    </div>
  );
};

export default Button;
