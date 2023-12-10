import React from 'react';
import Sidebar from './Sidebar';
import ROIChart from './roi';
const Marketing = () => {
  return (
    <div className='app-container'>
    <Sidebar />
    <div className='main-content'>
    <div className="revenue-card">
      <h2>Conversion rate</h2>
      <p>48%</p>
    </div>
    <ROIChart />
    </div>
    </div>
  );
};

export default Marketing;
