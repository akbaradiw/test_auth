import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData; // Destructure formData
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  // Store user data to localStorage
  // const storeUserData = (data) => {
  //   localStorage.setItem("user", JSON.stringify(data));
  //   localStorage.setItem("token", data.token); // Assuming API response includes a token
  // };

  // Handle successful login
  const handleLoginSuccess = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);
    navigate("/"); // Navigate to dashboard or another protected route
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log ("submitting form")

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        handleLoginSuccess(data); // Handle success
        
      } else {
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default LoginForm;
