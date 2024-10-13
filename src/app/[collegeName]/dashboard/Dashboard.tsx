// "use client"
// import { ArcElement, BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
// import React, { useEffect, useState } from 'react';
// import BarChart from './BarChart';
// import PieChart from './PieChart';
// import Skeleton from './Skeleton';

// Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const pieChartData1: ChartData<'pie'> = {
//   labels: ['Red', 'Blue', 'Yellow'],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

// const pieChartData2: ChartData<'pie'> = {
//   labels: ['Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: 'Dataset 2',
//       data: [200, 150, 100],
//       backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
//     },
//   ],
// };

// const barChartData: ChartData<'bar'> = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Category 1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(75,192,192,0.6)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//     },
//     {
//       label: 'Category 2',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       backgroundColor: 'rgba(153,102,255,0.6)',
//       borderColor: 'rgba(153,102,255,1)',
//       borderWidth: 1,
//     },
//   ],
// };

// const pieChartOptions: ChartOptions<'pie'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const barChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const Dashboard: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Skeleton />;
//   }

//   return (
//     <div style={styles.dashboardContainer}>
//       <div style={styles.pieChartsContainer}>
//         <div style={styles.pieChartWrapper}>
//           <PieChart data={pieChartData1} options={pieChartOptions} />
//         </div>
//         <div style={styles.pieChartWrapper}>
//           <PieChart data={pieChartData2} options={pieChartOptions} />
//         </div>
//       </div>
//       <div style={styles.barChartContainer}>
//         <BarChart data={barChartData} options={barChartOptions} />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     width: '94%',
//     padding: '10px',
//     marginTop:'80px',
//     marginBottom:'20px',
//     paddingLeft:'150px',
//     backgroundColor: '#f8f9fa',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   pieChartsContainer: {
//     display: 'flex',
//     justifyContent: 'space-between'
//   },
//   pieChartWrapper: {
//     width: '45%',
//     height: '280px'
//   },
//   barChartContainer: {
//     width: '100%',
//     height: '300px'
//   },
// };

// export default Dashboard;

// "use client";
// import { ArcElement, BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
// import React, { useEffect, useState } from 'react';
// import BarChart from './BarChart';
// import PieChart from './PieChart';
// import Skeleton from './DashboardSkeleton';
// import './Dashboard.css';

// Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const pieChartData1: ChartData<'pie'> = {
//   labels: ['Red', 'Blue'],
//   datasets: [

//   ],
// };

// const pieChartData2: ChartData<'pie'> = {
//   labels: ['Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: 'Dataset 2',
//       data: [200, 150, 100],
//       backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
//     },
//   ],
// };

// const barChartData: ChartData<'bar'> = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Category 1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(75,192,192,0.6)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//     },
//     {
//       label: 'Category 2',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       backgroundColor: 'rgba(153,102,255,0.6)',
//       borderColor: 'rgba(153,102,255,1)',
//       borderWidth: 1,
//     },
//   ],
// };

// const pieChartOptions: ChartOptions<'pie'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const barChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const Dashboard: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   const userSession = JSON.parse(sessionStorage.getItem("userSession") || '{}');
//   console.log(userSession);

//   const getCurrentSemesterAttendance = async () => {
//     const studentId = userSession.id;
//     const semester = userSession.current_semester;

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/student/${studentId}/get-current-semester-attendance?semester=${semester}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         // If the response is not ok, handle the error (e.g., 404, 500)
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const data = await response.json(); // Parse the JSON response
//       console.log("Attendance Data: ", data); // Handle the data (for example, log it or update state)
//       pieChartData1.datasets.push({

//           label: "current semester attendence",
//           data: [data.absentLectureCount, data.absentLectureCount+data.presentLectureCount],
//           backgroundColor: ['#FF6384', '#36A2EB'],

//       })
//     } catch (error) {
//       console.error("Failed to fetch attendance:", error);
//       // You can handle the error further, like showing a message to the user
//     }
//   };
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     getCurrentSemesterAttendance();
//   }, [])

