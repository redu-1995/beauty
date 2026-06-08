import React from "react";

export default function MakeupCategoryFilters({ activeCategory, onCategoryChange }) {
  // Visual category configuration matrix with target keys and custom font-awesome beauty icons
  const categories = [
    { id: "all", label: "All Products", icon: "fa-solid fa-border-all" },
    { id: "face", label: "Face", icon: "fa-solid fa-sparkles" },
    { id: "eyes", label: "Eyes", icon: "fa-solid fa-eye" },
    { id: "lips", label: "Lips", icon: "fa-solid fa-signature" },
    { id: "brushes", label: "Brushes & Tools", icon: "fa-solid fa-wand-magic-sparkles" },
    { id: "hybrid", label: "Skincare Hybrid", icon: "fa-solid fa-droplet" },
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6">
        
        {/* Descriptive Section Label */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="font-serif text-[#4A3B32] font-bold text-lg sm:text-xl tracking-tight">
            Shop by Category
          </h2>
          <p className="text-[#705A4F] text-xs font-medium">
            Select a collection category below to instantly filter your beauty routine essentials.
          </p>
        </div>

        {/* 🌟 Visual Scrollable Filter Bar Layout Container */}
        <div className="w-full overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 flex items-center gap-3 pb-2 scroll-smooth snap-x">
          {categories.map((category) => {
            const isSelected = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange && onCategoryChange(category.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-serif font-bold tracking-wide border transition-all duration-300 whitespace-nowrap cursor-pointer snap-items-start select-none
                  ${
                    isSelected
                      ? "bg-[#E07A5F] text-white border-[#E07A5F] shadow-xs scale-102"
                      : "bg-white text-[#4A3B32] border-[#F2E3D5] hover:border-[#E07A5F] hover:text-[#E07A5F]"
                  }
                `}
              >
                {/* Custom Icon Indicator */}
                <i className={`${category.icon} text-[13px] ${isSelected ? "text-white" : "text-[#A47E6C]"}`}></i>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}