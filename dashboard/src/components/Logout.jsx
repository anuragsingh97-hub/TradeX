import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Logout.css";
import Summary from "./Summary";

import { useNavigate } from "react-router-dom";

import api from "../api/api"


function Logout() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/user/profile")
      .then((res) => {
        setUser(res.data);
        // console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await api.post(
        "/auth/logout",
        {},
      );

      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className=" btn-light btn-sty"
        onClick={() => setShowMenu(!showMenu)}
      >
        {user?.username?.charAt(0).toUpperCase() || "👤"}
      </button>

      {showMenu && (
        <div className="profile-dropdown">
          <div className="profile-info">
            <h6>{user?.username}</h6>
            <p>{user?.email}</p>
          </div>
          <button className="menu-item" onClick={handleProfile}>
            
            Profile Details
          </button>

          <button className="menu-item logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Logout;
