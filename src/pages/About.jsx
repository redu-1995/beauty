// src/pages/Home.jsx
import React from "react";
import AboutHero from "../components/sections/AboutHero";
import OurStory from "../components/sections/OurStory";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <OurStory />
      {/* Other landing page sections go here */}
    </div>
  );
}