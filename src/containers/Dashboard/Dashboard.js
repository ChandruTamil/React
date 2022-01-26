import React from 'react';
import Row from "react-bootstrap/Row";
import './Dashboard.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line,Pie,Bar,PolarArea } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export default function Dashboard() {
  const labels = ['America', 'India', 'Brazil', 'France', 'UK', 'Russia'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stocks in 2020 & 2021',
      },
    },
};
  const barData = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: [70153597,39799202,24044255,16347127,15953689,11241109],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: [86011333,49046232,62309735,12627434,15391638,32744834],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const pieData = { 
    labels: ['Europe', 'United States', 'South East Asia', 'Eastern Mediterranean', 'Western Pacific', 'Africa'],
    datasets: [
      {
        label: 'Covid Cases',
        data: [132744160, 128839643, 50409535, 18365074, 14437751, 7999777],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
    
    
    return (
        <div>
           <Row>
            <h5>Covid Cases</h5>
            <div className="chartWidth chart-border">
            <Pie data={pieData} /></div>
            <div className="chartWidth chart-border-bottom ">
            <PolarArea data={pieData} /></div>
          </Row>
        <Row>
        <div className="chartWidth chart-border">
        <Line options={options} data={barData} /></div>
        <div className="chartWidth chart-border-bottom ">
        <Bar options={options} data={barData} /></div>
        </Row>
        </div>
         
    )
}