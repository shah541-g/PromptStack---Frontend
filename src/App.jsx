import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/authContext";
import Signup from "./Pages/SignUp";
import OnBoardingPage from "./Pages/onBoardingPage";
import { useTheme } from "./Context/themeContext.jsx";
import ModernIDEPage from "./pages/ModernIDEPage.jsx";
import DeploymentPage from "./pages/DeploymentPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import AppLayout from "./Layout/AppLayout.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

const App = () => {
  const { currentUser } = useAuth();
  const isAuthenticated = Boolean(currentUser);
  const onBoarded = Boolean(currentUser?.onboarding);
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/onBoarding" element={<OnBoardingPage />} />
        </Routes>
        <Routes>
          <Route path="/editor" element={<ModernIDEPage />} />
        </Routes>
        <Routes>
          <Route
            path="/deploy"
            element={
              <AppLayout showNavbar="true">
                <DeploymentPage />
              </AppLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/history"
            element={
              <AppLayout showNavbar="true">
                <HistoryPage />
              </AppLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/settings"
            element={
              <AppLayout showNavbar="true">
                <SettingsPage />
              </AppLayout>
            }
          />
        </Routes>

        {/* <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && onBoarded ? (
              <Dashboard />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onBoarding"} />
            )
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup/> : <Navigate to={"/"} />}
        />
         <Route
            path="/onBoarding"
            element={
              isAuthenticated ? (
                !onBoarded ? (
                  <OnBoardingPage /> 
                ) : (
                  <Navigate to={"/"} />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
      </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
