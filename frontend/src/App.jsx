import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/authContext";
import Signup from "./Pages/SignUp";
import OnBoardingPage from "./Pages/onBoardingPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
