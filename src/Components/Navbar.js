import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import CreateUser from './CreateUser'; // Import the CreateUser component
import './Navbar.css';

function Navbar({ user }) {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/create-user">Create User</Link></li>
              <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
