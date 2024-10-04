import React from "react";

export default function LandingPageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Skeleton Navbar */}
      <div className="mx-auto flex w-full max-w-[100%] justify-between px-4 py-3 text-lg font-semibold fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-500">
        <section className="flex items-center gap-10">
          {/* Circular Skeleton for Logo */}
          <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"></div>

          {/* Skeleton for Menu Items */}
          <div className="hidden lg:flex items-center gap-6 w-full">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-8 w-24 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"
              ></div>
            ))}
          </div>
        </section>

        <section className="hidden lg:flex items-center gap-8">
          {/* Skeleton for Button */}
          <div className="w-32 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"></div>

          {/* Skeleton for Dark Mode Toggle */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"></div>
        </section>

        {/* Mobile and tablet menu icon skeleton */}
        <div className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"></div>
      </div>

      {/* Skeleton Hero Section */}
      <div className="mt-[100px] px-4 py-16 bg-gray-100 dark:bg-gray-700">
        <div className="w-3/4 h-10 mb-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-full h-8 mb-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-full h-8 mb-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-full h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-[80%] h-64 mt-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500"></div>
      </div>

      {/* Skeleton Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 bg-gray-100 dark:bg-gray-700">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 bg-gray-200 dark:bg-gray-600 rounded-lg"
          >
            <div className="w-full h-40 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
            <div className="w-full h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
            <div className="w-full h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
          </div>
        ))}
      </div>

      {/* Skeleton Footer */}
      <div className="px-4 py-12 bg-gray-100 dark:bg-gray-700">
        <div className="w-1/2 h-6 mb-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-1/4 h-6 mb-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
        <div className="w-full h-10 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded"></div>
      </div>
    </div>
  );
}