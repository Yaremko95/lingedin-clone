import React from "react";
import backend from "../clients/backemd.client";
const useSafeDispatch = (dispatch) =>
  React.useCallback((...args) => dispatch(...args), [dispatch]);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoaded: false,
  experiences: [],
  educations: [],
  about: "",
};

const useAsync = () => {
  const [
    { user, isAuthenticated, isLoaded, experiences, educations, about },
    setState,
  ] = React.useReducer((s, a) => ({ ...s, ...a }), initialState);
  const safeSetState = useSafeDispatch(setState);
  const setUser = React.useCallback(
    (user, isAuthenticated, isLoaded) =>
      safeSetState({ user, isAuthenticated, isLoaded }),
    [safeSetState]
  );
  const setExperiences = React.useCallback(
    (experiences) => safeSetState({ experiences }),
    [safeSetState]
  );
  const setEducations = React.useCallback(
    (educations) => safeSetState({ educations }),
    [safeSetState]
  );

  const reset = React.useCallback(() => safeSetState(initialState), [
    safeSetState,
  ]);
  const getUser = React.useCallback(async () => {
    try {
      const { data, status } = await backend.get("/users/me");
      setUser(data, true, true);
    } catch (e) {
      setUser(null, false, true);
    }
  }, [setUser]);
  return {
    setUser,
    user,
    isLoaded,
    isAuthenticated,
    educations,
    experiences,
    setExperiences,
    setEducations,
    reset,
    getUser,
  };
};

export { useAsync };
