"use client"
import { ArcElement, BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Skeleton from './Skeleton';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const pieChartData1: ChartData<'pie'> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const pieChartData2: ChartData<'pie'> = {
  labels: ['Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [200, 150, 100],
      backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
    },
  ],
};

const barChartData: ChartData<'bar'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Category 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75,192,192,0.6)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
    {
      label: 'Category 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(153,102,255,0.6)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
    },
  ],
};

// Define separate options for PieChart and BarChart
const pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
};

const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
};

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.pieChartsContainer}>
        <div style={styles.pieChartWrapper}>
          <PieChart data={pieChartData1} options={pieChartOptions} />
        </div>
        <div style={styles.pieChartWrapper}>
          <PieChart data={pieChartData2} options={pieChartOptions} />
        </div>
      </div>
      <div style={styles.barChartContainer}>
        <BarChart data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    width: '94%',
    padding: '10px',
    marginTop:'80px',
    marginBottom:'20px',
    paddingLeft:'150px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  pieChartsContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  pieChartWrapper: {
    width: '45%',
    height: '280px'
  },
  barChartContainer: {
    width: '100%',
    height: '300px'
  },
};

export default Dashboard;
