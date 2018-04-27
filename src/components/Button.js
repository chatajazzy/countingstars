import React from 'react';

const Button = props => {
  let button;
  switch (props.isAnswerCorrect) {
    case true:
      button = (
        <button className="btn btn-correct" onClick={props.acceptAnswer}>
          correct
        </button>
      );
      break;
    case false:
      button = <button className="btn btn-incorrect">incorrect</button>;
      break;
    default:
      button = (
        <button
          className="btn"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}
        >
          check
        </button>
      );
      break;
  }
  return (
    <div>
      {button}
      <button onClick={props.redraw} disabled={props.redraws === 0}>
        refresh
      </button>
    </div>
  );
};

export default Button;
