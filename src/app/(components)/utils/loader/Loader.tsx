import React from 'react';
import './Loader.css'
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export default Loader;
