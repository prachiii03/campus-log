"use client"; // Mark this as a Client Component

import { Inter } from "next/font/google";
import Navbar from "@/app/(components)/landing-page/Navbar";
import DashboardNavbar from '../../app/(components)/utils/navbar/Navbar';
import { SidebarDemo } from "../../app/(components)/utils/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/app/(components)/college-landing-page/Header";
import { useCollege } from "../college-name-provider/CollegeNameProvider";
const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({ session, children }: { session: any, children: React.ReactNode }) {
  const pathname = usePathname();
  const {collegeName} = useCollege();

  // Determine whether to show the Navbar and Sidebar
  const showNavbarAndSidebar = pathname !== "/";

  const showCollegeNavbar = pathname ===`/${collegeName}`
  useEffect(() => {
    if (session) {
      // Storing the session data in sessionStorage
      sessionStorage.setItem("userSession", JSON.stringify(session.user));
      console.log("Session stored in sessionStorage", session.user);
    }
  }, [session]);
  return (

    <>
    {showNavbarAndSidebar && 
      <>
      
      {showCollegeNavbar? <Header/> :  <DashboardNavbar/>}
        
         <SidebarDemo/>
         {children}
       </>
    }
    {!showNavbarAndSidebar && 
      <>
      <Navbar/>
      {children}
      </>
    }

{/* 
      {showNavbarAndSidebar && <Navbar />}
      {showNavbarAndSidebar && <SidebarDemo />}
      {children} */}
    </>
  );
}
