// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoginPage from './login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import ForgotPasswordPage from './forgotpassword/forgotpassword';
import EnterOTPPage from './otp/otp';

function App() {
  return (
    <div className="App">
       <Router> {/* Wrap all your routes with the Router component */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp-password" element={<EnterOTPPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
