import React, { useState, useEffect } from "react";
// Import your central data source matrix
import { skincareProducts } from "../../../data/skincareData";

export default function ProductFilters({ onFilterChange }) {
  // 1. Extract unique available categories dynamically from data file
  const availableCategories = [...new Set(skincareProducts.map(p => p.category))];
  
  // 2. Extract unique available skin types dynamically from array maps
  const availableSkinTypes = [...new Set(skincareProducts.flatMap(p => p.skinTypes))];

  // Initialize Category States matrix dynamically
  const [selectedCategories, setSelectedCategories] = useState(
    availableCategories.reduce((acc, current) => {
      // Set Cleansers as true initially to match original configuration request
      acc[current] = current === "Cleansers"; 
      return acc;
    }, {})
  );

  // Initialize Skin Type preference tracking state matrices dynamically
  const [selectedSkinTypes, setSelectedSkinTypes] = useState(
    availableSkinTypes.reduce((acc, current) => {
      acc[current] = false;
      return acc;
    }, {})
  );

  // 🟢 Automatically run filtering calculations whenever state matrices modify
 // 🟢 Replace the entire inside of your useEffect hook with this updated logic:
useEffect(() => {
  const isAnyCategoryChecked = Object.values(selectedCategories).some(Boolean);
  const isAnySkinTypeChecked = Object.values(selectedSkinTypes).some(Boolean);

  // If absolutely nothing is checked, show the entire inventory data matrix
  if (!isAnyCategoryChecked && !isAnySkinTypeChecked) {
    if (onFilterChange) onFilterChange(skincareProducts);
    return;
  }

  const filtered = skincareProducts.filter((product) => {
    // Check if item fits the active category pool
    const categoryMatch = isAnyCategoryChecked && selectedCategories[product.category];
    
    // Check if item fits the active skin type pool
    const skinTypeMatch = isAnySkinTypeChecked && product.skinTypes.some(
      (type) => selectedSkinTypes[type]
    );

    // 🌟 CHANGED: If both groups have selections, show items that match EITHER condition
    if (isAnyCategoryChecked && isAnySkinTypeChecked) {
      return categoryMatch || skinTypeMatch;
    }

    // Otherwise, fall back to whichever single group has active checkboxes
    return categoryMatch || skinTypeMatch;
  });

  if (onFilterChange) {
    onFilterChange(filtered);
  }
}, [selectedCategories, selectedSkinTypes]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSkinTypeChange = (skinType) => {
    setSelectedSkinTypes((prev) => ({
      ...prev,
      [skinType]: !prev[skinType],
    }));
  };

  const handleResetFilters = () => {
    setSelectedCategories(
      availableCategories.reduce((acc, current) => {
        acc[current] = false;
        return acc;
      }, {})
    );
    setSelectedSkinTypes(
      availableSkinTypes.reduce((acc, current) => {
        acc[current] = false;
        return acc;
      }, {})
    );
  };

  return (
    <section className="w-full bg-white py-12 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-5xl mx-auto bg-[#FFFBF7] border border-[#F1E7DE] rounded-3xl p-6 md:p-10 shadow-xs">
        
        {/* Filter Section Context Top Header */}
        <div className="flex items-center justify-between border-b border-[#F1E7DE] pb-4 mb-8">
          <div className="flex items-center gap-2.5 text-[#4A3B32]">
            <i className="fa-solid fa-sliders text-sm text-[#E07A5F]"></i>
            <h3 className="font-serif font-bold text-lg tracking-tight">Filter Collection</h3>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs font-bold text-[#A47E6C] hover:text-[#E07A5F] uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none"
          >
            Clear Filters
          </button>
        </div>

        {/* Two-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          
          {/* Column 1: Filter By Product Category */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-[#A47E6C] uppercase tracking-[0.15em] border-l-2 border-[#E07A5F] pl-2.5">
              Filter By
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {Object.keys(selectedCategories).map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group select-none py-1"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories[category] || false}
                      onChange={() => handleCategoryChange(category)}
                      className="peer appearance-none w-5 h-5 border border-[#F2E3D5] checked:border-[#E07A5F] checked:bg-[#E07A5F] rounded-md transition-all duration-200 cursor-pointer bg-white"
                    />
                    <i className="fa-solid fa-check text-[10px] text-white absolute scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none"></i>
                  </div>
                  <span className="text-sm font-medium text-[#705A4F] group-hover:text-[#4A3B32] transition-colors duration-200">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Column 2: Filter By Skin Type Target */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-[#A47E6C] uppercase tracking-[0.15em] border-l-2 border-[#E07A5F] pl-2.5">
              Skin Type
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {Object.keys(selectedSkinTypes).map((skinType) => (
                <label
                  key={skinType}
                  className="flex items-center gap-3 cursor-pointer group select-none py-1"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedSkinTypes[skinType] || false}
                      onChange={() => handleSkinTypeChange(skinType)}
                      className="peer appearance-none w-5 h-5 border border-[#F2E3D5] checked:border-[#E07A5F] checked:bg-[#E07A5F] rounded-md transition-all duration-200 cursor-pointer bg-white"
                    />
                    <i className="fa-solid fa-check text-[10px] text-white absolute scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none"></i>
                  </div>
                  <span className="text-sm font-medium text-[#705A4F] group-hover:text-[#4A3B32] transition-colors duration-200">
                    {skinType}
                  </span>
                </label>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}