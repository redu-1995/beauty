import React from "react";

export default function HaircareHero() {
  const handleScrollToProducts = () => {
    const productSection = document.getElementById("haircare-storefront");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FFFBF7] py-12 md:py-20 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Left Column: Typography Content & Call to Action */}
        <div className="flex flex-col space-y-5 sm:space-y-6 text-left order-2 md:order-1">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A47E6C] font-bold bg-[#FBE7D6]/60 px-3 py-1.5 rounded-full inline-block select-none">
              Nourishing Botanicals
            </span>
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Healthy Hair <br />
              <span className="text-[#E07A5F]">Starts Here</span>
            </h1>
          </div>

          <p className="text-[#705A4F] font-sans font-medium text-sm sm:text-base leading-relaxed max-w-md">
            Premium products formulated to deliver stronger, healthier, and shinier hair from root to tip.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleScrollToProducts}
              className="bg-[#4A3B32] text-[#FFFBF7] hover:bg-[#E07A5F] px-8 py-3.5 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-colors duration-300 shadow-xs cursor-pointer select-none"
            >
              Explore Collection <i className="fa-solid fa-arrow-right text-[11px] ml-2"></i>
            </button>
          </div>
        </div>

        {/* Right Column: Premium Portrait Image Frame */}
        <div className="order-1 md:order-2 w-full flex justify-center">
          <div className="relative w-full max-w-md md:max-w-none aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-[#F2E3D5] bg-white p-3 shadow-xs group">
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#FFFBF7] relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000"
                alt="Strong, Glossy, Healthy Hair Showcase Portfolio"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                draggable="false"
              />
              {/* Subtle ambient lighting shading overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative background shape blur */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FBE7D6]/40 rounded-full blur-xl -z-10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}