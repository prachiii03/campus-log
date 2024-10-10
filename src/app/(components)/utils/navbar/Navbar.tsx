"use client"
import Edutrackpro from '@/../public/assets/edutrackpro.jpg';
import User from '@/../public/assets/user-logo.png';
import {
    IconBell,
    IconLogout,
    IconMoon,
    IconSun
} from "@tabler/icons-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
            setIsProfileOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 flex items-center justify-between p-4 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="flex items-center">
                <Image src={Edutrackpro} alt="Brand Logo" className="rounded-full h-8 w-8 mr-2" />
                <span className="text-xl font-semibold">EduTrackPro</span>
            </div>
            
            <ul className="hidden md:flex space-x-6">
                <li><Link href="/dashboard">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            <div className="flex items-center space-x-4">
                <IconBell className="h-6 w-6 cursor-pointer" />
                
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <IconSun className="h-6 w-6 text-yellow-500 cursor-pointer" />
                    ) : (
                        <IconMoon className="h-6 w-6 cursor-pointer" />
                    )}
                </button>

                <div className="relative" ref={profileRef}>
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
                            <button className="flex items-center w-full px-8 p-4 text-md hover:bg-gray-100 dark:hover:bg-gray-200">
                                <IconLogout className="h-5 w-5 mr-2" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;