//   if (loading) {
//     return <Skeleton />;
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="pie-charts-container">
//         <div className="pie-chart-wrapper">
//           <PieChart data={pieChartData1} options={pieChartOptions} />
//         </div>
//         <div className="pie-chart-wrapper">
//           <PieChart data={pieChartData2} options={pieChartOptions} />
//         </div>
//       </div>
//       <div className="bar-chart-container">
//         <BarChart data={barChartData} options={barChartOptions} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// "use client";
// import { ArcElement, BarElement, CategoryScale, Chart, ChartData, ChartOptions, Legend, LinearScale, Tooltip } from 'chart.js';
// import React, { useEffect, useState } from 'react';
// import BarChart from './BarChart';
// import PieChart from './PieChart';
// import Skeleton from './DashboardSkeleton';
// import './Dashboard.css';
// import { ToastContainer, toast } from 'react-toastify';

//   import 'react-toastify/dist/ReactToastify.css';

// Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const initialPieChartData1: ChartData<'pie'> = {
//   labels: ['Absent', 'Present'],
//   datasets: [
//     {
//       label: 'Current Semester Attendance',
//       data: [0, 0], // Initial values to be updated after fetching data
//       backgroundColor: ['#FF6384', '#36A2EB'],
//     },
//   ],
// };

// const pieChartData2: ChartData<'pie'> = {
//   labels: ['Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: 'Dataset 2',
//       data: [200, 150, 100],
//       backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
//     },
//   ],
// };

// const barChartData: ChartData<'bar'> = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Category 1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(75,192,192,0.6)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//     },
//     {
//       label: 'Category 2',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       backgroundColor: 'rgba(153,102,255,0.6)',
//       borderColor: 'rgba(153,102,255,1)',
//       borderWidth: 1,
//     },
//   ],
// };

// const pieChartOptions: ChartOptions<'pie'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const barChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const Dashboard: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [pieChartData1, setPieChartData1] = useState<ChartData<'pie'>>(initialPieChartData1);
//   const notify = () => toast("Wow so easy !");

//   const userSession = JSON.parse(sessionStorage.getItem("userSession") || '{}');
//   console.log(userSession);

//   const getCurrentSemesterAttendance = async () => {
//     const studentId = userSession.id;
//     const semester = userSession.current_semester;

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/student/${studentId}/get-current-semester-attendance?semester=${semester}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       notify();

//       if (!response.ok) {
//         // If the response is not ok, handle the error (e.g., 404, 500)
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const data = await response.json(); // Parse the JSON response
//       console.log("Attendance Data: ", data); // Handle the data (for example, log it or update state)

//       // Update pie chart data with new attendance values
//       setPieChartData1({
//         labels: ['Absent', 'Present'],
//         datasets: [
//           {
//             label: 'Current Semester Attendance',
//             data: [data.absentLectureCount, data.presentLectureCount],
//             backgroundColor: ['#FF6384', '#36A2EB'],
//           },
//         ],
//       });
//     } catch (error) {
//       console.error("Failed to fetch attendance:", error);
//       // You can handle the error further, like showing a message to the user
//     }
//   };

//   const getYearwiseAttendence = async ()=> {
//     const studentId = userSession.id;

//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/student/${studentId}/get-attendence-yearWise`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//     } catch (error) {

//     }
//   }

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     getCurrentSemesterAttendance();
//   }, []);

