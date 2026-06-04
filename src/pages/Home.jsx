// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Modules/home/Hero";
import CategoriesSection from "../components/layout/CategoriesSection";
import FeaturedProducts from "../components/Modules/home/FeaturedProducts";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import Testimonials from "../components/common/testimonials";

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