import React from "react";
// 1. Import Link from your router kit to drive navigation actions
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side Content Column Layout */}
          <div className="text-left flex flex-col items-start">
            
            {/* Animated Brand Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FBE7D6] text-[#A47E6C] text-xs font-semibold mb-6 select-none animate-fade-in">
              ✨ Premium Beauty Collection
            </div>

            {/* Premium Header Alignment Matrix */}
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              Beauty That <br />
              Enhances Your <br />
              <span className="text-[#E07A5F]">Natural Glow</span>
            </h1>

            {/* Left-Aligned Paragraph Context Body */}
            <p className="mt-6 text-[#705A4F] text-sm md:text-base leading-relaxed max-w-lg font-medium">
              Discover premium skincare, makeup, perfumes, and self-care
              essentials carefully selected to elevate your everyday routine.
            </p>

            {/* Core Functional Routing CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              
              <Link 
                to="/products" 
                className="bg-[#E07A5F] text-white px-8 py-3.5 rounded-xl font-serif font-bold text-center text-sm shadow-xs hover:bg-[#d0694e] hover:shadow-md transition duration-300 cursor-pointer"
              >
                Shop Collection
              </Link>

              <Link 
                to="/categories" 
                className="border border-[#E07A5F] text-[#E07A5F] px-8 py-3.5 rounded-xl font-serif font-bold text-center text-sm hover:bg-[#FFF3EE] transition duration-300 cursor-pointer"
              >
                Browse Categories
              </Link>

            </div>

            {/* Trust Badges - Uses FontAwesome icons cleanly */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10 border-t border-[#FBE7D6] pt-6 w-full">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#E07A5F] text-sm"></i>
                <span className="text-xs font-semibold text-[#705A4F]">Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#E07A5F] text-sm"></i>
                <span className="text-xs font-semibold text-[#705A4F]">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#E07A5F] text-sm"></i>
                <span className="text-xs font-semibold text-[#705A4F]">Fast Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Side Graphics Column Layout */}
          <div className="relative flex justify-center items-center w-full">
            
            {/* 🟢 Accent Circle: Fixed missing background color class */}
            <div className="absolute w-[320px] sm:w-[420px] aspect-square rounded-full  opacity-60 blur-3xl z-0"></div>

            {/* Primary Hero Subject Artwork Container */}
            <img
              src={heroImage}
              alt="Premium Beauty Collection Showcase"
              className="relative z-10 w-full max-w-md md:max-w-lg object-contain hover:scale-[1.02] transition-transform duration-700 ease-out"
              draggable="false"
            />

          </div>

        </div>
      </div>
    </section>
  );
}