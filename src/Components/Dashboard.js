// eslint-disable-next-line
import React from 'react';
import LoggedInNav from "./LoggedInNav";
import Sidebar from './Sidebar';
import BarGraph from './barGraph';
import BudgetVarianceChart from './VarianceChart';



const Dashboard = () => {


  const testData = [
    { label: 'Metric 1', value: 25 },
    { label: 'Metric 2', value: 50 },
    { label: 'Metric 3', value: 75 },
    { label: 'Metric 4', value: 100 },
  ];

  const budgetData = [
    { month: 'January', expected: 1000, actual: 800 },
    { month: 'February', expected: 1200, actual: 1350 },
    { month: 'March', expected: 1100, actual: 900 },
    { month: 'April', expected: 1100, actual: 900 },
    { month: 'May', expected: 1100, actual: 900 },
    { month: 'June', expected: 1100, actual: 900 },
    { month: 'July', expected: 1100, actual: 1400 },
    { month: 'August', expected: 1200, actual: 1000 },
    { month: 'September', expected: 1300, actual: 900 },
    { month: 'October', expected: 1400, actual: 900 },
    
  ];

  return (
    <div>
    <LoggedInNav />
    <div className="app-container">
    <Sidebar />
    <div className="main-content">
     <h1>Welcome to Dashboard!!</h1>
     <BarGraph data={testData} />
     <BudgetVarianceChart  data={budgetData}/>
     </div>
     </div>
    </div>
  );
};


export default Dashboard;
