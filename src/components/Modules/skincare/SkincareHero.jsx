import React from "react";

import skincareHero from "../../../assets/images/skinCare/skincareHero.png"
export default function SkincareHero() {
  // Smooth scroll handler to jump users down to your upcoming product grid
  const handleScrollToProducts = () => {
    const productGrid = document.getElementById("skincare-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FFFBF7] overflow-hidden border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        {/* Responsive Layout: Text Content | Skincare Model or Product Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content Block (Takes up 7 cols on desktop) */}
          <div className="md:col-span-7 text-left flex flex-col items-start space-y-6 z-10">
            
            {/* Category Tag */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full select-none">
              Curated Collection
            </span>

            {/* Main Category Header Display Line */}
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              Healthy Skin <br />
              <span className="text-[#E07A5F]">Starts Here</span>
            </h1>

            {/* Supporting Context Specifications Text */}
            <p className="text-[#705A4F] text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
              Discover premium cleansers, serums, moisturizers, and treatments designed for every skin type. Formulated to honor your skin barrier and unlock your most radiant, natural complexion.
            </p>

            {/* Call to Action Interactive Button Trigger */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleScrollToProducts}
                className="w-full sm:w-auto bg-[#E07A5F] text-white px-10 py-4 rounded-xl font-serif font-bold text-sm tracking-wide shadow-xs hover:bg-[#d0694e] hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 text-center cursor-pointer select-none"
              >
                Shop Skincare
              </button>
            </div>

          </div>

          {/* Right Column: Skincare Model / Product Image Showcase (Takes up 5 cols) */}
          <div className="md:col-span-5 relative flex justify-center items-center w-full">
            
            {/* Elegant Branding Abstract Glow Accents */}
            <div className="absolute w-[260px] sm:w-[340px] aspect-square rounded-full bg-[#FBE7D6]/60 opacity-70 blur-3xl z-0 -top-6 -right-6"></div>
            <div className="absolute w-[200px] sm:w-[280px] aspect-square rounded-full bg-[#FFF3EE] opacity-80 blur-3xl z-0 -bottom-6 -left-6"></div>
            
            {/* Main Visual Image Wrapper Shell */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-white border border-[#F1E7DE] p-3 rounded-3xl shadow-xs group">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#FBE7D6]/20">
                <img
                  src={skincareHero} // Placeholder target path for your asset folder setup
                  alt="Radiant skincare model showcasing natural glowing complexion"
                  className="w-full h-full object-cover grayscale-[5%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  draggable="false"
                />
              </div>

              {/* Minimal floating accent block for premium editorial weight */}
              <div className="absolute -bottom-3 -right-3 border border-[#E07A5F]/20 rounded-2xl w-24 h-24 z-0 pointer-events-none hidden sm:block"></div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}