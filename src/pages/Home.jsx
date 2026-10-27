// src/pages/Home.jsx
import Hero from "../components/Modules/home/Hero";
import CategoriesSection from "../components/layout/CategoriesSection";
import FeaturedProducts from "../components/Modules/home/FeaturedProducts";
import WhyChooseUs from "../components/layout/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <FeaturedProducts />
      <CategoriesSection />
      <WhyChooseUs />
    </div>
  );
}