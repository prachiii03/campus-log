"use client";
import Edutrackpro from '@/../public/assets/edutrackpro.jpg';
import User from '@/../public/assets/user-logo.png';
import { IconBell, IconLogout, IconMoon, IconSun } from "@tabler/icons-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';

interface UserSession {
    id?: string;
    name?: string;
    department?: string;
    currentYear?: string;
    prnno?: string;
}

interface FacultySession {
    faculty_id?: string;
    name?: string;
    department?: string;
}

const Navbar = () => {
    const { collegeName } = useCollege();
    const userSession: UserSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");
    const facultySession: FacultySession = JSON.parse(sessionStorage.getItem("facultySession") || "{}");

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isFullImageOpen, setIsFullImageOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
            setIsProfileOpen(false);
        }
    };

    const handleSignout = async () => {
        if (confirm("Do you really want to logout? Your session will end.")) {
            sessionStorage.clear();
            await signOut({ callbackUrl: '/login' });
        }
    };

    const handleFullImageView = () => {
        setIsFullImageOpen(true);
    };

    const closeFullImageView = () => {
        setIsFullImageOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 flex items-center justify-between p-4 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <div className="flex items-center">
                    <Image src={Edutrackpro} alt="Brand Logo" className="rounded-full h-8 w-8 mr-2" />
                    <span className="text-xl font-semibold">EduTrackPro</span>
                </div>

                <ul className="hidden md:flex space-x-6">
                    {facultySession.faculty_id && <>
                        <li><Link href={`/${collegeName}/faculty/faculty-details`}>Faculty Details</Link></li>
                        <li><Link href={`/${collegeName}/faculty/attendance`}>Attendancce</Link></li>
                        <li><Link href={`/${collegeName}/faculty/tpo-section`}>TPO Section</Link></li>
                        <li><Link href={`/${collegeName}/faculty/subjects`}>Subjects</Link></li>
                        <li><Link href="https://sgm-feedback-system.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Feedback
                        </Link> </li>
                        <li><li><Link href={`/${collegeName}/faculty/onboard`}>Admin</Link></li></li>
                    </>}
                    {userSession.id && <>
                        <li><Link href={`/${collegeName}/dashboard`}>Dashboard</Link></li>
                        <li><Link href={`/${collegeName}/attendance`}>Attendancce</Link></li>
                        <li><Link href={`/${collegeName}/student-details`}>Student Details</Link></li>
                        <li><Link href={`/${collegeName}/faculty-index`}>Faculty Index</Link></li>
                        <li><Link href={`/${collegeName}/tpo-section`}>TPO Section</Link></li>
                        <li><Link href={`/${collegeName}/subjects`}>Subjects</Link></li>
                        <Link href="https://sgm-feedback-system.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Feedback
                        </Link>                </>}
                </ul>

                <div className="flex items-center space-x-4">
                    {/* <IconBell className="h-6 w-6 cursor-pointer" /> */}

                    {/* <button onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <IconSun className="h-6 w-6 text-yellow-500 cursor-pointer" />
                        ) : (
                            <IconMoon className="h-6 w-6 cursor-pointer" />
                        )}
                    </button> */}

                    {/* <div className="relative" ref={profileRef}>
                        <Image
                            src={User}
                            alt="Profile"
                            className="h-8 w-8 rounded-full cursor-pointer"
                            onClick={toggleProfileDropdown}
                        />

                        {isProfileOpen && (
                            <div className={`absolute right-0 mt-6 w-80 shadow-md rounded-md py-2 z-50 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
                                <div className="px-4 py-2 text-xl">
                                    <p className="p-4">Username</p>
                                    <p className="text-sm p-4">Department</p>
                                </div>
                                <button
                                    className="flex items-center w-full px-8 p-4 text-md hover:bg-gray-100 dark:hover:bg-gray-200"
                                    onClick={handleSignout} // Call signOut on button click
                                >
                                    <IconLogout className="h-5 w-5 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div> */}

                    {/* <ul className="hidden md:flex space-x-6">
                        {facultySession.faculty_id && (
                            <>
                                <li><Link href={`/${collegeName}/faculty/faculty-details`}>Faculty Details</Link></li>
                                <li><Link href={`/${collegeName}/faculty/attendance`}>Attendance</Link></li>
                                <li><Link href={`/${collegeName}/faculty/tpo-section`}>TPO Section</Link></li>
                            </>
                        )}
                        {userSession.id && (
                            <>
                                <li><Link href={`/${collegeName}/dashboard`}>Dashboard</Link></li>
                                <li><Link href={`/${collegeName}/attendance`}>Attendance</Link></li>
                                <li><Link href={`/${collegeName}/student-details`}>Student Details</Link></li>
                                <li><Link href={`/${collegeName}/faculty-index`}>Faculty Index</Link></li>
                                <li><Link href={`/${collegeName}/tpo-section`}>TPO Section</Link></li>
                            </>
                        )}
                    </ul> */}
                </div>
                <div className="flex items-center space-x-4">
                    <IconBell className="h-6 w-6 cursor-pointer" aria-label="Notifications" />

                    {/* <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                        {isDarkMode ? (
                            <IconSun className="h-6 w-6 text-yellow-500 cursor-pointer" />
                        ) : (
                            <IconMoon className="h-6 w-6 cursor-pointer" />
                        )}
                    </button> */}

                    <div className="relative" ref={profileRef}>
                        <Image
                            src={User}
                            alt="Profile"
                            className="h-8 w-8 rounded-full cursor-pointer hover:scale-110 transition-transform"
                            onClick={toggleProfileDropdown}
                            aria-label="Open Profile Menu"
                        />

                        {isProfileOpen && (
                            <div
                                className={`absolute right-0 mt-6 w-72 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                                    }`}
                            >
                                <div className="flex flex-col items-center relative -top-6">
                                    <Image
                                        src={User}
                                        alt="Profile"
                                        className="h-24 w-24 rounded-full shadow-xl border-4 border-gradient-to-r from-purple-400 to-pink-600 cursor-pointer transition-transform hover:scale-110"
                                        onClick={handleFullImageView}
                                    />
                                    <div className="mt-4 text-center">
                                        {userSession.id ? (
                                            <>
                                                <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
                                                    {userSession.name}
                                                </h2>
                                                <p className="text-sm text-gray-500">{userSession.department}</p>
                                                <p className="text-sm text-gray-500">Year: {userSession.currentYear}</p>
                                                <p className="text-sm text-gray-500">PRN No: {userSession.prnno}</p>
                                            </>
                                        ) : facultySession.faculty_id ? (
                                            <>
                                                <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
                                                    {facultySession.name}
                                                </h2>
                                                <p className="text-sm text-gray-500">{facultySession.department}</p>
                                                <p className="text-sm text-gray-500">ID: {facultySession.faculty_id}</p>
                                            </>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="py-4 flex justify-center">
                                    <button
                                        className="w-40 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition duration-200 font-bold text-sm flex items-center justify-center space-x-2"
                                        onClick={handleSignout}
                                        aria-label="Logout"
                                    >
                                        <IconLogout className="h-4 w-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {isFullImageOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative">
                        <Image src={User} alt="Profile" className="h-auto w-full max-w-md rounded-lg" />
                        <button
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
                            onClick={closeFullImageView}
                            aria-label="Close Full Image View"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;