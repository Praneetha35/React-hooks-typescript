import { createContext, useContext, useState } from "react";
// “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
const UserContext = createContext<string | null>(null);
const UserPage: React.FC = () => {
  const context = useContext(UserContext);
  return <div>{context}</div>;
};

const NewComponent: React.FC = () => {
  const context = useContext(UserContext);
  return (
    <div>
      This is the new component
      {context}
      <br />
    </div>
  );
};
export function UseContextExample() {
  const [user, setUser] = useState("- Initial value");
  const handleClick = () => {
    setUser("Button has been clicked");
  };
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>This is homepage</h1>
        <button onClick={handleClick}>Change value </button>
        <UserPage />
        ------
        <NewComponent />
      </div>
    </UserContext.Provider>
  );
}
