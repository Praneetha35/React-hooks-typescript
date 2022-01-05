import React, { useMemo, useState } from "react";
import IncButton from "./IncButton";

//UseCallback is used to optimize the rendering behavior of your React function components,
//useMemo is used to memoize expensive functions to avoid having to call them on every render.
//useCallback is to prevent a component from re-rendering unless its props have changed.
//useMemo returns a memoized value and useCallback returns a memoized function.
//useMemo will remember the returned value from your function. useCallback will remember your actual function.

export const UseMemo = () => {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    return count;
  }, [count]);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <h3>{memoizedValue}</h3>
      <IncButton onClickHandler={countHandler} count={count} />
    </div>
  );
};
