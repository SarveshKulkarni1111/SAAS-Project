// Signup.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.pass) {
      setErrorMsg('Fill in all fields');
      return;
    }

    // Password validation (minimum length)
    if (values.pass.length < 6) {
      setErrorMsg('Password must be at least 6 characters long');
      return;
    }

    setErrorMsg('');
    setSubmitButtonDisabled(true);
    setLoading(true); // Set loading state to true

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );

      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });

      setSubmitButtonDisabled(false);
      setLoading(false); // Set loading state to false
      navigate('/');
      console.log(res);
    } catch (err) {
      setSubmitButtonDisabled(false);
      setLoading(false); // Set loading state to false
      setErrorMsg(err.message);
      console.error('ERROR:', err);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmission}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
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
          <b>{errorMsg}</b>
          <button type="submit" disabled={submitButtonDisabled}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {loading && <div className="loading-bar"></div>}
        </div>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/login" className="text-black">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
