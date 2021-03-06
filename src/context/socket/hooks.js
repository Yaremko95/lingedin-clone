import React, { useCallback } from "react";
import produce from "immer";
const useSafeDispatch = (dispatch) =>
  React.useCallback((...args) => dispatch(...args), [dispatch]);
const initialState = {
  online: [],
  // history: [],
  chats: {},
  isHistoryOpen: true,
  openedChats: [],
};

const useSocket = () => {
  const [
    { online, chats, isHistoryOpen, openedChats },
    setState,
  ] = React.useReducer((s, a) => ({ ...s, ...a }), initialState);
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

  const setChatOpen = (id) =>
    safeSetState({ openedChats: [...openedChats, id] });

  const updateChats = (msg) => {
    console.log({ msg });

    const chatId = msg.conversationId;
    const chat = chats[chatId];
    console.log({ chat, chats });

    if (chat) {
      safeSetState({
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messages: [...chats[chatId].messages, msg],
          },
        },
      });
    } else {
      console.log("no");
    }
  };

  return {
    setOnline,
    online,
    setChats,
    updateChats,
    openedChats,
    chats,
    setChatOpen,
    isHistoryOpen,
    setIsHistoryOpen,
  };
};

export { useSocket };
