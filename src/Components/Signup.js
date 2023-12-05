import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Signup.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const [values, setValues] = useState({
    name:"",
    email: "",
    pass: "",
  });
  
  const[errorMsg, setErrorMsg]= useState("");
  
  const handleSubmission =() => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>console.log("ERROR:",err));

  };

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
            setValues((prev)=>({ ...prev, pass: event.target.value}))
          }
            
          />
          <b>{errorMsg}</b>
        <button type="button" onClick={handleSubmission}>Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login" className='text-black'>Login</Link> 
      </p>
      </div>
    </div>
  );
}

export default Signup;