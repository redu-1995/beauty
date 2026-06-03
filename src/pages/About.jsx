// src/pages/Home.jsx
import React from "react";
import AboutHero from "../components/Modules/about/AboutHero";
import OurStory from "../components/Modules/about/OurStory";
import MissionVision from "../components/Modules/about/MissionVision";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import Statistics from "../components/Modules/about/Statistics";
import Testimonials from "../components/common/testimonials";
import AboutCTA from "../components/Modules/about/AboutCTA";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
       <Statistics />
       <Testimonials />
       <AboutCTA />
      {/* Other landing page sections go here */}
    </div>
  );
}