//   if (loading) {
//     return <Skeleton />;
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="pie-charts-container">
//         <div className="pie-chart-wrapper">
//           <PieChart data={pieChartData1} options={pieChartOptions} />
//         </div>
//         <div className="pie-chart-wrapper">
//           <PieChart data={pieChartData2} options={pieChartOptions} />
//         </div>
//       </div>
//       <div className="bar-chart-container">
//         <BarChart data={barChartData} options={barChartOptions} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Skeleton from "./DashboardSkeleton";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useCollege } from "@/context/college-name-provider/CollegeNameProvider";
import studentProtectRoute from "@/app/(components)/utils/protect-route/StudentProtectRoute";

Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const initialPieChartData1: ChartData<"pie"> = {
  labels: ["Absent", "Present"],
  datasets: [
    {
      label: "Current Semester Attendance",
      data: [0, 0], // Initial values to be updated after fetching data
      backgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

const initialBarChartData: ChartData<"bar"> = {
  labels: ["First Year", "Second Year", "Third Year", "Final Year"],
  datasets: [
    {
      label: "Total Lectures",
      data: [0, 0, 0, 0],
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 5,
    },
    {
      label: "Attended lectures",
      data: [0, 0, 0, 0],
      backgroundColor: "rgba(153,102,255,0.6)",
      borderColor: "rgba(153,102,255,1)",
      borderWidth: 1,
    },
  ],
};

const pieChartData2: ChartData<"pie"> = {
  labels: ["Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Dataset 2",
      data: [200, 150, 100],
      backgroundColor: ["#4BC0C0", "#9966FF", "#FF9F40"],
    },
  ],
};

const barChartData: ChartData<"bar"> = {
  labels: ["First Year", "Second Year", "Third Year", "Final Year"],
  datasets: [
    {
      label: "Total Lectures",
      data: [65, 59, 80, 81],
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 5,
    },
    {
      label: "CAttended lectures",
      data: [28, 48, 40, 56],
      backgroundColor: "rgba(153,102,255,0.6)",
      borderColor: "rgba(153,102,255,1)",
      borderWidth: 1,
    },
  ],
};

const pieChartOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
};

const barChartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
};

const Dashboard: React.FC = () => {
  const { collegeName } = useCollege();

  const [loading, setLoading] = useState(true);
  const [pieChartData1, setPieChartData1] =
    useState<ChartData<"pie">>(initialPieChartData1);
  const [barCharData, setbarCharData] =
    useState<ChartData<"bar">>(initialBarChartData);

  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");
  console.log(userSession);

  const getCurrentSemesterAttendance = async () => {
    const studentId = userSession.id;
    const semester = userSession.current_semester;

    try {
      const response = await fetch(
        `/api/student/${studentId}/get-current-semester-attendance?semester=${semester}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        // If the response is not ok, show error toast
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Attendance Data: ", data);

      // Success toast when data is fetched successfully
      //toast.success("Attendance data fetched successfully!");

      // Update pie chart data with new attendance values
      setPieChartData1({
        labels: ["Absent", "Present"],
        datasets: [
          {
            label: "Current Semester Attendance",
            data: [data.absentLectureCount, data.presentLectureCount],
            backgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      });
    } catch (error) {
      console.error("Failed to fetch attendance:", error);
      // Error toast when the fetch fails
      toast.error("Failed to fetch attendance data.. \n Please refresh the page...");
    }
  };

  const getYearwiseAttendance = async () => {
    const studentId = userSession.id; // Ensure that the studentId is correct
    const url = `/api/student/${studentId}/get-attendence-yearWise`; // Fix spelling if needed
    
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Yearwise Attendance: ", data);

      // Success toast when data is fetched successfully
      // toast.success("Yearwise attendance fetched successfully!");

      setbarCharData({
        labels: ["First Year", "Second Year", "Third Year", "Final Year"],
        datasets: [
          {
            label: "Total Lectures",
            data: [
              data.attendanceByYear.first_year,
              data.attendanceByYear.second_year,
              data.attendanceByYear.third_year,
              data.attendanceByYear.fourth_year,
            ],
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 5,
          },
          {
            label: "Attended lectures",
            data: [
              data.attendanceByYear.first_year_present,
              data.attendanceByYear.second_year_present,
              data.attendanceByYear.third_year_present,
              data.attendanceByYear.fourth_year_present,
            ],
            backgroundColor: "rgba(153,102,255,0.6)",
            borderColor: "rgba(153,102,255,1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Failed to fetch yearwise attendance:", error);
      // Error toast for failure
      toast.error("Failed to fetch yearwise attendance  \n Please refresh the page...");
    }
  };

  useEffect(() => {
    console.log(collegeName)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    console.log(collegeName)
    getCurrentSemesterAttendance();
    getYearwiseAttendance()
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="dashboard-container">
      <ToastContainer /> {/* Toast container to display messages */}
      <div className="pie-charts-container">
        <div className="pie-chart-wrapper">
          <PieChart data={pieChartData1} options={pieChartOptions} />
        </div>
        <div className="pie-chart-wrapper">
          <PieChart data={pieChartData2} options={pieChartOptions} />
        </div>
      </div>
      <div className="bar-chart-container">
        <BarChart data={barCharData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default studentProtectRoute(Dashboard);
