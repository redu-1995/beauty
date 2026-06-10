import React, { useState, useMemo } from "react";
import ProductCard from "../../cards/ProductCard";
import { globalPerfumeProducts } from "../../../data/perfumeData";

export default function PerfumeCollection({ activeFamily, onFamilyChange }) {
  // 🎛️ Unified Filter State Engine
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("all"); // 'all' | 'men' | 'women' | 'unisex'
  const [maxPrice, setMaxPrice] = useState(6000);

  // Clear all filters back to catalog default baseline
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedGender("all");
    setMaxPrice(6000);
    if (onFamilyChange) onFamilyChange("all");
  };

  // 🔍 Memoized Filtering Matrix Pipeline
  const filteredPerfumes = useMemo(() => {
    return globalPerfumeProducts
      .filter((product) => product && product.type === "perfume")
      
      // 1. Text Search Input Matching (Scans name and descriptive notes)
      .filter((product) => {
        const title = product.name || "";
        const notes = product.description || "";
        const query = searchQuery.toLowerCase();
        return title.toLowerCase().includes(query) || notes.toLowerCase().includes(query);
      })
      
      // 2. Scent Family Dynamic Toggle Sync
      .filter((product) => {
        if (!activeFamily || activeFamily === "all") return true;
        const family = product.category || "";
        return family.toLowerCase() === activeFamily.toLowerCase();
      })
      
      // 3. Gender Audience Filter Layer
      .filter((product) => {
        if (selectedGender === "all") return true;
        
        // Safely aggregates text fields to match targeted demographics
        const productMetadata = `${product.name} ${product.description}`.toLowerCase();
        
        if (selectedGender === "unisex") {
          return productMetadata.includes("unisex") || (!productMetadata.includes("men") && !productMetadata.includes("women"));
        }
        return productMetadata.includes(selectedGender);
      })
      
      // 4. Price Limit Validation Slider Check
      .filter((product) => {
        const cleanPrice = parseInt((product.price || "0").replace(/,/g, ""), 10);
        return cleanPrice <= maxPrice;
      });
  }, [searchQuery, activeFamily, selectedGender, maxPrice]);

  return (
    <section id="perfume-storefront" className="w-full bg-[#FFFBF7] pb-24 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 pt-16">
        
        {/* Section Heading Intro Title */}
        <div className="text-left space-y-2">
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            The Perfume House Collection
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
            Refine your signature atmosphere. Use our studio dashboard filters below to match luxury concentrations with your exact preferences.
          </p>
        </div>

        {/* 🎛️ Interactive Filter Control Dashboard Bar Block */}
        <div className="bg-white border border-[#F2E3D5] rounded-3xl p-6 shadow-2xs grid grid-cols-1 md:grid-cols-4 gap-6 items-end text-left">
          
          {/* Filter Element 1: Text Search Bar Input */}
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#A47E6C]">
              Search Fragrances
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jasmine, oud, amber..."
                className="w-full bg-[#FFFBF7] border border-[#F2E3D5] rounded-xl py-3 pl-10 pr-4 text-xs font-sans font-medium text-[#4A3B32] placeholder-[#A47E6C]/60 focus:outline-hidden focus:border-[#E07A5F] focus:bg-white transition-all"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#A47E6C]"></i>
            </div>
          </div>

          {/* Filter Element 2: Scent Family Selector Dropdown */}
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#A47E6C]">
              Scent Profile Family
            </label>
            <select
              value={activeFamily || "all"}
              onChange={(e) => onFamilyChange && onFamilyChange(e.target.value)}
              className="w-full bg-[#FFFBF7] border border-[#F2E3D5] rounded-xl py-3 px-4 text-xs font-sans font-bold text-[#4A3B32] focus:outline-hidden focus:border-[#E07A5F] focus:bg-white transition-all cursor-pointer"
            >
              <option value="all">All Fragrance Families</option>
              <option value="floral">🌹 Floral Family</option>
              <option value="woody">🌲 Woody Family</option>
              <option value="oriental">🔥 Oriental Family</option>
              <option value="fresh">🌊 Fresh Family</option>
            </select>
          </div>

          {/* Filter Element 3: Gender Segment Button Layout */}
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#A47E6C]">
              Scent Profile Profile
            </label>
            <div className="grid grid-cols-4 bg-[#FFFBF7] border border-[#F2E3D5] p-1 rounded-xl text-center items-center">
              {["all", "women", "men", "unisex"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => setSelectedGender(gender)}
                  className={`py-2 rounded-lg text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer select-none
                    ${
                      selectedGender === gender
                        ? "bg-[#E07A5F] text-white shadow-3xs"
                        : "text-[#705A4F] hover:text-[#4A3B32]"
                    }
                  `}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Element 4: Interactive Budget Price Slider */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-[#A47E6C]">
                Max Budget Limit
              </label>
              <span className="text-xs font-serif font-bold text-[#E07A5F]">
                {maxPrice.toLocaleString()} ETB
              </span>
            </div>
            <div className="py-2.5 flex items-center">
              <input
                type="range"
                min="2000"
                max="6000"
                step="250"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#E07A5F] h-1 bg-[#F2E3D5] rounded-lg cursor-pointer appearance-none"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Empty Result Fallback State */}
        {filteredPerfumes.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#F2E3D5] rounded-3xl bg-white max-w-md mx-auto w-full px-6">
            <i className="fa-solid fa-wind text-3xl text-[#A47E6C] mb-3 block animate-pulse"></i>
            <h3 className="font-serif font-bold text-[#4A3B32] text-lg">No Perfumes Found</h3>
            <p className="text-[#705A4F] text-xs mt-1 leading-relaxed">
              We couldn't find items matching those exact dashboard configurations. Try resetting your parameters to explore our complete luxury collection!
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 bg-[#4A3B32] text-white px-5 py-2.5 rounded-xl text-[11px] font-sans font-bold uppercase tracking-wider hover:bg-[#E07A5F] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Main Product Grid System
             Splits into a 2-column layout on mobile viewports and spans 4 columns on desktop layouts
          */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {filteredPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                image={perfume.image}
                category={perfume.category}
                name={perfume.name}
                price={perfume.price}
                tag={perfume.tag}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}