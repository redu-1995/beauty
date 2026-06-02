// src/pages/Home.jsx
import React from "react";
import Hero from "../components/layout/Hero";
import CategoriesSection from "../components/layout/CategoriesSection";
import FeaturedProducts from "../components/layout/FeaturedProducts";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import Testimonials from "../components/layout/testimonials";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      {/* Other landing page sections go here */}
    </div>
  );
}