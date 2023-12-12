// LeadConversionGauge.js
import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './Gaugechart.css';

const LeadConversionGauge = ({ leadConversionRate, targetConversionRate }) => {
  return (
    <div className="gauge-container">
      <h2>Lead Conversion Rate Gauge</h2>
      <GaugeChart
        id="gauge-chart1"
        percent={leadConversionRate / 100}
        arcPadding={0.02}
        arcWidth={0.2}
        textColor="#333"
        needleColor="#555"
        needleBaseColor="#555"
      />
      <div className="target-line" style={{ top: `${targetConversionRate}%` }}></div>
      <div className="target-label" style={{ top: `${targetConversionRate - 2}%` }}>
        Target Conversion Rate
      </div>
    </div>
  );
};

export default LeadConversionGauge;
