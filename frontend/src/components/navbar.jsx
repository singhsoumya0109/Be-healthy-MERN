import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Get the user object from localStorage and extract the name
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="app-name">Be Healthy</h1>
      <div className="user-info">
        <span className="user-name">👤 {userName}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
