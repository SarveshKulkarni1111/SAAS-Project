// LeadConversionRateGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import "./LeadConversion.css";

const LeadConversionRateGraph = () => {

    const data = [
        { month: 'Jan', conversionRate: 50 },
        { month: 'Feb', conversionRate: 60 },
        { month: 'Mar', conversionRate: 70 },
        { month: 'Apr', conversionRate: 80 },
        { month: 'May', conversionRate: 75 },
        { month: 'Jun', conversionRate: 85 },
      ];

  const chartData = {
    labels: data.map(entry => entry.month),
    datasets: [
      {
        label: 'Lead Conversion Rate (%)',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map(entry => entry.conversionRate),
      },
    ],
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: data.map(entry => entry.month),
          scaleLabel: {
            display: true,
            labelString: 'Month',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
          scaleLabel: {
            display: true,
            labelString: 'Conversion Rate (%)',
          },
        },
      ],
    },
  };

  return (
      <div className="container">
      <h2>Lead Conversion Rate Over Months</h2>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LeadConversionRateGraph;
