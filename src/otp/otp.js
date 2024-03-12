import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaAngleLeft } from "react-icons/fa"; 
import './otp.css';

function EnterOTPPage() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '']); // Array to store OTP digits
    const [error, setError] = useState(''); // State to manage error messages
    const inputRefs = useRef([]); // Ref to store references to input fields

    // Handle back button click
    const handleBack = () => {
        navigate('/forgot-password');
    };

    // Initialize inputRefs with references to input fields
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, otp.length);
    }, [otp]);

   

    // Handle OTP input change for each digit
const handleOtpChange = (index, value) => {
    // Validate input to allow only numbers
    if (!isNaN(value) && value !== '') {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        // Shift focus to the next input field if available
        if (index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    } else if (value === '' && index > 0) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
    } else if (value === '' && index === 0) {
        // Clear the current input field if it's the first box
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
    }
};



    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate OTP length
        if (otp.join('').length !== 5) {
            setError('Please enter a valid OTP.');
            return;
        }
        // Add your logic to verify OTP and navigate accordingly
        // For demonstration purposes, let's assume OTP is '12345'
        if (otp.join('').length === 5) {
            // Navigate to the next page upon successful verification
            navigate('/dashboard');
        } else {
            setError('Incorrect OTP. Please try again.');
        }
    };

    return (
        <div className="otp-container1">
            <div className="left-side">
                <img className='forgotimg' src="enterotp.jpg" alt="" />
            </div>
            <div className="right-side">
                <span onClick={handleBack} className="back-link">
                    <FaAngleLeft className='arrowdata'/> Back
                </span>
                <h2 className='otpheading'>Enter OTP</h2>
                {/* <p className='otptextdata'>We have shared a code to your registered email address<br/>
                 robertallen@example.com</p> */}
                 <div className="otptextdata">
    <span>We have shared a code to your registered email address</span>
    <span>robertallen@example.com</span>
</div>
                <form onSubmit={handleSubmit}>
                    <div className="otp-input-container">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                className='otpbox'
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                ref={(input) => inputRefs.current.push(input)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        handleOtpChange(index, '');
                                    }
                                }}
                            />
                        ))}
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="buttons-container">
                        <button type="submit" className="verify-button">Verify</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EnterOTPPage;
