import React from "react";
import produce from "immer";
const useSafeDispatch = (dispatch) =>
  React.useCallback((...args) => dispatch(...args), [dispatch]);
const initialState = {
  online: [],
  // history: [],
  chats: {},
  isHistoryOpen: true,
};

const useSocket = () => {
  const [{ online, chats, isHistoryOpen }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initialState
  );
  const safeSetState = useSafeDispatch(setState);
  const setOnline = React.useCallback((online) => safeSetState({ online }), [
    safeSetState,
  ]);
  const setIsHistoryOpen = React.useCallback(
    (isOpen) =>
      safeSetState({
        isHistoryOpen: isOpen,
      }),
    [safeSetState]
  );
  const setChats = React.useCallback(
    (chats) =>
      safeSetState({
        chats: produce(chats, (draftState) => {
          Object.keys(chats).forEach((chat) => {
            draftState[chat] = { ...chats[chat][0] };
            if (draftState[chat]) {
              draftState[chat].isOpen = false;
            }
          });
        }),
      }),
    [safeSetState]
  );
  // const setHistory = React.useCallback((history) => safeSetState({ history }), [
  //   safeSetState,
  // ]);
  const setChatOpen = (id) =>
    safeSetState({
      chats: {
        ...chats,
        [id.toString()]: { ...chats[id.toString()], isOpen: true },
      },
      // chats: produce(chats, (draftState) => {
      //   if (draftState[id.toString()]) {
      //     draftState[id.toString()].isOpen = true;
      //   }
      // }),
    });

  const updateChats = (msg) =>
    safeSetState(
      chats[msg.conversationId.toString()]
        ? {
            chats: {
              ...chats,
              [msg.conversationId]: {
                ...chats[msg.conversationId.toString()],
                messages: [
                  ...chats[msg.conversationId.toString()].messages,
                  msg,
                ],
              },
            },
          }
        : // ? {
          //     chats: produce(chats, (draftState) => {
          //       draftState[msg.conversationId.toString()].messages.push(msg);
          //       draftState[msg.conversationId.toString()].isOpen = false;
          //     }),
          //   }
          {
            chats: produce(chats, (draftState) => {
              draftState[msg.conversationId] = {
                messages: [],
                isOpen: false,
              };
            }),
          }
    );

  return {
    setOnline,
    online,
    setChats,
    updateChats,
    chats,
    setChatOpen,
    isHistoryOpen,
    setIsHistoryOpen,
  };
};

export { useSocket };
