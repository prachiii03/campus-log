"use client"; // Mark this as a Client Component

import { Inter } from "next/font/google";
import Navbar from "@/app/(components)/landing-page/Navbar";
import DashboardNavbar from '../../app/(components)/utils/navbar/Navbar';
import { SidebarDemo } from "../../app/(components)/utils/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/(components)/college-landing-page/Header";
import { useCollege } from "../college-name-provider/CollegeNameProvider";
const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({ session, children }: { session: any, children: React.ReactNode }) {

  const pathname = usePathname();
  const { collegeName } = useCollege();

  const [isFaculty, setIsFaculty] = useState(false);
  // Determine whether to show the Navbar and Sidebar
  const showNavbarAndSidebar = pathname !== "/";
  const showCollegeNavbar = pathname === `/${collegeName}`;

  useEffect(() => {
    if (session) {
      // Storing the session data in sessionStorage
      sessionStorage.setItem("userSession", JSON.stringify(session.user));
      console.log("Session stored in sessionStorage", session.user);
    }

    const facultySession = JSON.parse(sessionStorage.getItem("facultySession") || "{}");
    if (facultySession.faculty_id) {
      setIsFaculty(true);
    }
  }, []);

  return (
    <>
    {showCollegeNavbar? <Header/> : <DashboardNavbar/>}
        
      {isFaculty ? (
        <>
          {/* If the user is faculty, render Sidebar and children */}
        
          {children}
        </>
      ) : (
        <>
          {/* If not faculty, render based on other conditions */}
          {showNavbarAndSidebar ? (
            <>
              {/* Render Header or DashboardNavbar based on the route */}
         
              {children}
            </>
          ) : (
            <>
              {/* Render only the main landing Navbar */}
              <Navbar />
              {children}
            </>
          )}
        </>
      )}
    </>
  );
}
