import React from 'react';

const Button = props => {
  return (
    <div>
      <button disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
};

export default Button;
