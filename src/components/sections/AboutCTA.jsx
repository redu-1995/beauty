import React from "react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 overflow-hidden">
      {/* Outer Card Wrapper Shell with Warm Palette Blend */}
      <div className="max-w-5xl mx-auto bg-[#FFFBF7] border border-[#F1E7DE] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden shadow-xs">
        
        {/* Soft Background Accent Glows */}
        <div className="absolute w-72 h-72 rounded-full bg-[#FBE7D6] opacity-50 blur-3xl -top-20 -left-20 pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#FFF3EE] opacity-60 blur-3xl -bottom-20 -right-20 pointer-events-none"></div>

        {/* Content Column Layout Stack */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Main Action Header */}
          <h2 className="font-serif text-[#4A3B32] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Ready to Discover Your <br className="hidden sm:inline" />
            <span className="text-[#E07A5F]">Next Beauty Essential?</span>
          </h2>

          {/* Supporting Core Brand Subtext */}
          <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium max-w-lg">
            Elevate your daily routine with curated products designed to nurture your natural radiance and bring an intentional moment of peace to your self-care.
          </p>

          {/* Core Navigation Button Link Trigger */}
          <div className="pt-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="inline-block w-full sm:w-auto bg-[#E07A5F] text-white px-10 py-4 rounded-xl font-serif font-bold text-sm tracking-wide shadow-xs hover:bg-[#d0694e] hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-center cursor-pointer"
            >
              Shop Collection
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}