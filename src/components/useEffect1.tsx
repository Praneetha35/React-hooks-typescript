import { useState, useEffect } from "react";
export const LogIn1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    document.title = isLoggedIn ? "In" : "Out";
  }, [isLoggedIn]);

  return (
    <div>
      <button onClick={handleLogin}> In</button>
      <button onClick={handleLogout}> Out</button>
      <div>{isLoggedIn ? "In" : "Out"}</div>
    </div>
  );
};
