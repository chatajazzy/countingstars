import React from 'react';

const DoneFrame = props => {
  return (
    <div className="done-frame">
      <h2 className="done-frame__title">{props.doneStatus}</h2>
      <button className="btn done-frame__btn" onClick={props.resetGame}>
        Play again
      </button>
    </div>
  );
};

export default DoneFrame;
