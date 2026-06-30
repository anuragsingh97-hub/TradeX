import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import { useLocation, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/auth/send-otp", { email });

      if (res.data.success) {
        console.log("otp send on gmail");
        setShowOtpSection(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/auth/verify-otp", {
        email,
        otp,
      });
      if (res.data.success) {
        alert("OTP Verified Successfully");
        navigate("/reset-password", {
          state: { email },
        });
      } else {
        alert("Wrong OTP");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>

        <form onSubmit={sendOtp}>
          <input
            type="email"
            placeholder="Enter Registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn-send">Send OTP</button>
        </form>

        {showOtpSection && (
          <div className="otp-section">
            <h3>Verify OTP</h3>

            <form onSubmit={verifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button className="btn-verify">Verify OTP</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
