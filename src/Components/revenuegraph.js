// LeadConversionRateGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import "./RevenueGraph.css";

const RevenueGraph = () => {

    const data = [
        { month: 'Jan', conversionRate: 10 },
        { month: 'Feb', conversionRate: 20 },
        { month: 'Mar', conversionRate: 22 },
        { month: 'Apr', conversionRate: 15 },
        { month: 'May', conversionRate: 12 },
        { month: 'Jun', conversionRate: 12 },
        { month: 'Jul', conversionRate: 20 },
        { month: 'Aug', conversionRate: 20 },
        { month: 'Sept', conversionRate: 20 },
        { month: 'Oct', conversionRate: 35 },
        { month: 'Nov', conversionRate: 36 },
        { month: 'Dec', conversionRate: 40 },
      ];

  const chartData = {
    labels: data.map(entry => entry.month),
    datasets: [
      {
        label: 'Revenue growth (%)',
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
      <div className="container1">
      <h2>Revenue Growth</h2>
      <div className="chart-container1">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RevenueGraph;
