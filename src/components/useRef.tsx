import { useRef } from "react";
//No re-rendering occurs.
//const countRef = useRef(0) creates a references countRef initialized with 0.
export function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log("Rendered");
  return <button onClick={handle}>Click</button>;
}
