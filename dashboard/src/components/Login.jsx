import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyError, notifySuccess } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return notifyError("Please fill in all fields");
    }

    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", formData);

      console.log(data);

      if (data.success) {
        notifySuccess(data.message || "Login successful!");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        notifyError(data.message);
      }
    } catch (error) {
      notifyError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during login",
      );
    } finally {
      setLoading(false);
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
            <img src="\logo.png" alt="kite" style={{ width: "60px" }} />
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
            type="submit"
            disabled={loading}
            className="btn w-100 text-white d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: loading ? "#ff8a65" : "#ff5722",
              padding: "13px",
              fontSize: "15px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading && (
              <div
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></div>
            )}

            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-4">
            <p
              style={{ color: "#387ed1", cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </p>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
