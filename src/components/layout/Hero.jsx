import React from "react";
import heroImage from "../../assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 py-12 md:py-16 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Content */}
        <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Trust Badge */}
          <div className="mb-4 px-4 py-2 rounded-full bg-[#FBE7D6] border border-[#F2D0B7]">
            <span className="text-xs sm:text-sm font-semibold text-[#A47E6C] tracking-wide">
              ✨ Premium Beauty Collection
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3B32] font-serif leading-tight max-w-xl">
            Discover Premium Beauty Products
            <span className="block mt-2">
              For Every Style
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-[#A47E6C] text-base sm:text-lg leading-relaxed max-w-lg">
            Explore skincare, makeup, perfumes, and self-care essentials
            carefully selected to help you look and feel your best every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="bg-[#E07A5F] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-[#d0694e] transition-all duration-300">
              Shop Collection
            </button>

            <button className="border border-[#E07A5F] text-[#E07A5F] font-semibold px-8 py-4 rounded-xl hover:bg-[#FFF3EE] transition-all duration-300">
              View Categories
            </button>
          </div>

          {/* Trust Statistics */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold text-[#4A3B32]">
                500+
              </h3>
              <p className="text-sm text-[#A47E6C]">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#4A3B32]">
                50+
              </h3>
              <p className="text-sm text-[#A47E6C]">
                Beauty Products
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#4A3B32]">
                100%
              </h3>
              <p className="text-sm text-[#A47E6C]">
                Authentic Items
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="md:col-span-6 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl">
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