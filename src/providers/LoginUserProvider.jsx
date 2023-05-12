import { createContext, useContext, useState } from "react";

export const LoginUserContext = createContext();

export const LoginUserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginUserContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
      {children}
    </LoginUserContext.Provider>
  )
}

export const useLoginUser = () => useContext(LoginUserContext);