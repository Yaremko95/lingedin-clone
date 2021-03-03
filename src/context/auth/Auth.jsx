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
    () => ({
      user,
      getUser,
      isAuthenticated,
      educations,
      experiences,
      setExperiences,
    }),
    [user, getUser, isAuthenticated, educations, experiences, setExperiences]
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
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};
export default Auth;
