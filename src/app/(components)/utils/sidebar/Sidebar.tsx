// "use client";
// import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import { cn } from "@/lib/utils";
// import {
//   IconBook,
//   IconBrandTabler,
//   IconBriefcase,
//   IconCreditCard,
//   IconDeviceLaptop,
//   IconFileCertificate,
//   IconFileCheck,
//   IconUserBolt,
//   IconUsers,
// } from "@tabler/icons-react";
// import { useState } from "react";
// import Dashboard from "../Dashboard/Dashboard";

// export function SidebarDemo() {
//   const links = [
//     {
//       label: "Dashboard",
//       href: "/Dashboard",
//       icon: (
//         <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Attendance",
//       href: "/attendance",
//       icon: (
//         <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Fee Status",
//       href: "/fee-status",
//       icon: (
//         <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Admission Details",
//       href: "/adm-details",
//       icon: (
//         <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Result",
//       href: "/result",
//       icon: (
//         <IconFileCertificate   className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Faculty Index",
//       href: "/faculty-index",
//       icon: (
//         <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "TPO Section",
//       href: "/TPO-Section",
//       icon: (
//         <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Elective Choice",
//       href: "/elective-choice",
//       icon: (
//         <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Moodle",
//       href: "/moodle",
//       icon: (
//         <IconDeviceLaptop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     }
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={cn(
//         "rounded-md flex flex-col mt-12 md:flex-row bg-gray-100 dark:bg-neutral-800 w-auto flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden h-auto "
//         // "h-screen" // Full height of the screen
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10 h-full">
//           <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//             <div className="mt-4 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <Dashboard />
//     </div>
//   );
// }



//all ok but not sidebar visible in smaller screens
// "use client";
// import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import {
//   IconBook,
//   IconBrandTabler,
//   IconBriefcase,
//   IconCreditCard,
//   IconDeviceLaptop,
//   IconFileCertificate,
//   IconFileCheck,
//   IconUserBolt,
//   IconUsers,
// } from "@tabler/icons-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Dashboard from "../dashboard/Dashboard";
// import Student_details from "../student_details/Student_Details";

// export function SidebarDemo() {
//   const router = useRouter();
//   const { pathname } = router;

//   const links = [
//     {
//       label: "Dashboard",
//       href: "/dashboard",
//       icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Attendance",
//       href: "/attendance",
//       icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Fee Status",
//       href: "/fee-status",
//       icon: <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Student Details",
//       href: "/student_details",
//       icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Result",
//       href: "/result",
//       icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Faculty Index",
//       href: "/faculty-index",
//       icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "TPO Section",
//       href: "/TPO-Section",
//       icon: <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Elective Choice",
//       href: "/elective-choice",
//       icon: <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Moodle",
//       href: "/moodle",
//       icon: <IconDeviceLaptop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//   ];

//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-row">
//       {/* Sidebar */}
//       <div
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//         className={`transition-all duration-300 ${
//           open ? "w-64" : "w-20"
//         } bg-gray-100 dark:bg-neutral-800 h-screen fixed left-0`}
//       >
//         <Sidebar open={open} setOpen={setOpen}>
//           <SidebarBody className="justify-between gap-10 h-full mt-10">
//             <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden fixed top-30 left-5">
//               <div className="mt-12 flex flex-col gap-2">
//                 {links.map((link, idx) => (
//                   <SidebarLink key={idx} link={link} />
//                 ))}
//               </div>
//             </div>
//           </SidebarBody>
//         </Sidebar>
//       </div>
//         {pathname === "/dashboard" && <Dashboard />}
//         {pathname === "/student_details" && <Student_details />}
//       </div>
//   );
// }



//issue in crossbar
// "use client";
// import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import {
//   IconBook,
//   IconBrandTabler,
//   IconBriefcase,
//   IconCreditCard,
//   IconDeviceLaptop,
//   IconFileCertificate,
//   IconFileCheck,
//   IconMenu2,
//   IconUserBolt,
//   IconUsers, // For the hamburger menu
//   IconX // For the cross icon
// } from "@tabler/icons-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Dashboard from "../dashboard/Dashboard";
// import Student_details from "../student_details/Student_Details";

// export function SidebarDemo() {
//   const router = useRouter();
//   const { pathname } = router;

//   const links = [
//     {
//       label: "Dashboard",
//       href: "/dashboard",
//       icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Attendance",
//       href: "/attendance",
//       icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Fee Status",
//       href: "/fee-status",
//       icon: <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Student Details",
//       href: "/student_details",
//       icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Result",
//       href: "/result",
//       icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Faculty Index",
//       href: "/faculty-index",
//       icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "TPO Section",
//       href: "/TPO-Section",
//       icon: <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Elective Choice",
//       href: "/elective-choice",
//       icon: <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Moodle",
//       href: "/moodle",
//       icon: <IconDeviceLaptop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//   ];

//   const [open, setOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size changes
//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   // Effect to detect initial screen size and add a listener
//   useState(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex flex-row">
//       {/* Three-lined toggler for mobile */}
//       {isMobile && (
//         <div className="fixed top-0 right-0 p-4 z-50">
//           <button onClick={() => setOpen(!open)}>
//             {open ? (
//               <IconX className="text-neutral-700 dark:text-neutral-200 h-8 w-8 mt-16"/> // Cross icon when sidebar is open
//             ) : (
//               <IconMenu2 className="text-neutral-700 dark:text-neutral-200 h-8 w-8 mt-16" /> // Hamburger icon when sidebar is closed
//             )}
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//         className={`transition-all duration-300 ${
//           open ? "w-64" : isMobile ? "w-0" : "w-20"
//         } bg-gray-100 dark:bg-neutral-800 h-screen fixed left-0 z-40 ${
//           isMobile ? (open ? "block" : "hidden") : "block"
//         }`}
//       >
//         <Sidebar open={open} setOpen={setOpen}>
//           <SidebarBody className="justify-between gap-10 h-full mt-10">
//             <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden fixed top-30 left-5">
//               <div className="mt-12 flex flex-col gap-2">
//                 {links.map((link, idx) => (
//                   <SidebarLink key={idx} link={link} />
//                 ))}
//               </div>
//             </div>
//           </SidebarBody>
//         </Sidebar>
//       </div>

//       {/* Main Content */}
//       <div className="ml-auto">
//         {pathname === "/dashboard" && <Dashboard />}
//         {pathname === "/student_details" && <Student_details />}
//       </div>
//     </div>
//   );
// }



// "use client";
// import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import {
//   IconBook,
//   IconBrandTabler,
//   IconBriefcase,
//   IconCreditCard,
//   IconDeviceLaptop,
//   IconFileCertificate,
//   IconFileCheck,
//   IconMenu2,
//   IconUserBolt,
//   IconUsers,
// } from "@tabler/icons-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Dashboard from "../../../[collegeName]/dashboard/Dashboard";
// import Student_Details from "../../../[collegeName]/student-details/StudentDetails";

// export function SidebarDemo() {
//   const router = useRouter();
//   const { pathname } = router;

//   const links = [
//     {
//       label: "Dashboard",
//       href: "/sgmcoe/dashboard",
//       icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Attendance",
//       href: "/attendance",
//       icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Fee Status",
//       href: "/fee-status",
//       icon: <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Student Details",
//       href: "/sgmcoe/student-details",
//       icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Result",
//       href: "/result",
//       icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Faculty Index",
//       href: "/sgmcoe/faculty-index",
//       icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "TPO Section",
//       href: "/TPO-Section",
//       icon: <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Elective Choice",
//       href: "/elective-choice",
//       icon: <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//     {
//       label: "Moodle",
//       href: "/moodle",
//       icon: <IconDeviceLaptop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
//     },
//   ];

//   const [open, setOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size changes
//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   // Effect to detect initial screen size and add a listener
//   useState(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   });

//   return (
//     <div className="flex flex-row">
//       {/* Three-lined toggler for mobile */}
//       {isMobile && !open && (
//         <div className="fixed top-0 right-0 p-4 z-50">
//           <button onClick={() => setOpen(true)}>
//             <IconMenu2 className="text-neutral-700 dark:text-neutral-200 h-8 w-8 mt-16" />
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//         className={`transition-all duration-300 ${
//           open ? "w-64" : isMobile ? "w-0" : "w-20"
//         } bg-gray-100 dark:bg-neutral-800 h-screen fixed left-0 z-40 ${
//           isMobile ? (open ? "block" : "hidden") : "block"
//         }`}
//       >
//         <Sidebar open={open} setOpen={setOpen}>
//           <SidebarBody className="justify-between gap-10 h-full mt-10">
//             <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden fixed top-30 left-5">
//               <div className="mt-12 flex flex-col gap-2">
//                 {links.map((link, idx) => (
//                   <SidebarLink key={idx} link={link} />
//                 ))}
//               </div>
//             </div>
//           </SidebarBody>
//         </Sidebar>
//       </div>

//       {/* Main Content */}
//       <div className="ml-auto">
//         {pathname === "/dashboard" && <Dashboard />}
//         {pathname === "/student_details" && <Student_Details />}
//       </div>
//     </div>
//   );
// }



"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBook,
  IconBrandTabler,
  IconBriefcase,
  IconCreditCard,
  IconDeviceLaptop,
  IconFileCertificate,
  IconFileCheck,
  IconMenu2,
  IconUserBolt,
  IconUsers,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Dashboard from "../../../[collegeName]/dashboard/Dashboard";
import Student_Details from "../../../[collegeName]/student-details/StudentDetails";

export function SidebarDemo() {
  const router = useRouter();
  const { pathname } = router;

  const links: any[] = [
    {
            label: "Dashboard",
            href: "/sgmcoe/dashboard",
            icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Attendance",
            href: "/attendance",
            icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Fee Status",
            href: "/fee-status",
            icon: <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Student Details",
            href: "/sgmcoe/student-details",
            icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Result",
            href: "/result",
            icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Faculty Index",
            href: "/sgmcoe/faculty-index",
            icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "TPO Section",
            href: "/TPO-Section",
            icon: <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Elective Choice",
            href: "/elective-choice",
            icon: <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
          {
            label: "Moodle",
            href: "/moodle",
            icon: <IconDeviceLaptop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
          },
  ];

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes only on the client-side
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Effect to detect initial screen size and add a listener (runs only on the client-side)
  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex flex-row">
      {/* Three-lined toggler for mobile */}
      {isMobile && !open && (
        <div className="fixed top-0 right-0 p-4 z-50">
          <button onClick={() => setOpen(true)}>
            <IconMenu2 className="text-neutral-700 dark:text-neutral-200 h-8 w-8 mt-16" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`transition-all duration-300 ${
          open ? "w-64" : isMobile ? "w-0" : "w-20"
        } bg-gray-100 dark:bg-neutral-800 h-screen fixed left-0 z-40 ${
          isMobile ? (open ? "block" : "hidden") : "block"
        }`}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 h-full mt-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden fixed top-30 left-5">
              <div className="mt-12 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="ml-auto">
        {pathname === "/dashboard" && <Dashboard />}
        {pathname === "/student_details" && <Student_Details id={""} />}
      </div>
    </div>
  );
}
