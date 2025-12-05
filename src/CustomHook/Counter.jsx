import React from "react";
import { UseCounter } from "../CustomHook/UseCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = UseCounter(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
