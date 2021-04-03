import React from "react";
import RouterWrapper from "./components/Router/RouterWrapper";
import AuthProvider from "./context/auth/Auth";
import "./App.css";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "./theme";
import SocketProvider from "./context/socket/SocketProvider";
import ChatPortal from "./components/Portal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SocketProvider>
          <RouterWrapper />
          <ChatPortal />
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
