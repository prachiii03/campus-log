"use client";

import { Inter } from "next/font/google";
import Navbar from "@/app/(components)/landing-page/Navbar";
import DashboardNavbar from '../../app/(components)/utils/navbar/Navbar';
import { SidebarDemo } from "../../app/(components)/utils/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/(components)/college-landing-page/Header";
import { useCollege } from "../college-name-provider/CollegeNameProvider";

const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({
  session,
  children,
}: {
  session: any;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { collegeName } = useCollege();
  const [isFaculty, setIsFaculty] = useState(false);

  const showNavbarAndSidebar = pathname !== "/";
  const showCollegeNavbar = pathname === `/${collegeName}`;

  useEffect(() => {
    if (session) {
      sessionStorage.setItem("userSession", JSON.stringify(session.user));
    }

    const facultySession = JSON.parse(sessionStorage.getItem("facultySession") || "{}");
    if (facultySession.faculty_id) {
      setIsFaculty(true);
    }
  }, []);

  return (
    <div>
      {showCollegeNavbar ? <Header /> : <DashboardNavbar />}
      {isFaculty || showNavbarAndSidebar ? (
        <>
          <SidebarDemo />
          {children}
        </>
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </div>
  );
}
