import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth"; // Import your auth helper

const Protected = ({ children }) => {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default Protected
