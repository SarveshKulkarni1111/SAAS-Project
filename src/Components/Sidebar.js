// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      {isOpen && (
        <div>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/revenue">Revenue Metrics</Link>
          <Link to="/customer">Customers</Link>
          <Link to="/sales">Sales Metrics</Link>
          <Link to="/marketing">Marketing Metrics</Link>
          <Link to="/quality">Quality Metrics</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
