import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "", // Added email for registration
  });
  const { username, password, email } = formData; // Destructure formData
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle successful registration
  const handleRegisterSuccess = (data) => {
    // Store user data and token in localStorage
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token); // Assuming API returns a token

    // Navigate to dashboard or another protected route after registration
    navigate("/");
  };

  // Submit registration data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting registration form");

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }), // Send username, password, and email
      });

      const data = await response.json();

      if (response.ok) {
        handleRegisterSuccess(data); // Handle success
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration. Please try again.");
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
          Email:
          <input
            type="email"
            name="email"
            value={email}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
