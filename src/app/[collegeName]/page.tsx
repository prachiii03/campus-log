import { Metadata } from "next";
//import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionOne from "../(components)/college-landing-page/About/AboutSectionOne";
//import Blog from "./components/Blog";
import Blog from "../(components)/college-landing-page/Blog";
//import ScrollUp from "./components/Common/ScrollUp";
import ScrollUp from "../(components)/college-landing-page/Common/ScrollUp";
//import Features from "./components/Features";
import Features from "../(components)/college-landing-page/Features";
//import Hero from "./components/Hero";
import Hero from "../(components)/college-landing-page/Hero";
//import Testimonials from "./components/Testimonials";
import Testimonials from "../(components)/college-landing-page/Testimonials";
//import Video from "./components/Video";
import Video from "../(components)/college-landing-page/Video";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "SGMCOE",
  description: "",
};




export default function Home() {

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}

