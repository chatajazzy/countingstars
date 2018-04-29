import React from 'react';
import _ from 'lodash';
import star from '../star.svg';
const Stars = props => {
  return (
    <div className="stars">
      {_.range(props.randomNumberOfStars).map(i => (
        <span key={i}>
          <img className="stars__img" src={star} />
        </span>
      ))}
    </div>
  );
};

export default Stars;
