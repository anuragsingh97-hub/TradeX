import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ResetPassword.css";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    return <h2>Please verify OTP first</h2>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const res = await axios.post("http://localhost:3002/auth/reset-password", {
      email: state.email,
      password,
    });

    if (res.data.success) {
      alert("Password Updated");
      navigate("/login");
    }
  };

  return (
  <div className="reset-container">
    <div className="reset-card">
      <h2>Reset Password</h2>
      <p>Create a strong password for your account</p>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);

            if (
              password &&
              e.target.value &&
              password !== e.target.value
            ) {
              setError("Passwords do not match");
            } else {
              setError("");
            }
          }}
        />

        {confirmPassword &&
          password === confirmPassword && (
            <p className="success-message">
              Passwords match ✓
            </p>
          )}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button className="reset-btn">
          Update Password
        </button>
      </form>
    </div>
  </div>
);
}

export default ResetPassword;
