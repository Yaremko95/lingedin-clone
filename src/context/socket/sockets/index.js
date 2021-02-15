import io from "socket.io-client";
const accessToken = localStorage.getItem("accessToken");
export const socket = io("http://localhost:3004/", {
  transports: ["websocket"],
  query: `accessToken=${accessToken}`,
  reconnection: Infinity, // whether to reconnect automatically
});
