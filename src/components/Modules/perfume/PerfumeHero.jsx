import React from "react";

export default function PerfumeHero() {
  const handleScrollToCollection = () => {
    const collectionSection = document.getElementById("perfume-storefront");
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FFFBF7] py-16 md:py-24 px-6 lg:px-12 border-b border-[#F1E7DE] relative overflow-hidden">
      
      {/* Editorial Luxury Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBE7D6]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-12 w-72 h-72 bg-[#E07A5F]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Premium Text Content Block */}
        <div className="flex flex-col space-y-6 text-left order-2 md:order-1 max-w-xl">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#A47E6C] font-bold bg-[#FBE7D6]/60 px-4 py-1.5 rounded-full inline-block select-none">
              Maison De Parfum
            </span>
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Discover Your <br />
              <span className="text-[#E07A5F] italic font-normal">Signature Scent</span>
            </h1>
          </div>

          <p className="text-[#705A4F] font-sans font-medium text-sm sm:text-base leading-relaxed max-w-md">
            Explore luxurious scents crafted with rare, highly concentrated biological botanicals to leave an unforgettable, lasting impression wherever you go.
          </p>

          {/* Call To Action Buttons Row */}
          <div className="pt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToCollection}
              className="bg-[#4A3B32] text-[#FFFBF7] hover:bg-[#E07A5F] px-8 py-4 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer select-none"
            >
              Shop Fragrances <i className="fa-solid fa-arrow-right text-[11px] ml-2"></i>
            </button>
            
            <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#A47E6C] hidden sm:inline-block">
              ✨ Premium Olfactory Oils
            </span>
          </div>
        </div>

        {/* Right Column: Floating Perfume Bottle Showcase Window */}
        <div className="order-1 md:order-2 w-full flex justify-center relative">
          
          {/* Decorative Backing Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F2E3D5]/40 to-transparent rounded-[3rem] transform -rotate-2 scale-102 pointer-events-none -z-10"></div>
          
          <div className="relative w-full max-w-md md:max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden border border-[#F2E3D5] bg-white p-4 shadow-xs group">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#FFFBF7] relative">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000"
                alt="Velvet Jasmine luxury perfume crystal bottle presentation showcase"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 select-none mix-blend-multiply"
                draggable="false"
              />
              
              {/* Soft Luxury Studio Shadow Vignette Overlayer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/5 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Concentration Label Ribbon Overlay */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-[#F2E3D5] rounded-xl px-3 py-2 shadow-2xs select-none">
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#4A3B32] block">
                  Concentration
                </span>
                <span className="text-[10px] font-serif font-extrabold text-[#E07A5F] block">
                  Extrait de Parfum
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}