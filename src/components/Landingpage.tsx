
"use client";
import React from "react";
import Image from "next/image";
import studentimg from "@/assets/imges/students img.png";
import workimg from "@/assets/imges/work.svg";
import { Button } from "../components/ui/moving-border";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  FaLock,
  FaChartBar,
  FaShieldAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa"; 
import Footer from "./footer";
import { BorderBeam } from "@/components/ui/border-beam";
import { HoverEffect } from "../components/ui/card-hover-effect";

const HeroSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative top-0 left-0 w-full bg-purple-50 p-10 h-screen flex flex-col lg:flex-row items-center justify-between lg:space-x-16">
        <div className="lg:w-1/2 w-full text-left order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Secure and Efficient Educational Management with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              {" "}
              EduTrack Pro Secure
            </span>
          </h1>
          <p className="text-base lg:text-lg text-gray-700 mb-6">
            EduTrack Pro Secure helps streamline communication and data
            management between students, teachers, and parents through robust
            encryption, role-based access control, and comprehensive record
            management.
          </p>
          <div className="flex space-x-4">
            <Button
              borderRadius="1.85rem"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get Started
            </Button>
            <Button
              borderRadius="1.85rem"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
          <Image
            src={studentimg}
            alt="EduTrack Pro illustration"
            width={600}
            height={600}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose EduTrack Pro Section */}

      <section className="py-16 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100 text-center relative">
        <div className="max-w-5xl mx-auto px-8"></div>
        <div className="absolute inset-0 bg-purple-600 opacity-5 rounded-full w-72 h-72 top-10 left-10"></div>
        <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-full w-72 h-72 bottom-10 right-10"></div>
        <h2 className="text-4xl font-bold mb-4 text-purple-700">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            EduTrack Pro Secure
          </span>
          ?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          EduTrack Pro Secure provides the ultimate solution for managing
          educational data securely and efficiently, using advanced encryption
          and role-based access.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 lg:px-24 relative">
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">🔒</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Advanced Encryption
              </h3>
              <p className="text-gray-600">
                Ensure all communication and data transfer between students,
                teachers, and parents are secure.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">📊</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Data Management
              </h3>
              <p className="text-gray-600">
                Manage student records, academic performance, and reports in one
                secure platform.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">🛡️</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Role-Based Access Control
              </h3>
              <p className="text-gray-600">
                Grant access to stakeholders based on roles, ensuring the right
                data is available to the right person.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">📅</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Tracking and Monitoring
              </h3>
              <p className="text-gray-600">
                Track student attendance, academic submissions, and critical
                data with real-time updates.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">💸</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">
                A cost-effective solution for educational institutions, with
                complete transparency.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out text-left flex items-center">
            <div className="text-4xl mr-4">📈</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Customizable Reports
              </h3>
              <p className="text-gray-600">
                Generate detailed academic and performance reports tailored to
                your institution's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100 text-center relative">
        <div className="absolute inset-0 bg-purple-600 opacity-5 rounded-full w-72 h-72 top-10 left-10"></div>
        <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-full w-72 h-72 bottom-10 right-10"></div>
        <h2 className="text-4xl font-bold mb-4 text-purple-700">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Services
          </span>
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">🎓</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Student Management
            </h3>
            <p className="text-gray-600">
              Efficiently manage student records, track attendance, academic
              progress, and generate detailed reports.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">🔒</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Secure Communication
            </h3>
            <p className="text-gray-600">
              Facilitate encrypted communication between teachers, students, and
              parents to ensure privacy and security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">📊</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Data Analytics
            </h3>
            <p className="text-gray-600">
              Advanced analytics tools to monitor performance and make
              data-driven decisions for academic success.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">🛡️</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Role-Based Access
            </h3>
            <p className="text-gray-600">
              Provide different levels of access to teachers, students, and
              parents based on their role.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">📈</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Customizable Reports
            </h3>
            <p className="text-gray-600">
              Generate performance, attendance, and other reports customized to
              your institution’s needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-700">👪</div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Parental Access
            </h3>
            <p className="text-gray-600">
              Provide parents with secure access to their child’s academic
              performance, attendance, and reports.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100 text-center">
        <div className="container mx-auto px-4 lg:px-44">
          <h2 className="text-4xl font-bold mb-4 text-purple-700">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Works
            </span>
          </h2>
          <div className="text-lg text-gray-700 mb-8">
            EduTrack Pro Secure simplifies educational data management by
            providing a secure platform that ensures all records and
            communications between students, teachers, and parents are encrypted
            and easily accessible. With role-based access, each stakeholder has
            tailored permissions to view and interact with the data.
          </div>

          {/* Image */}
          <div className="relative flex items-center py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src={workimg}
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl "
              />

              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100 text-center relative">
        <h2 className="text-4xl font-bold mb-4 text-purple-700">
          Choose the Best Plan for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            EduTrack Pro
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Find the perfect plan to manage and track your educational progress
          effortlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-24">
          {/* Basic Plan */}
          <div className="relative p-1 rounded-lg bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-purple-700">
                Basic
              </h2>
              <p className="price text-4xl font-bold">$0</p>
              <p className="mb-4">Ideal for small institutions</p>
              <ul className="text-left">
                <li>Up to 100 students</li>
                <li>1 Teacher</li>
                <li>Core features</li>
                <li> .</li>
              </ul>
              <button className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Start for free
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative p-1 rounded-lg bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-purple-700">
                Pro
              </h2>
              <p className="price text-4xl font-bold">$249</p>
              <p className="mb-4">Perfect for growing institutions</p>
              <ul className="text-left">
                <li>Unlimited students</li>
                <li>10 Teachers</li>
                <li>Advanced analytics</li>
                <li>Custom reports</li>
              </ul>
              <button className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative p-1 rounded-lg bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-purple-700">
                Enterprise
              </h2>
              <p className="price text-4xl font-bold">$499</p>
              <p className="mb-4">For large educational institutions</p>
              <ul className="text-left">
                <li>Unlimited students & teachers</li>
                <li>Custom integrations</li>
                <li>Priority support (24/7)</li>
                <li>Dedicated account manager</li>
              </ul>
              <button className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Upgrade to Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeroSection;
