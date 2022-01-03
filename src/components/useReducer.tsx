import { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        -
      </button>
    </>
  );
}
