import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/utils";
import Signup from "../signup/Signup";
function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return notifyError("Please fill in all fields");
    }
    try {
      const url = "http://localhost:3002/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        notifySuccess(data.message || "Login successful!");

        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 2000);
      } else {
        notifyError(data.message);
      }
    } catch (error) {
      notifyError(error.message || "An error occurred during login");
    }
  };

  return (
    <div className="signup mt-5 mb-5 container bg-light p-5 rounded">
      <h3>Login Page</h3>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="email"
            value={formData.email}
            onChange={handleLogin}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            name="password"
            value={formData.password}
            onChange={handleLogin}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <ToastContainer />
      <p className="mt-3">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
export default Login;
