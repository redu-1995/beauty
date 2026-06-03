// src/pages/Home.jsx
import React from "react";
import AboutHero from "../components/sections/AboutHero";
import OurStory from "../components/sections/OurStory";
import MissionVision from "../components/sections/MissionVision";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import Statistics from "../components/sections/Statistics";
import Testimonials from "../components/layout/testimonials";
import AboutCTA from "../components/sections/AboutCTA";
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