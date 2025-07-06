import React from "react";
import { useAuth } from "../Context/authContext";
import { logoutUser } from "../API/auth";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Components/DashboardComponents/HeroSection";
import FeaturesSection from "../Components/DashboardComponents/FeaturesSection";
import AudienceSection from "../Components/DashboardComponents/AudienceSection";
import WaitlistSection from "../Components/DashboardComponents/WaitlistSection";
import FooterSection from "../Components/DashboardComponents/FooterSection";
import Navbar from "../Components/DashboardComponents/Navbar";

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
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <AudienceSection/>
      <WaitlistSection/>
      <FooterSection/>
    </div>
  );
};

export default Dashboard;
