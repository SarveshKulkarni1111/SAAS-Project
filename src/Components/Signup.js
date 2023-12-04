import React, { useState } from 'react';
import Navbar from './Navbar';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [values, setValues] = useState({
    name:"",
    email: "",
    password: "",
  });
  

  const handleSubmission =() => {
    console.log(values);
  }

  return (
    <div>
        <Navbar /><br /><br />
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(event)=>
            setValues((prev)=>({ ...prev, name: event.target.value}))
          }
            
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(event)=>
            setValues((prev)=>({ ...prev, email: event.target.value}))
          }
            
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event)=>
            setValues((prev)=>({ ...prev, password: event.target.value}))
          }
            
          />
        </div>
        <button onClick={handleSubmission}> Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login" className='text-black'>Login</Link> 
      </p>
      </div>
    </div>
  );
}

export default Signup;