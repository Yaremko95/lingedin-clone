import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
function Auth({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}, []);
  return (
    <div>
      {isLoaded ? (
        <div>Loading</div>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
}

export default Auth;
