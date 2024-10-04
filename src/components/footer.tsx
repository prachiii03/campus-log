import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer Main Section */}
      <div className="bg-gray-50 w-full flex flex-row justify-around items-center p-4 md:p-6 text-xs md:text-base">
        {/* Brand and Social Icons */}
        <div className="flex flex-col items-center md:items-start w-1/4">
          <ul>
            <p className="text-gray-800 font-bold text-base md:text-xl pb-2 md:pb-4">
              EduTrack<span className="text-blue-600">Pro</span>
            </p>
            <div className="flex gap-2 md:gap-4 pb-3">
              <FaInstagram className="text-sm md:text-xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-sm md:text-xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-sm md:text-xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-sm md:text-xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>

        {/* Product Section */}
        <div className="flex flex-col items-center md:items-start w-1/4">
          <ul>
            <p className="text-gray-800 font-bold text-xs md:text-lg pb-2 md:pb-3">
              Product
            </p>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Features
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Security
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Integrations
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-center md:items-start w-1/4">
          <ul>
            <p className="text-gray-800 font-bold text-xs md:text-lg pb-2 md:pb-3">
              Company
            </p>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Media
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-center md:items-start w-1/4">
          <ul>
            <p className="text-gray-800 font-bold text-xs md:text-lg pb-2 md:pb-3">
              Support
            </p>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Help Center
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              FAQs
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Resources
            </li>
            <li className="text-gray-500 text-[10px] md:text-sm pb-1 font-semibold hover:text-blue-600 cursor-pointer">
              Tutorials
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="flex justify-center items-center text-center p-2 bg-gray-50">
        <h1 className="text-gray-800 font-semibold text-[10px] md:text-sm">
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
