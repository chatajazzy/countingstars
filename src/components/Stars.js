import React from 'react';
import _ from 'lodash';

const Stars = props => {
  const numberOfStars = Math.floor(Math.random() * 9);
  return <div>{_.range(numberOfStars).map(i => <span key={i}>*</span>)}</div>;
};

export default Stars;
