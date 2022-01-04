import "./App.css";
import { LogIn } from "./components/useEffect";
import { AdvancedHooksComponent } from "./components/counter/useMemo-useCallback";
import { Counter } from "./components/useReducer";
import { LogButtonClicks } from "./components/useRef";
import { LoggedIn } from "./components/useState";
import { UseContextExample } from "./components/useContext";

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
          <AdvancedHooksComponent />
          <UseContextExample />
        </p>
      </div>
    </div>
  );
};

export default App;
