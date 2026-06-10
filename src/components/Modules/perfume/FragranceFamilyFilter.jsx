import React from "react";

export default function FragranceFamilyFilter({ activeFamily, onFamilyChange }) {
  // 🌹 Olfactory family configuration matrix map
  const fragranceFamilies = [
    {
      id: "all",
      label: "All Families",
      note: "Explore All Scents",
      icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
      id: "floral",
      label: "Floral",
      note: "Rose, Jasmine, Neroli",
      icon: "fa-solid fa-rose"
    },
    {
      id: "woody",
      label: "Woody",
      note: "Oud, Sandalwood, Cedar",
      icon: "fa-solid fa-tree"
    },
    {
      id: "oriental",
      label: "Oriental",
      note: "Amber, Vanilla, Spices",
      icon: "fa-solid fa-fire-amber"
    },
    {
      id: "fresh",
      label: "Fresh",
      note: "Sea Salt, Sage, Mint",
      icon: "fa-solid fa-wind"
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Section Heading Text Block */}
        <div className="text-left space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Aromatic Profiling
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Shop by Fragrance Family
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
            Find your preferred scent profile. Choose an olfactory family to discover matching elite concentrations.
          </p>
        </div>

        {/* 2-Column Mobile to 5-Column Desktop Responsive Layout Grid Framework */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {fragranceFamilies.map((family) => {
            const isSelected = activeFamily === family.id;

            return (
              <div
                key={family.id}
                onClick={() => onFamilyChange && onFamilyChange(family.id)}
                className={`group flex flex-col items-start justify-between p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 select-none shadow-2xs h-full
                  ${
                    isSelected
                      ? "bg-[#4A3B32] border-[#4A3B32] text-white scale-102 shadow-xs"
                      : "bg-[#FFFBF7] border-[#F2E3D5] hover:border-[#E07A5F] hover:bg-white"
                  }
                `}
              >
                {/* Upper Block: Scent Class Icon */}
                <div className={`p-2.5 rounded-xl border text-xs transition-colors duration-300 mb-6
                  ${
                    isSelected
                      ? "bg-white/10 text-[#FBE7D6] border-white/15"
                      : "bg-white text-[#A47E6C] border-[#F2E3D5] group-hover:text-[#E07A5F] group-hover:border-[#E07A5F]"
                  }
                `}>
                  <i className={family.icon}></i>
                </div>

                {/* Lower Block: Identification Labels */}
                <div className="space-y-1 w-full">
                  <h3 className={`font-serif font-bold text-xs sm:text-sm tracking-tight transition-colors duration-200
                    ${isSelected ? "text-white" : "text-[#4A3B32] group-hover:text-[#E07A5F]"}
                  `}>
                    {family.label}
                  </h3>
                  
                  <p className={`text-[10px] font-sans font-medium truncate w-full block
                    ${isSelected ? "text-[#FFFBF7]/70" : "text-[#705A4F]"}
                  `}>
                    {family.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}