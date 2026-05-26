// src/pages/Home.jsx
import React from "react";
import Hero from "../components/layout/Hero";
// import ProductGrid from "../components/sections/ProductGrid";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      {/* Other landing page sections go here */}
    </div>
  );
}