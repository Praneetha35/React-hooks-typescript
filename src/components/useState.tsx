import { useEffect, useState } from "react";
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  let status = "logged in";
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogoutVariable = () => {
    status = "logged out";
  };

  useEffect(() => {
    document.title = isLoggedIn ? "In" : "Out";
  });
  return (
    <div>
      <button onClick={handleLogin}> Log in</button>
      <button onClick={handleLogout}> Log out</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
      <button onClick={handleLogoutVariable}> Status</button>
      <div>User is {status}</div>
    </div>
  );
};
