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

import { useCollege } from "@/context/college-name-provider/CollegeNameProvider";
// Extend the Next.js AppRouterInstance type
interface CustomRouter {
  asPath: string; // Add asPath to your custom router type
  pathname: string; // Add pathname if needed
}

export function SidebarDemo() {

  const {collegeName} = useCollege();
  const router = useRouter() as unknown as CustomRouter; // Type assertion
  const { asPath } = router; // Now you can access asPath

  const links: any[] = [
    {
      label: "Dashboard",
      href: `/${collegeName}/dashboard`,
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Attendance",
      href: `/${collegeName}/attendance`,
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Fee Status",
      href: "/fee-status",
      icon: <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Student Details",
      href: `/${collegeName}/student-details`,
      icon: <IconFileCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Result",
      href: "/result",
      icon: <IconFileCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Faculty Index",
      href: `/${collegeName}/faculty-index`,
      icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "TPO Section",
      href: `/${collegeName}/tpo-section`,
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
        {asPath === `/${collegeName}/dashboard` && <Dashboard />}
        {asPath === `/${collegeName}/student-details` && <Student_Details id={""} />}
      </div>
    </div>
  );
}
