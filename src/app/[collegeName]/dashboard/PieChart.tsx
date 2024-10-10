import { ChartData, ChartOptions } from 'chart.js/auto';
import React from 'react';
import { Pie } from 'react-chartjs-2';

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
}


const PieChart: React.FC<PieChartProps> = ({ data, options }) => {

  const pieChartData: ChartData<'pie'> = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: "current semester attendence",
        data: [365400, 55550],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };
  return <Pie data={data} options={options} />;
};

export default PieChart;