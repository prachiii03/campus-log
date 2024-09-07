// components/PieChart.tsx
import { ChartData, ChartOptions } from 'chart.js/auto';
import React from 'react';
import { Pie } from 'react-chartjs-2';

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
