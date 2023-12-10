import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './CreateUser.css';
const CreateUser = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    company: '',
    role: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create user in Firebase authentication
      const { email, password } = userDetails;
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Reset the form and display success message
      setUserDetails({
        fullName: '',
        email: '',
        password: '',
        company: '',
        role: '',
      });
      setSuccessMessage('User created successfully!');
      setErrorMessage('');
    } catch (error) {
      // Display error message
      setSuccessMessage('');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={userDetails.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company:
          <select
            name="company"
            value={userDetails.company}
            onChange={handleChange}
            required
          >
            <option value="">Select Company</option>
            <option value="intellore">Intellore</option>
            <option value="mavio">Mavio</option>
          </select>
        </label>
        <label>
          Role:
          <select
            name="role"
            value={userDetails.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="teamLeader">Team Leader</option>
            <option value="teamMember">Team Member</option>
            <option value="intern">Intern</option>
          </select>
        </label>

        <button type="submit">Create User</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreateUser;
