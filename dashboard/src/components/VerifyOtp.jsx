import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import api from "../api/api"


function VerifyOtp() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  if (!state) {
    return <h2>Please enter email first</h2>;
  }
  const verifyOtp = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/verify-otp", {
      email: state.email,
      otp,
    });

    if (res.data.success) {
      navigate("/reset-password", {
        state: { email: state.email },
      });
    }
  };

  return (
    <form onSubmit={verifyOtp}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button>Verify OTP</button>
    </form>
  );
}

export default VerifyOtp;
