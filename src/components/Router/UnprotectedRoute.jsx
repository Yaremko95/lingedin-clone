import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth/Auth";
import ReactHelmet from "../helmet/ReactHelmet";

const UnprotectedRoute = ({
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
        isAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
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
export default UnprotectedRoute;
