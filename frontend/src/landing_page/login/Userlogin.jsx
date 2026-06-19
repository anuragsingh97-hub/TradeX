import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/utils";

function Userlogin() {
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
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <form action="" onSubmit={handleSignup}>
        {/* Login Card */}
        <div
          className="bg-white shadow-sm rounded p-5"
          style={{
            width: "400px",
            maxWidth: "95%",
          }}
        >
          <div className="text-center mb-5">
            <img
              src="src\assets\logo.png"
              alt="kite"
              style={{ width: "60px" }}
            />
          </div>

          <h5
            className="text-center mb-4"
            style={{
              fontWeight: "10px",
              color: "#424242",
            }}
          >
            Login to Kite
          </h5>

          <div className="mb-4">
            <input
              type="text"
              className="form-control "
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleLogin}
            />
          </div>

          <div className="mb-4 position-relative">
            <input
              type="password"
              className="form-control form-control pe-5"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleLogin}
            />
          </div>

          <button
            className="btn w-100 text-white"
            style={{
              backgroundColor: "#ff5722",
              padding: "13px",
              fontSize: "15px",
            }}
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "#777" }}
            >
              Forgot user ID or password?
            </a>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Userlogin;
