import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ redirectTo, component , isAuth, role }) => {
  return isAuth && role ?  component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;