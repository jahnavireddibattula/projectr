import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showEmailValidationMessage, setShowEmailValidationMessage] = useState(false);
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Hide the validation message when user starts typing in the email field
    setShowEmailValidationMessage(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

   // Handle forgot password click
   const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the ForgotPasswordPage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation for email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setShowEmailValidationMessage(true);
    } else {
      // Navigate to the dashboard only if the email format is correct
      navigate('/dashboard');
    }
  };

  

  return (
    <div className="login-container">
       <div className="image-container">
        <div>
          <img className='hrmainimage' src="hrmainimage.jpg" alt="" />
        </div>
      </div>
      <div className="form-container">
        {/* <h1 className='h1heading'>HRXcel</h1> */}
        <div>
          <img className='HRheading' src="HRXcelimage.jpg" alt="" />
          <h1 className='h1heading'>HRXcel</h1>
        </div>
        <h4 className='h2heading'>Welcome
        <img className='handwaveimg' src="handwave.jpg" alt="" />
        </h4>
        <p>Please login here</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className='emailinput'
              value={email}
              onChange={handleEmailChange}
            />
            {showEmailValidationMessage && (
              <div className="text-danger">Please enter a valid email address.</div>
            )}
          </div>
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className='passwordinput'
              value={password}
              onChange={handlePasswordChange}
            />
            <i
              className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}
              onClick={handleShowPasswordToggle}
            ></i>
          </div>
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeToggle}
              className='rememberbox'
            />
            <label htmlFor="rememberMe"
            className='remembertext'>Remember Me</label>
             <span className='forgottext' onClick={handleForgotPassword}>Forgot Password?</span>
          </div>
          <button className='loginbutton' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
  
}

export default LoginPage;
