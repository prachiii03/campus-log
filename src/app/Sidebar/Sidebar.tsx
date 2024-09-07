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
  IconUserBolt,
  IconUsers,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Student_details from "../Student_Details/Student_Details";

export function SidebarDemo() {
  const router = useRouter();
  const { pathname } = router;

  const links = [
    {
      label: "Dashboard",
      href: "/Dashboard",
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
      href: "/Student_Details",
      icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Result",
      href: "/result",
      icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Faculty Index",
      href: "/faculty-index",
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

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`transition-all duration-300 ${
          open ? "w-64" : "w-20"
        } bg-gray-100 dark:bg-neutral-800 h-screen fixed left-0`}
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
        {pathname === "/Dashboard" && <Dashboard />}
        {pathname === "/Student_Details" && <Student_details />}
      </div>
  );
}

