import { useRef } from "react";
//No re-rendering occurs.
//const countRef = useRef(0) creates a references countRef initialized with 0.
//The only difference between useRef() and creating a {current: ...} object yourself is that useRef will give you the same ref object on every render.
//There are situations where you might want to persist certain values in consecutive renders. Instead of storing these values in state which might cause unnecessary renders, you can store it as the value of useRef's current property since react guarantees that this value is persisted between re-renders.
//The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated unlike useState

export function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log("Rendered");
  return <button onClick={handle}>Click</button>;
}
