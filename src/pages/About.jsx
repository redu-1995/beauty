// src/pages/Home.jsx
import React from "react";
import AboutHero from "../components/sections/AboutHero";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      
      {/* Other landing page sections go here */}
    </div>
  );
}