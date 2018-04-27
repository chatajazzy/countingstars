import React from 'react';
import _ from 'lodash';

const Stars = props => {
  return (
    <div>
      {_.range(props.randomNumberOfStars).map(i => <span key={i}>*</span>)}
    </div>
  );
};

export default Stars;
