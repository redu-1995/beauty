import React, { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
// 💡 Import your brand new structured datasets here
import { PRODUCTS_BY_TYPE, ALL_PRODUCTS } from "../data/products";

export default function Products() {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Featured");
  
  // Track which category filter checkbox is selected (null means show all)
  const [activeCategory, setActiveCategory] = useState(null);

  // Determine which data chunk to map over based on active user filters
  const displayedProducts = activeCategory 
    ? PRODUCTS_BY_TYPE[activeCategory] 
    : ALL_PRODUCTS;

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Page Header Promotion Banner */}
      <div className="w-full bg-[#F5E6D3] text-center py-10 px-4 border-b border-[#EADBC8]">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3B32] uppercase tracking-widest">
          Beauty Collection
        </h1>
        <p className="text-xs sm:text-sm text-[#705A4F] mt-2 font-medium tracking-wide">
          Explore Skincare, Makeup, Perfumes and self-care essentials
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-6">
        
        {/* Top Control Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="text-xs font-semibold text-[#705A4F]">
            Home &gt; <span className="text-[#FF40C4]">Products</span>
          </div>

          <div className="flex items-center gap-4 self-end sm:self-auto">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-[#FFF5EB] border border-[#EADBC8] rounded-full px-4 py-1.5 text-xs text-[#4A3B32] w-40 focus:outline-hidden"
            />
            
            {/* Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="bg-[#FFF5EB] border border-[#EADBC8] rounded-lg px-3 py-1.5 text-xs text-[#4A3B32] flex items-center gap-1 cursor-pointer font-medium"
              >
                Sort By: <span className="text-[#E07A5F]">{selectedSort}</span> ▾
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-[#FFF5EB] border border-[#EADBC8] rounded-lg shadow-md z-10 py-1 text-xs text-[#4A3B32]">
                  {["Featured", "Newest", "Price: L-H", "Price: H-L"].map((opt) => (
                    <button 
                      key={opt} 
                      onClick={() => { setSelectedSort(opt); setSortOpen(false); }}
                      className="block w-full text-left px-3 py-1.5 hover:bg-[#F5E6D3]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-[#FFF5EB] border border-[#EADBC8] rounded-2xl p-4">
              <h3 className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider mb-3 pb-1 border-b border-[#EADBC8]">
                Categories
              </h3>
              <ul className="space-y-3 text-xs font-semibold text-[#705A4F]">
                {/* 💡 The clear button allows returning to all items smoothly */}
                <li 
                  onClick={() => setActiveCategory(null)}
                  className={`cursor-pointer transition ${!activeCategory ? "text-[#FF40C4]" : "hover:text-[#FF40C4]"}`}
                >
                  All Products
                </li>
                <li 
                  onClick={() => setActiveCategory("skincare")}
                  className={`cursor-pointer transition ${activeCategory === "skincare" ? "text-[#FF40C4]" : "hover:text-[#FF40C4]"}`}
                >
                  Skincare ▾
                </li>
                <li 
                  onClick={() => setActiveCategory("makeup")}
                  className={`cursor-pointer transition ${activeCategory === "makeup" ? "text-[#FF40C4]" : "hover:text-[#FF40C4]"}`}
                >
                  Makeup ▾
                </li>
                <li 
                  onClick={() => setActiveCategory("haircare")}
                  className={`cursor-pointer transition ${activeCategory === "haircare" ? "text-[#FF40C4]" : "hover:text-[#FF40C4]"}`}
                >
                  Hair Care ▾
                </li>
                <li 
                  onClick={() => setActiveCategory("perfumes")}
                  className={`cursor-pointer transition ${activeCategory === "perfumes" ? "text-[#FF40C4]" : "hover:text-[#FF40C4]"}`}
                >
                  Perfumes ▾
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Product Area */}
          <main className="lg:col-span-9 flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {displayedProducts.map((prod) => (
                <ProductCard 
                  key={prod.id}
                  image={prod.image}
                  category={prod.category}
                  name={prod.name}
                  price={prod.price}
                />
              ))}
            </div>
            
            {/* If no items exist in a clicked category slot */}
            {displayedProducts.length === 0 && (
              <p className="text-sm font-medium text-[#A47E6C] mt-12">No products found in this category.</p>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}