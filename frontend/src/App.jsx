import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/authContext";
import SignUp from "./Pages/SignUp";

const App = () => {
  const { currentUser } = useAuth();
  const isAuthenticated = Boolean(currentUser);
  const onBoarded = Boolean(currentUser?.onboarding);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && onBoarded ? (
              <Dashboard />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/OnBoardingPage"} />
            )
          }
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
