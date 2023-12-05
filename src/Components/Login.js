import React, { useState } from 'react';
import './Login.css'
import Navbar from './Navbar';
import { Link, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    
    email: "",
    pass: "",
  });
  
  const[errorMsg, setErrorMsg]= useState("");
  const[submitButtonDisabled, setSubmitButtonDisabled]=useState(false);
  
  const handleSubmission =() => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false);
      
      navigate('/dashboard');
      
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.log("ERROR:",err)});

  };

  return (
    <div>
        <Navbar /> <br /><br />
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            
            onChange={(event)=>
            setValues((prev)=>({...prev, email:event.target.value}))}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            
            onChange={(event)=>
            setValues((prev)=>({...prev, pass:event.target.value}))}
          />
        </div>
        <b>{errorMsg}</b>
        <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>        
        
      </form>
      <p>
        Don't have an account? <Link to="/signup" className='text-black'>Signup</Link> 
      </p>
    </div>
    </div>
  );
}

export default Login;
