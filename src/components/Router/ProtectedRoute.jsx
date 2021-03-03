import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth/Auth";
import ReactHelmet from "../helmet/ReactHelmet";
import backend from "../../clients/backemd.client";
import ChatPortal from "../Portal";

const ProtectedRoute = ({
  component: Component,
  exact,
  path,
  layout: Layout,
  description,
  title,
  ...rest
}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <ReactHelmet description={description} title={title}>
            <Layout {...props}>
              <Component {...props} />
            </Layout>
          </ReactHelmet>
        )
      }
    />
  );
};
export default ProtectedRoute;
