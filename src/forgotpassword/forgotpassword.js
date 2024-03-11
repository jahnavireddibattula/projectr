import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaAngleLeft } from "react-icons/fa"; // Corrected import statement
import './forgotpassword.css';

function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Handle back button click
    const handleBack = () => {
        navigate('/');
    };

    const handleEmailFocus = () => {
        setIsFocused(true);
    };

    const handleEmailBlur = () => {
        if (!email) {
            setIsFocused(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendOTP = () => {
        navigate('/enter-otp'); 
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-image">
                <img className='forgotimg' src="forgotpassword.jpg" alt="" />
            </div>
            <div className="forgot-password-form">
                <span onClick={handleBack} className="back-link">
                    <FaAngleLeft className='arrowdata'/> Back
                </span>
                <h3 className='forgotheading'>Forgot Password</h3>
                {/* <p className='textdata'>Enter your registered email address. We'll send you a code<br/>to reset your password.</p>
                 */}
                   <p className='textdata'>
                   Enter your registered email address. We'll send you a code</p>
                   <p className='textdata1'>to reset your password.</p>
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className='email-input'
                        value={email}
                        onChange={handleEmailChange}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                    />
                </div>
                <button className="send-otp-button" onClick={handleSendOTP}>Send OTP</button>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
