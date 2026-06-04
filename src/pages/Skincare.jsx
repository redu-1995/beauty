// src/pages/Home.jsx
import React from "react";
import SkincareHero from "../components/Modules/skincare/SkincareHero";
export default function SkincarePage() {
  return (
    <div className="w-full flex flex-col">
      <SkincareHero />
     
      {/* Other landing page sections go here */}
    </div>
  );
}