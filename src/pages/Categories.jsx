// src/pages/Categories.jsx
import React from "react";
import CategoryCollectionCard from "../components/cards/CategoryCollectionCard";

// 🟢 Clean, centralized data imports
import { MAIN_COLLECTIONS, POPULAR_PRODUCTS_BY_CATEGORY } from "../data/categoriesPreviewData";

// Static Banner/Hero Assets
import categoryHeaderImg from "../assets/images/products/serumImg.png"; 
import ethiopianBotanicalImg from "../assets/images/products/serumImg.png"; // Point this to your local botanical art if available

export default function Categories() {
  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* 1. Header Hero Split Grid */}
      <div className="w-full bg-[#EAE0D5]/60 grid grid-cols-1 md:grid-cols-2 items-center border-b border-[#DFD3C3]">
        <div className="p-8 md:p-12 lg:p-16 space-y-3 text-left">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3B32]">
            Shop By Category
          </h1>
          <p className="text-xs sm:text-sm text-[#705A4F] leading-relaxed max-w-md font-medium">
            Explore beauty products carefully organized for your skincare, makeup, and self-care needs.
          </p>
        </div>
        <div className="h-48 md:h-64 w-full">
          <img 
            src={categoryHeaderImg} 
            alt="Beauty showcase header background" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Main Inner Shell Wrapper */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 py-12 space-y-12">
        
        {/* 2. Main 4-Collection Feature Blocks Grid (Now pulling correct images from data file) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {MAIN_COLLECTIONS.map((cat) => (
            <CategoryCollectionCard 
              key={cat.id}
              title={cat.title}
              description={cat.description}
              image={cat.image} // 🟢 Pulling the accurate imported asset mapping
              onClick={() => console.log(`Routing directly to ${cat.title} category filter`)}
            />
          ))}
        </div>

        {/* 3. Traditional Ethiopian Botanical Showcase Banner */}
        <div className="w-full bg-white border border-[#DFD3C3] rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg font-serif font-bold text-[#4A3B32]">Traditional Ethiopian Oils:</h2>
            <p className="text-sm font-medium text-[#E07A5F] tracking-wide">Discover the natural secrets of Korarima and Enset</p>
          </div>
          <div className="w-full sm:w-48 h-20 rounded-xl overflow-hidden bg-[#FFF5EB] flex items-center justify-center p-2">
            <img 
              src={ethiopianBotanicalImg} 
              alt="Ethiopian Botanicals showcase element" 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        </div>

        {/* 4. Dynamic Popular Products Deep-Dive Grid Stack */}
        <div className="w-full text-center space-y-8 pt-4">
          <h2 className="text-xl font-serif font-bold text-[#4A3B32]">Popular Products</h2>
          
          {/* Main 4-Column Category Wrapper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {Object.keys(POPULAR_PRODUCTS_BY_CATEGORY).map((categoryName) => (
              <div key={categoryName} className="space-y-4">
                
                {/* Section Column Heading */}
                <h4 className="text-xs font-bold text-[#4A3B32] border-b border-[#DFD3C3] pb-1.5 uppercase tracking-wider">
                  {categoryName}
                </h4>
                
                {/* Nested vertical listing layout stack */}
                <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin">
                  {POPULAR_PRODUCTS_BY_CATEGORY[categoryName].map((product) => (
                    <div 
                      key={product.id} 
                      className="w-full aspect-[16/10] bg-[#FFF5EB] border border-[#F2E3D5] rounded-xl overflow-hidden p-2 flex items-center justify-between gap-2 hover:border-[#E07A5F] transition group cursor-pointer"
                      title={product.name}
                    >
                      {/* Left side text profile */}
                      <span className="text-[10px] font-semibold text-[#705A4F] truncate max-w-[70%] group-hover:text-[#4A3B32] transition">
                        {product.name}
                      </span>
                      
                      {/* Right side graphical thumbnail element wrapper */}
                      <div className="w-12 h-full bg-white rounded-lg p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain mix-blend-multiply opacity-[0.85] group-hover:scale-105 transition duration-300" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}