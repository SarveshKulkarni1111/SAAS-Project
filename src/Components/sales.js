import React from 'react';
import Sidebar from './Sidebar';
const Sales = () => {
  return (
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
    <div className="revenue-card">
      <h2>Total Sales</h2>
      <p>600000</p>
    </div>
    </div>
    </div>
  );
};

export default Sales;
