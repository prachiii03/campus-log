"use client";
import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/moving-border";
import { BorderBeam } from "../../../components/ui/border-beam";
import ShineBorder from "../../../components/ui/shine-border";
import Footer from "./Footer";
import LandingPageSkeleton from "./LandingPageSkeleton";
import Navbar from "./Navbar";

import StudentImage from '../../../../public/assets/student-image.png'
const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 950); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <LandingPageSkeleton />; // Display the skeleton navbar when loading
  }

  return (
      <div className="w-full bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <Navbar/>
    

       {/* Hero Section */}
      <section className="relative w-full p-10 min-h-screen flex flex-col lg:flex-row items-center justify-between lg:space-x-16 pt-24">
        <div className="lg:w-1/2 w-full text-left order-1 lg:order-1 mt-16 lg:mt-0 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold mb-4">
            Secure and Efficient Educational Management with{" "}
            <span className="inline-block gradient-text text-transparent animate-gradient">
              EduTrack Pro Secure
            </span>
          </h1>
          <p className="text-sm lg:text-lg text-gray-700 mb-6">
            EduTrack Pro Secure helps streamline communication and data
            management between students, teachers, and parents through robust
            encryption, role-based access control, and comprehensive record
            management.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start mt-4 lg:mt-0">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:text-white border-neutral-200 px-4 py-2 text-sm lg:text-base">
              Get Started
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:text-white border-neutral-200 px-4 py-2 text-sm lg:text-base">
            
              Learn More
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center order-2 lg:order-2 mt-8 lg:mt-0">
        <Image
            src={StudentImage}
            alt="EduTrack Pro illustration"
            width={400}
            height={400}
            className="rounded-full shadow-lg lg:w-[600px] lg:h-[600px]"
          />
        </div>
      </section>
      {/* Why Choose EduTrack Section */}
      <section className="py-16 text-center w-full"
      >
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4 text-purple-700">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              EduTrack Pro Secure
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            EduTrack Pro Secure provides the ultimate solution for managing educational data securely and efficiently, using advanced encryption and role-based access.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 lg:px-24">
            {/* Features Grid */}
            {[
              {
                icon: "🔒",
                title: "Advanced Encryption",
                description: "Ensure all communication and data transfer are secure."
              },
              {
                icon: "📊",
                title: "Comprehensive Data Management",
                description: "Manage student records, performance, and reports securely."
              },
              {
                icon: "🛡️",
                title: "Role-Based Access Control",
                description: "Grant access based on roles to the right person."
              },
              {
                icon: "📅",
                title: "Tracking and Monitoring",
                description: "Track attendance, submissions, and get real-time updates."
              },
              {
                icon: "💸",
                title: "No Hidden Costs",
                description: "Cost-effective with complete transparency."
              },
              {
                icon: "📈",
                title: "Customizable Reports",
                description: "Generate tailored performance and academic reports."
              }
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition duration-300"
              >
                <div className="text-4xl mr-4">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Services Section */}
<section className="py-16 text-center relative  h-screen w-screen  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
>
  <div className="absolute inset-0 opacity-5 rounded-full w-72 h-72 top-10 left-10"></div>
  <div className="absolute inset-0 opacity-5 rounded-full w-72 h-72 bottom-10 right-10"></div>
  <h2 className="text-4xl font-bold mb-4 text-purple-700">
    Our{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
      Services
    </span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">🎓</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Student Management</h3>
      <p className="text-gray-600">
        Efficiently manage student records, track attendance, academic progress, and generate detailed reports.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">🔒</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Secure Communication</h3>
      <p className="text-gray-600">
        Facilitate encrypted communication between teachers, students, and parents to ensure privacy and security.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">📊</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Data Analytics</h3>
      <p className="text-gray-600">
        Advanced analytics tools to monitor performance and make data-driven decisions for academic success.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">🛡️</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Role-Based Access</h3>
      <p className="text-gray-600">
        Provide different levels of access to teachers, students, and parents based on their role.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">📈</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Customizable Reports</h3>
      <p className="text-gray-600">
        Generate performance, attendance, and other reports customized to your institution’s needs.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4 text-purple-700">👪</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">Parental Access</h3>
      <p className="text-gray-600">
        Provide parents with secure access to their child’s academic performance, attendance, and reports.
      </p>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="py-16 text-center"
>
  <div className="container mx-auto px-4 lg:px-44">
    <h2 className="text-4xl font-bold mb-4 text-purple-700">
      How It{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        Works
      </span>
    </h2>
    <div className="text-lg text-gray-700 mb-8">
      EduTrack Pro Secure simplifies educational data management by providing a secure platform that ensures all records and communications between students, teachers, and parents are encrypted and easily accessible. With role-based access, each stakeholder has tailored permissions to view and interact with the data.
    </div>

    {/* Image */}
    <div className="relative flex items-center py-10 md:py-20 w-full">
  <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
  <div className="-m-5 rounded-2xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl relative">
    
    {/* Ensure BorderBeam is positioned correctly */}
    <div style={{ borderWidth: '5px' }}>
    <BorderBeam size={400} duration={12} delay={9} />

</div>

  </div>
</div>
</div>
</section>


<section className="py-16 text-center relative">
  <h2 className="text-4xl font-bold mb-4 text-purple-700">
    Choose the Best Plan for{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
      EduTrack Pro
    </span>
  </h2>
  <p className="text-lg text-gray-700 mb-8">
    Find the perfect plan to manage and track your educational progress effortlessly.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-24">
    {/* Basic Plan */}
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Basic</h2>
        <p className="price text-4xl font-bold">$0</p>
        <p className="mb-4">Ideal for small institutions</p>
        <ul className="text-left">
          <li>Up to 100 students</li>
          <li>1 Teacher</li>
          <li>Core features</li>
          <li>.</li>
        </ul>
        <button className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Start for free
        </button>
      </div>
    </ShineBorder>

    {/* Pro Plan */}
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Pro</h2>
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
    </ShineBorder>

    {/* Enterprise Plan */}
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Enterprise</h2>
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
    </ShineBorder>
  </div>
</section>



      <Footer />
    </div>
    
  );
};

export default LandingPage;