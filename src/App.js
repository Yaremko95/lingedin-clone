import React from "react";
import RouterWrapper from "./components/Router/RouterWrapper";
import AuthProvider from "./context/Auth";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterWrapper />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
