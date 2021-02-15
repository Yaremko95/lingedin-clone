import React from "react";
const useSafeDispatch = (dispatch) =>
  React.useCallback((...args) => dispatch(...args), [dispatch]);
const initialState = {
  online: [],
  history: [],
};

const useSocket = () => {
  const [{ online, history }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initialState
  );
  const safeSetState = useSafeDispatch(setState);
  const setOnline = React.useCallback((online) => safeSetState({ online }), [
    safeSetState,
  ]);
  const setHistory = React.useCallback((history) => safeSetState({ history }), [
    safeSetState,
  ]);
  const updateHistory = React.useCallback(
    (msg) => safeSetState({ history: [...history, msg] }),
    [safeSetState]
  );
  return {
    setHistory,
    setOnline,
    online,
    history,
    updateHistory,
  };
};

export { useSocket };
