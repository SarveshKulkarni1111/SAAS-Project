import React, { useState } from 'react';
import './Login.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., sending a request to a server)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
        <Navbar /> <br /><br />
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Link to="/dashboard" className='text-black'><button type="submit"onClick={handleSubmit} >Login</button></Link>
        
        
      </form>
      <p>
        Don't have an account? <Link to="/signup" className='text-black'>Signup</Link> 
      </p>
    </div>
    </div>
  );
}

export default Login;
