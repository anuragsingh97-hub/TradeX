

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Logout.css";
import Summary from "./Summary";

function Logout() {
  const [showMenu, setShowMenu] = useState(false);
   const [user, setUser] = useState(null);

    useEffect(() => {
    axios
      .get("http://localhost:3002/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        console.log(rea.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );

      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.log(error);
    }
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
          <button className="menu-item">
            Profile Details
          </button>

          <button
            className="menu-item logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>

  );
}

export default Logout;