"use client";

// import ScrollToTop from "@/app/sgmcoe/components/Common/ScrollUp";
// import Footer from "@/app/sgmcoe/components/Footer";
// import Header from "@/app/sgmcoe/components/Header";


import { Inter } from "next/font/google";
//import "../sgmcoe/styles/index.css";

import "./styles/index.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Header from "../(components)/college-landing-page/Header";import Footer from "../(components)/landing-page/Footer";
import ScrollToTop from "../(components)/college-landing-page/ScrollToTop";

