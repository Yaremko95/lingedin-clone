import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useSocket } from "./hooks";
import { AuthContext } from "../auth/Auth";
import { socket } from "./sockets/index";

const sortHistory = (history) => {
  history.reduce();
};
export const SocketContext = createContext();

function SocketProvider({ children }) {
  const {
    setOnline,
    online,
    setChats,
    updateChats,
    chats,
    setChatOpen,
    isHistoryOpen,
    setIsHistoryOpen,
  } = useSocket();
  const { isAuthenticated } = useContext(AuthContext);

  const handleLoginChat = useCallback(() => {
    console.log("login");

    socket.emit("login");
  }, []);
  useEffect(() => {
    socket.connect();

    // if (isAuthenticated) {
    // socket.on("connect", function () {
    //   console.log("Connected");
    // });
    socket.on("conversations", (data) => {
      console.log("conversations", data);
      setChats(data);
    });

    socket.on("loggedIn", (data) => {
      console.log("loggedIn", data);
      setOnline(data);
    });
    socket.on("leave", (data) => {
      console.log("leave", data);
      setOnline(data.users);
    });

    socket.on("receiveMsg", (data) => {
      console.log("receiveMsg", data);
      updateChats(data);
    });
  }, [socket]);
  useEffect(() => {
    if (isAuthenticated) {
      handleLoginChat();
    }
  }, [isAuthenticated, handleLoginChat]);
  const value = React.useMemo(
    () => ({
      setChats,
      setOnline,
      online,
      chats,
      handleLoginChat,
      setChatOpen,
      isHistoryOpen,
      setIsHistoryOpen,
      socket,
    }),
    [
      setChats,
      setOnline,
      online,
      chats,
      handleLoginChat,
      setChatOpen,
      isHistoryOpen,
      setIsHistoryOpen,
      socket,
    ]
  );
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
