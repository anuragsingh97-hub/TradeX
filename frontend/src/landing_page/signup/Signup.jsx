import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/utils";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.mobile ||
      !formData.dob ||
      !formData.gender ||
      !formData.password
    ) {
      return notifyError("Please fill in all fields");
    }

    try {
      const response = await fetch("http://localhost:3002/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        notifySuccess("Signup successful! Please login.");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else if (data.error) {
        notifyError(
          data.error.details?.[0]?.message || "Signup failed. Please try again."
        );
      } else {
        notifyError(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      notifyError(error.message || "An error occurred during signup");
    }
  };

  return (
    <div className="signup mt-5 mb-5 container bg-light p-5 rounded">
      <h3>Signup</h3>

      <form className="signup-form" onSubmit={handleSignup}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoFocus
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="99361*****"
          />
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button className="btn btn-primary w-100">
          Create Account
        </button>
      </form>

      <ToastContainer />

      <p className="mt-3 text-center">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;