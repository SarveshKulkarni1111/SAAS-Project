import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (!values.email || !values.pass) {
      setErrorMsg('Fill in all fields');
      return;
    }

    setErrorMsg('');

    setSubmitButtonDisabled(true);

    try {
      await signInWithEmailAndPassword(auth, values.email, values.pass);
      setSubmitButtonDisabled(false);
      navigate('/dashboard');
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.error('ERROR:', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmission}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={values.pass}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        </div>
        <b>{errorMsg}</b>
        <button disabled={submitButtonDisabled} type="submit">
          Login
        </button>
      </form>
      <h3>
        Don't have an account?{' '}
        <Link to="/signup" className="text-black">
          Signup
        </Link>
      </h3>
    </div>
  );
}

export default Login;
