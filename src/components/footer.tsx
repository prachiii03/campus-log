import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 w-full flex flex-col md:flex-row justify-around items-start p-6 md:p-10">
        <div className="mb-6 md:mb-0">
          <ul>
            <p className="text-gray-800 font-bold text-2xl md:text-3xl pb-4">
              EduTrack<span className="text-blue-600">Pro</span>
            </p>
            <div className="flex gap-4 pb-3">
              <FaInstagram className="text-xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <ul>
            <p className="text-gray-800 font-bold text-lg md:text-xl pb-3">
              Product
            </p>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Features
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Security
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Integrations
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <ul>
            <p className="text-gray-800 font-bold text-lg md:text-xl pb-3">
              Company
            </p>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Media
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <ul>
            <p className="text-gray-800 font-bold text-lg md:text-xl pb-3">
              Support
            </p>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Help Center
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              FAQs
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Resources
            </li>
            <li className="text-gray-500 text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Tutorials
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4 bg-gray-50">
        <h1 className="text-gray-800 font-semibold text-sm md:text-base">
          © 2024-2025 All rights reserved | Built with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            EduTrackPro
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
