import React from "react";
import authData from "../authData";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isActivated } = authData;

  if (!isAuthenticated && !isActivated) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
