import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import routes from "../../routes";
import uniqid from "uniqid";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";
import { SocketContext } from "../../context/socket/SocketProvider";
import { socket } from "../../context/socket/sockets";
function RouterWrapper(props) {
  return (
    <Router>
      <Switch>
        {routes.map((route) =>
          route.isProtected ? (
            <ProtectedRoute {...route} key={uniqid()} />
          ) : (
            <UnprotectedRoute {...route} key={uniqid()} />
          )
        )}
      </Switch>
    </Router>
  );
}

export default RouterWrapper;
