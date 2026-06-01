// src/pages/Home.jsx
import React from "react";
import Hero from "../components/layout/Hero";
import CategoriesSection from "../components/layout/CategoriesSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <CategoriesSection />
      {/* Other landing page sections go here */}
    </div>
  );
}