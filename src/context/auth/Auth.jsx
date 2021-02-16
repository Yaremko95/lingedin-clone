import React, { createContext, useState, useEffect, useContext } from "react";
import backend from "../../clients/backemd.client";
import { useAsync } from "./hooks";
export const AuthContext = createContext();
function Auth({ children, history }) {
  const {
    user,
    isLoaded,
    isAuthenticated,
    educations,
    experiences,
    setExperiences,
    setEducations,
    reset,
    getUser,
  } = useAsync();
  useEffect(() => {
    getUser();
  }, [getUser]);
  const value = React.useMemo(
    () => ({ user, getUser, isAuthenticated, educations, experiences }),
    [user, getUser, isAuthenticated, educations, experiences]
  );
  return (
    <div>
      {!isLoaded ? (
        <div>Loading</div>
      ) : (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      )}
    </div>
  );
}

export default Auth;
