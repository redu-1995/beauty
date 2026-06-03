// src/pages/Home.jsx
import React from "react";
import ContactHero from "../components/sections/ContactHero";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <ContactHero />
    
      {/* Other landing page sections go here */}
    </div>
  );
}