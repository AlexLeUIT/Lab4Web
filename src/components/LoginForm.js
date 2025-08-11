import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '30px',
    paddingRight: '45px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.9em',
    marginBottom: '10px',
  };

  const successStyle = {
    color: 'green',
    fontSize: '1em',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  };

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      setEmailError('Email must contain "@" symbol');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError && email && password) {
      setSuccessMessage('Login successful!');
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          style={inputStyle}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {emailError && <p style={errorStyle}>{emailError}</p>}

        {/* Password Field */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          style={inputStyle}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        {passwordError && <p style={errorStyle}>{passwordError}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          style={
            emailError || passwordError || !email || !password
              ? disabledButtonStyle
              : buttonStyle
          }
          disabled={emailError || passwordError || !email || !password}
        >
          Login
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <p style={successStyle}>{successMessage}</p>}
    </div>
  );
}

export default LoginForm;
