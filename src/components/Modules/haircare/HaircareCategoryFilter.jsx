import React from "react";

export default function HaircareCategoryFilter({ activeCategory, onCategoryChange }) {
  // Visual hair type matrix with lowercase filtering keys and matching font-awesome icons
  const hairTypes = [
    { id: "all", label: "All Hair Types", icon: "fa-solid fa-border-all" },
    { id: "dry", label: "Dry Hair", icon: "fa-solid fa-droplet-slash" },
    { id: "oily", label: "Oily Hair", icon: "fa-solid fa-droplet" },
    { id: "curly", label: "Curly Hair", icon: "fa-solid fa-wind" },
    { id: "damaged", label: "Damaged Hair", icon: "fa-solid fa-heart-crack" },
    { id: "color-treated", label: "Color-Treated", icon: "fa-solid fa-palette" },
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6">
        
        {/* Section Labels */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="font-serif text-[#4A3B32] font-bold text-lg sm:text-xl tracking-tight">
            Shop by Hair Type
          </h2>
          <p className="text-[#705A4F] text-xs font-medium">
            Select your specific hair texture or condition to find your perfect daily match.
          </p>
        </div>

        {/* Horizontal Scrollable Filter Row */}
        <div className="w-full overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 flex items-center gap-3 pb-2 scroll-smooth snap-x">
          {hairTypes.map((type) => {
            const isSelected = activeCategory === type.id;
            
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => onCategoryChange && onCategoryChange(type.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-serif font-bold tracking-wide border transition-all duration-300 whitespace-nowrap cursor-pointer snap-items-start select-none
                  ${
                    isSelected
                      ? "bg-[#E07A5F] text-white border-[#E07A5F] shadow-xs scale-102"
                      : "bg-white text-[#4A3B32] border-[#F2E3D5] hover:border-[#E07A5F] hover:text-[#E07A5F]"
                  }
                `}
              >
                {/* Dynamic Icon */}
                <i className={`${type.icon} text-[13px] ${isSelected ? "text-white" : "text-[#A47E6C]"}`}></i>
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}