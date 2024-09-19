import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;