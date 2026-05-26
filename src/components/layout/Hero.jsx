import React from "react";
// Replace this path with the actual location of your home graphic asset if needed
import heroImage from "../../assets/images/hero/hero.png"; 

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 py-12 md:py-20 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text Content (Occupies 7/12 cols on desktop) */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start md:text-left md:text-left space-y-6">
          
          {/* Main Display Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3B32] font-serif leading-tight max-w-xl">
            Discover Premium Beauty Products <br className="hidden sm:inline" />
            For Every Style
          </h1>

          {/* Descriptive Subtext Block */}
          <p className="text-[#A47E6C] text-base sm:text-lg leading-relaxed max-w-md font-medium">
            Explore skincare, makeup, perfumes and self-care essentials carefully 
            selected to help you look and feel your best.
          </p>

          {/* Action CTA Button Container */}
          <div className="pt-2">
            <button className="bg-[#E07A5F] text-[#4A3B32] font-serif font-bold text-sm sm:text-base tracking-wider uppercase px-8 py-3.5 rounded-2xl shadow-md hover:bg-[#d0694e] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5">
              Shop All Products
            </button>
          </div>
        </div>

        {/* Right Column: Visual Graphic Asset (Occupies 5/12 cols on desktop) */}
        <div className="md:col-span-5 flex justify-center items-center w-full">
          <div className="relative max-w-sm sm:max-w-md md:max-w-full">
            <img
              src={heroImage}
              alt="Premium Beauty Showcase"
              className="w-full h-auto object-contain select-none"
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  );
}