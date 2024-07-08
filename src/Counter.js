import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Nilai: {count}</p>
      <button onClick={incrementCount} className="btn btn-blue">
        Tambah
      </button>
    </div>
  );
}

export default Counter;