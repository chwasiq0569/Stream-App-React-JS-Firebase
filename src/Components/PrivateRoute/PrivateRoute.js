import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log("...props: ", rest);
  console.log("...props: ", user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} {...rest} user={user} />
        ) : (
          <Redirect to={{ pathname: "/auth" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
