import React from "react";
import authData from "../authData";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const { isAuthenticated, isActivated } = authData;

  if (isAuthenticated && isActivated) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }
  return children;
};

export default PublicRoute;
