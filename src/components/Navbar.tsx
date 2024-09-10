/** @format */
"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import logo from "@/assets/imges/logo.png";
import teacher from "@/assets/imges/teacher.webp";
import parent from "@/assets/imges/parents.webp";
import student from "@/assets/imges/Student.webp";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: StaticImageData;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#",
    children: [
      { label: "Teacher Section", link: "#", iconImage: teacher },
      { label: "Parent Section", link: "#", iconImage: parent },
      { label: "Student Section", link: "#", iconImage: student },
    ],
  },
  {
    label: "About Us",
    link: "#",
    children: [{ label: "About Us", link: "#" }],
  },
  {
    label: "Services",
    link: "#",
    children: [
      { label: "Services ", link: "#" },
      { label: "", link: "#" },
      { label: "", link: "#" },
    ],
  },
  { label: "Contact Us", link: "#" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`mx-auto flex w-full max-w-[100%] justify-between px-4 py-3 text-lg font-semibold fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-gray-900/50 text-white" : "bg-white/30 text-black"
      } backdrop-blur-md`}
    >
      <section ref={animationParent} className="flex items-center gap-10">
        <Image src={logo} alt="logo" width={120} height={120} />

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group px-4 py-3 transition-all text-lg"
            >
              <p className="flex cursor-pointer items-center gap-2">
                <span className="relative transition-all group-hover:text-orange-600 after:absolute after:w-full after:h-[2px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  {item.label}
                </span>
                {item.children && (
                  <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                )}
              </p>

              {item.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-600 dark:text-black hover:text-black dark:hover:text-gray-300"
                    >
                      {child.iconImage && (
                        <Image
                          src={child.iconImage}
                          alt="item-icon"
                          width={24}
                          height={24}
                        />
                      )}
                      <span className="whitespace-nowrap pl-3">
                        {child.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="hidden md:flex items-center gap-8">
        <button
          className={`h-fit transition-all px-4 py-2 rounded-md border-2 ${
            isDarkMode ? "border-white text-white" : "border-black text-black"
          } hover:opacity-90`}
        >
          Login/Register
        </button>

        {/* Theme Toggle Icon */}
        <div
          onClick={toggleDarkMode}
          className="cursor-pointer text-2xl text-current"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </div>
      </section>

      {/* Mobile Menu Icon */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl text-current md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/30 backdrop-blur-md md:hidden">
      <div className="h-full w-[65%] bg-white dark:bg-gray-800 px-4 py-4">
        {/* Close Icon */}
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-current"
          />
        </section>

        {/* Mobile Navigation Items */}
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, index) => (
            <SingleNavItem
              key={index}
              label={item.label}
              iconImage={item.iconImage}
              link={item.link}
            >
              {item.children}
            </SingleNavItem>
          ))}
        </div>

        {/* Authentication Buttons */}
        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-600 dark:text-white hover:text-black/90 dark:hover:text-gray-300">
            Login/Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children, iconImage }: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  useEffect(() => {
    setItem(false); // Ensure consistent initial state between server and client
  }, []);

  return (
    <div ref={animationParent} className="relative">
      <Link
        href={link ?? "#"}
        onClick={toggleItem}
        className="flex items-center gap-2 text-neutral-600 dark:text-white hover:text-black dark:hover:text-gray-300 py-2"
      >
        {iconImage && (
          <Image src={iconImage} alt={`${label} icon`} width={24} height={24} />
        )}
        <span>{label}</span>
        {children && (
          <IoIosArrowDown
            className={`ml-auto transition-transform duration-200 ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {/* Submenu */}
      {isItemOpen && children && (
        <div className="ml-6 flex flex-col gap-1 rounded-lg bg-white py-2 shadow-md">
          {children.map((child, childIndex) => (
            <Link
              key={childIndex}
              href={child.link ?? "#"}
              className="flex items-center gap-2 text-neutral-600 dark:text-white hover:text-black dark:hover:text-gray-300 py-1 px-2"
            >
              {child.iconImage && (
                <Image
                  src={child.iconImage}
                  alt={`${child.label} icon`}
                  width={24}
                  height={24}
                />
              )}
              <span>{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
