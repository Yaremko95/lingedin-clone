import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import routes from "../../routes";
import uniqid from "uniqid";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";
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
