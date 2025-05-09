


"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ShinyButton from "../../../components/ui/shiny-button";
import LandingPageSkeleton from "./LandingPageSkeleton";
import logo from "../../../../public/assets/student-image.png";
import Link from "next/link";
import { useCollege } from "@/context/college-name-provider/CollegeNameProvider";
import edutrackPro from '../../../../public/images/logo.png'

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: StaticImageData;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#home",

  },
  {
    label: "About Us",
    link: "#about",

  },
  {
    label: "Services",
    link: "#services",
    children: [
      { label: "Services ", link: "#" },
      { label: "", link: "#" },
      { label: "", link: "#" },
    ],
  },
  { label: "Contact Us", link: "#contact" },
];

export default function Navbar() {
  const { collegeName } = useCollege();
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // Function to open the side menu
  function openSideMenu() {
    setIsSideMenuOpen(true);
  }

  // Function to close the side menu
  function closeSideMenu() {
    setIsSideMenuOpen(false);
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Simulate a loading state for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LandingPageSkeleton />; // Display the skeleton navbar when loading
  }

  return (
    <div
      className={`mx-auto flex w-full max-w-[100%] justify-between px-4 py-3 text-lg font-semibold fixed top-0 left-0 right-0 z-50 ${isDarkMode ? "bg-gray-900/50 text-white" : "bg-white/30 text-black"
        } backdrop-blur-md`}
    >
      <section ref={animationParent} className="flex items-center gap-10">
        <Image src={edutrackPro} alt="logo" width={120} height={120} />

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-6 w-full">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`relative group px-4 py-3 transition-all text-lg ${activeItem === item.label ? "text-white" : "text-gray-500"
                }`}
            >
              <p
                className="flex cursor-pointer items-center gap-2"
                onClick={() => setActiveItem(item.label)}
              >
                <span
                  className={`relative z-10 transition-all ml-4 group-hover:text-black after:absolute after:w-full after:h-[2px] after:bg-current after:bottom-0 after:left-0 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300`}
                >
                  {item.label}
                </span>
                {item.children && (
                  <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                )}
              </p>

              {activeItem === item.label && (
                <div className="absolute inset-0 rounded-full bg-gray-300 opacity-60 z-0" />
              )}

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

      <section className="hidden lg:flex items-center gap-8">
        <button onClick={() => {
          window.location.href = `/${collegeName ? collegeName : "sgmcoe"}`
        }}  >
          <ShinyButton
            className={`h-fit transition-all px-4 py-2 rounded-md border-2 ${isDarkMode ? "border-white text-white" : "border-black text-black"
              } hover:opacity-90`}
          >
            Get Started
          </ShinyButton>
        </button>

        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="cursor-pointer text-2xl text-current"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </div>
      </section>

      {/* Mobile and tablet menu icon for 768px - 1019px */}
      {windowWidth < 1020 && (
        <FiMenu
          onClick={openSideMenu} // Corrected this to call the function properly
          className="cursor-pointer text-4xl text-current lg:hidden"
        />
      )}
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/30 backdrop-blur-md lg:hidden">
      <div className="h-full w-[65%] bg-white dark:bg-gray-800 px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu} // Corrected this to call the function properly
            className="cursor-pointer text-4xl text-current"
          />
        </section>

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
    setItem(false);
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
            className={`ml-auto transition-transform duration-200 ${isItemOpen ? "rotate-180" : ""
              }`}
          />
        )}
      </Link>
      {isItemOpen && children && (
        <div className="absolute w-auto mt-2 flex-col rounded-lg bg-white py-3 shadow-md">
          {children.map((child, childIndex) => (
            <Link
              key={childIndex}
              href={child.link ?? "#"}
              className="flex items-center py-1 pl-6 pr-8 text-neutral-600 dark:text-white hover:text-black dark:hover:text-gray-300"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}