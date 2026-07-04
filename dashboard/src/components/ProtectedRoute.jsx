import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        await api.get("/user/profile");
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
