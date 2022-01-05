import "./App.css";
import { LogIn } from "./components/useEffect";
import { LogIn1 } from "./components/useEffect1";
import { LogIn2 } from "./components/useEffect2";
import { AdvancedHooksComponent } from "./components/counter/useMemo-useCallback";
import { Counter } from "./components/useReducer";
import { LogButtonClicks } from "./components/useRef";
import { LoggedIn } from "./components/useState";
import { UseContextExample } from "./components/useContext";
import { UseMemo } from "./components/counter1/useMemo";

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
          useEffect-runs once after initial render
          <LogIn />
        </p>
        <p>
          useEffect-runs only after if props/ state changes
          <LogIn1 />
        </p>
        <p>
          useEffect-runs after every render
          <LogIn2 />
        </p>
      </div>
      <div>
        <p>
          useRef
          <LogButtonClicks />
          <AdvancedHooksComponent />
          <UseContextExample />
        </p>
      </div>

      <div>
        useMemo
        <UseMemo />
      </div>
    </div>
  );
};

export default App;
