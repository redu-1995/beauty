import React from "react";
import { Link } from "react-router-dom";
import aboutHeroImg from "../../../assets/heroImg.png"; // Adjust the path to your asset

export default function AboutHero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Structural Outer Grid Canvas */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <div className="text-left flex flex-col items-start space-y-6">
            
            {/* Subtle Brand Identity Tag */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-semibold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full select-none">
              Our Identity
            </span>

            {/* Main Header Display Line */}
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              About YV. Beauty
            </h1>

            {/* Brand Manifesto Paragraph Blocks */}
            <div className="space-y-4 max-w-lg">
              <p className="text-[#E07A5F] text-lg sm:text-xl font-medium leading-relaxed font-serif">
                Helping people discover premium beauty products that enhance confidence and everyday self-care.
              </p>
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed">
                We believe that beauty routines are more than just surface-level habits—they are a form of intentional self-respect. Every selection in our portfolio is curated to respect your natural radiance while delivering exceptional, uncompromising quality.
              </p>
            </div>

            {/* Core Navigation Triggers */}
            <div className="pt-4 w-full sm:w-auto">
              <Link
                to="/products"
                className="inline-block bg-[#E07A5F] text-white px-8 py-3.5 rounded-full font-serif font-bold text-sm text-center tracking-wide shadow-xs hover:bg-[#d0694e] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                Explore Our Collection
              </Link>
            </div>

          </div>

          {/* Right Graphical Visual Showcase Column */}
          <div className="relative flex justify-center items-center w-full">
            
            {/* Soft Branding Decorative Accent Blob */}
            <div className="absolute w-[280px] sm:w-[380px] aspect-square rounded-full bg-[#FFF3EE] opacity-80 blur-3xl z-0 -top-4 -right-4"></div>
            
            {/* Primary Visual Showcase Container */}
            <div className="relative z-10 w-full max-w-md md:max-w-lg aspect-[4/5] bg-[#FBE7D6]/30 rounded-3xl overflow-hidden border border-[#F1E7DE] p-4 group">
              <img
                src={aboutHeroImg}
                alt="Premium skincare products showcase arrangement"
                className="w-full h-full object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                draggable="false"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}