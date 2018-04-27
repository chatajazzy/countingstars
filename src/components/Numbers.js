import React from 'react';
import _ from 'lodash';

const Numbers = props => {
  return (
    <div className="numbers">
      {Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
    </div>
  );
};

Numbers.list = _.range(1, 10);

export default Numbers;
