import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, selectCount } from './counterSlice';
import './Counter.css'; // Import CSS file

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('1');

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
  };

  return (
    <div className="counterContainer">
        <h1>Counter</h1>
      <div className='container'>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="count">{count}</span>
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="incrementSection">
        <input
          className="incrementInput"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className="incrementButton" onClick={handleIncrementByAmount}>
          Add Amount
        </button>
      </div>
    </div>
  );
}
