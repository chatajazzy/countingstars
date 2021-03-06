import React from 'react';
import _ from 'lodash';

const Numbers = props => {
  const numberClassName = number => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    } else if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };
  return (
    <div className="numbers">
      {Numbers.list.map((number, i) => (
        <span
          className={numberClassName(number)}
          key={i}
          onClick={() => props.selectNumber(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

Numbers.list = _.range(1, 10);

export default Numbers;
