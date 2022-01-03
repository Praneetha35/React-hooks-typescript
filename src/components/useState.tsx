import { useEffect, useState } from "react";
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    document.title = isLoggedIn ? "In" : "Out";
  });
  return (
    <div>
      <button onClick={handleLogin}> Log in</button>
      <button onClick={handleLogout}> Log out</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
