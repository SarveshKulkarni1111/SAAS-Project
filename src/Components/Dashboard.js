// eslint-disable-next-line
import React from 'react';
import Sidebar from './Sidebar';
import BarGraph from './barGraph';
import BudgetVarianceChart from './VarianceChart';
import LeadConversionRateGraph from './LeadConversion';
import LeadConversionGauge from './Gaugechart';
import "./Dashboard.css";
// import useAuthorization from "./userAuthorization";


const Dashboard = () => {

  // const { isAuthorized } = useAuthorization(['admin']);

  // if (!isAuthorized) {
  //   return <div>
  //   You are not authorized to view this content.
  //   </div>;
  // }

  

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

  const leadConversionRate = 65;
  const targetConversionRate = 65;

  return (
    <div>
    <div className="app-container">
    <Sidebar />
    <div className="main-content">
 
  <div className="graph-container1">
    <LeadConversionGauge
      className="lead-conversion-gauge"
      leadConversionRate={leadConversionRate}
      targetConversionRate={targetConversionRate}
    />
  </div>
  <div className="graph-container2">
    <LeadConversionRateGraph className="lead-conversion-rate-graph" />
  </div>
  <div className="graph-container">
    <BudgetVarianceChart className="budget-variance-chart" data={budgetData} />
  </div>
</div>
     </div>
    </div>
  );
};


export default Dashboard;