import "./App.css";
import { LogIn } from "./components/useEffect";
import { Counter } from "./components/useReducer";
import { LogButtonClicks } from "./components/useRef";
import { LoggedIn } from "./components/useState";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        useState
        <p />
        <LoggedIn />
      </div>
      <p />
      <div>
        useReducer
        <p />
        <Counter />
      </div>
      <div>
        <p>
          useEffect
          <LogIn />
        </p>
      </div>
      <div>
        <p>
          useRef
          <LogButtonClicks />
        </p>
      </div>
    </div>
  );
};

export default App;
