import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useSocket } from "./hooks";
import { AuthContext } from "../auth/Auth";
import { socket } from "./sockets/index";
export const SocketContext = createContext();
function SocketProvider({ children }) {
  const { setHistory, setOnline, online, history, updateHistory } = useSocket();
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
    socket.on("history", (data) => {
      console.log("history", data);
    });

    socket.on("loggedIn", (data) => {
      console.log("loggedIn", data);
      setOnline(data.users);
    });
    socket.on("leave", (data) => {
      console.log("leave", data);
      setOnline(data.users);
    });

    socket.on("receiveMsg", (data) => {
      console.log("receiveMsg", data);
      updateHistory(data);
    });
  }, [socket]);
  useEffect(() => {
    if (isAuthenticated) {
      handleLoginChat();
    }
  }, [isAuthenticated, handleLoginChat]);
  const value = React.useMemo(
    () => ({ setHistory, setOnline, online, history, handleLoginChat }),
    [setHistory, setOnline, online, history, handleLoginChat]
  );
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
