import React from "react";

export default function ShopByConcern() {
  // Centralized skin concern dataset mapping to icon and descriptive subtext
  const concerns = [
    {
      id: 1,
      name: "Acne",
      description: "Clarifying treatments & gentle pore control",
      icon: "fa-solid fa-face-frown-slight",
      query: "acne"
    },
    {
      id: 2,
      name: "Dry Skin",
      description: "Deep, barrier-repairing moisture locks",
      icon: "fa-solid fa-droplet",
      query: "dry-skin"
    },
    {
      id: 3,
      name: "Oily Skin",
      description: "Lightweight, shine-free sebum balancing",
      icon: "fa-solid fa-wand-magic",
      query: "oily-skin"
    },
    {
      id: 4,
      name: "Sensitive Skin",
      description: "Calming, irritation-free soothing formulas",
      icon: "fa-solid fa-shield-heart",
      query: "sensitive-skin"
    },
    {
      id: 5,
      name: "Dark Spots",
      description: "Brightening agents for an even complexion",
      icon: "fa-solid fa-sparkles",
      query: "dark-spots"
    },
    {
      id: 6,
      name: "Aging",
      description: "Firming fine-line defense & collagen care",
      icon: "fa-solid fa-hourglass-half",
      query: "aging"
    }
  ];

  // Handler to filter products down by chosen concern variable later
  const handleConcernClick = (query) => {
    console.log(`Filtering product state database for target: ${query}`);
    // You can wire this up to update state or append query parameters to the URL
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading Label Stack */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Targeted Solutions
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Shop By Concern
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md mx-auto">
            Find specialized, clean treatments tailored directly to your skin's unique daily goals.
          </p>
        </div>

        {/* Dynamic Responsive 6-Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {concerns.map((concern) => (
            <button
              key={concern.id}
              type="button"
              onClick={() => handleConcernClick(concern.query)}
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-2xl p-5 flex flex-col items-center text-center space-y-3 hover:border-[#E07A5F] hover:bg-white hover:shadow-xs transition-all duration-300 group cursor-pointer w-full select-none"
            >
              {/* Soft Abstract Icon Circular Pod */}
              <div className="w-10 h-10 rounded-xl bg-[#FBE7D6]/40 text-[#E07A5F] flex items-center justify-center group-hover:bg-[#E07A5F] group-hover:text-white transition-colors duration-300">
                <i className={`${concern.icon} text-sm`}></i>
              </div>

              {/* Concern Descriptive Metadata */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-serif text-sm font-bold text-[#4A3B32] group-hover:text-[#E07A5F] transition-colors duration-200">
                  {concern.name}
                </span>
                <p className="text-[#705A4F] text-[10px] leading-tight font-medium opacity-80 max-w-[120px] mx-auto">
                  {concern.description}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}