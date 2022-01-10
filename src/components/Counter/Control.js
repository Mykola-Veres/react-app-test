import React from 'react';

const Control = ({ onIncrement, onReduction, value, number }) => (
  <div>
    <button onClick={onIncrement}>increase{value}</button>
    <span>{number}</span>
    <button onClick={onReduction}>reduction 1</button>
  </div>
);

export default Control;
