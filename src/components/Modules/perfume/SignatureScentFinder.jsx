import React from "react";

export default function SignatureScentFinder({ onSearchQueryChange }) {
  // Situational lifestyle aroma matrix configurations
  const scentScenarios = [
    {
      id: "daily-wear",
      title: "For Daily Wear",
      searchKeyword: "fresh", // Keyword injected into filter pipeline on click
      description: "Light, uplifting citrus and airy marine accords crafted to keep you feeling crisp, dynamic, and effortlessly clean all day long.",
      image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=500"
    },
    {
      id: "special-occasions",
      title: "For Special Occasions",
      searchKeyword: "oud",
      description: "Regal, deep sandalwood and rare smoked oud profiles designed to turn heads and establish an unforgettable presence.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=500"
    },
    {
      id: "romantic-evenings",
      title: "For Romantic Evenings",
      searchKeyword: "amber",
      description: "Warm amber resins, rich Madagascar vanilla, and delicate exotic spices blended into an intimate, magnetic cloud.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=500"
    },
    {
      id: "office-professional",
      title: "For Office & Work",
      searchKeyword: "floral",
      description: "Sophisticated, powdery white neroli and subtle blooming jasmine notes that remain elegantly professional and close to the skin.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500"
    }
  ];

  const handleScenarioClick = (keyword) => {
    if (onSearchQueryChange) {
      onSearchQueryChange(keyword);
      
      // Smoothly scroll down to the product storefront grid to instantly show filtered results
      const gridElement = document.getElementById("perfume-storefront");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Heading Typography Stack */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Aromatic Matchmaker
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Find Your Signature Scent
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            A fragrance should match your setting. Select a mood below to unlock the perfect biological luxury blend for your lifestyle.
          </p>
        </div>

        {/* 2-Column Tablet to 4-Column Desktop Storycard Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {scentScenarios.map((card) => (
            <div
              key={card.id}
              onClick={() => handleScenarioClick(card.searchKeyword)}
              className="group flex flex-col bg-[#FFFBF7] border border-[#F2E3D5] rounded-[2rem] overflow-hidden cursor-pointer select-none transition-all duration-400 hover:border-[#E07A5F] hover:shadow-md h-full text-left"
            >
              
              {/* Top Compartment: Immersive Story Card Portrait Image Cover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#4A3B32]">
                <img
                  src={card.image}
                  alt={`${card.title} atmospheric lifestyle showcase context`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  draggable="false"
                />
                
                {/* Micro Ambient Overlay Shades */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B32]/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Quick Action Interactive Eyelet */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs w-8 h-8 rounded-full border border-[#F2E3D5] flex items-center justify-center text-[10px] text-[#4A3B32] shadow-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>

              {/* Bottom Compartment: Descriptive Content Block */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-[#4A3B32] text-base group-hover:text-[#E07A5F] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-[#705A4F] font-sans text-xs font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Micro Action Button Bar Anchor */}
                <div className="pt-2 border-t border-[#F1E7DE]/40 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-[#A47E6C] group-hover:text-[#E07A5F] transition-colors">
                  <span>Match Scents</span>
                  <span className="flex items-center gap-1 text-[9px]">
                    Explore <i className="fa-solid fa-chevron-right text-[7px] mt-0.5"></i>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}