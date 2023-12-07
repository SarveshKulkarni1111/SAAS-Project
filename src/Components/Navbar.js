import React from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  
  return (
      <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login" > Login</Link></li> 
              <li><Link to="/signup" > Sign Up</Link></li> 
              <li><Link to="/" > Log Out</Link></li> 

            </ul>
          </nav>
      </div>
    
  );
}

export default Navbar;
