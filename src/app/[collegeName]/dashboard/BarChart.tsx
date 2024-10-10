import { ChartData, ChartOptions } from 'chart.js/auto';
import React from 'react';
import { Bar } from 'react-chartjs-2';


interface BarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;