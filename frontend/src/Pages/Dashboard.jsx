import React from "react";
import { useAuth } from "../Context/authContext";
import { logoutUser } from "../API/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();         // Firebase logout
    setCurrentUser(null);       // Clear from context
    navigate("/login");         // Redirect to login
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} className="btn btn-error mt-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
