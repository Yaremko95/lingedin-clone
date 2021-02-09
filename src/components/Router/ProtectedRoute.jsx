import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import ReactHelmet from "../helmet/ReactHelmet";
import backend from "../../clients/backemd.client";

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

  console.log("here");
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
