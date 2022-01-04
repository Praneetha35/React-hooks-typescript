import React, { useCallback, useMemo, useState } from "react";
import AgeButton from "./ageButton";
import SalaryButton from "./salaryButton";
//UseCallback is used to optimize the rendering behavior of your React function components,
//useMemo is used to memoize expensive functions to avoid having to call them on every render.
//useCallback is to prevent a component from re-rendering unless its props have changed.
//useMemo returns a memoized value and useCallback returns a memoized function.
//useMemo will remember the returned value from your function. useCallback will remember your actual function.
export const AdvancedHooksComponent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(100);

  const memoizedValue = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    if (age % 2 === 0) return "Even";
    else return "Odd";
  }, [age]);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);

  return (
    <div>
      <h1>useMemo,useCallback</h1>
      <h3>{memoizedValue}</h3>
      <AgeButton onClickHandler={ageHandler} age={age} />
      <SalaryButton clickHandler={salaryHandler} salary={salary} />
    </div>
  );
};
