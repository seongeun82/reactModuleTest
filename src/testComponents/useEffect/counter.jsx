import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState({ a: 1, b: 2 });
  const addOne = () => (key) => {
    let newConter = { ...counter, key: counter[key] + 1 };
    console.log(newConter);
    setCounter(newConter);
  };

  return (
    <>
      <button value="a" onClick={addOne}>
        click
      </button>
      <span>{counter.a}</span>
      <span>{counter.b}</span>
    </>
  );
};

export default Counter;
