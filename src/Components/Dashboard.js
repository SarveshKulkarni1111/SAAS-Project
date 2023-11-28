import React from 'react';
import LoggedInNav from "./LoggedInNav";
import Sidebar from './Sidebar';


const Dashboard = () => {
  return (
    <div>
    <LoggedInNav />
    <div className="app-container">
    <Sidebar />
    <div className="main-content">
     <h1>Welcome to Dashboard!!</h1>
     </div>
     </div>
    </div>
  );
};


export default Dashboard;
