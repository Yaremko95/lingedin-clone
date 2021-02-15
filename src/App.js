import React from "react";
import RouterWrapper from "./components/Router/RouterWrapper";
import AuthProvider from "./context/auth/Auth";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "./theme";
import SocketProvider from "./context/socket/SocketProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SocketProvider>
          <RouterWrapper />
        </SocketProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
