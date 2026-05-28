import React from "react";

export default function ProductCard({ image, category, name, price }) {
  return (
    <div className="bg-[#FFF2E6] rounded-2xl p-4 border border-[#F2E3D5] flex flex-col items-center text-center shadow-xs hover:shadow-md transition duration-300">
      
      {/* Product Image Container */}
      <div className="w-full aspect-square bg-white rounded-xl overflow-hidden mb-3 flex items-center justify-center p-2">
        <img 
          src={image} 
          alt={name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>

      {/* Product Information */}
      <span className="text-[11px] font-bold text-[#FF40C4] uppercase tracking-wider mb-1">
        {category}
      </span>
      <h3 className="text-xs font-serif font-bold text-[#4A3B32] line-clamp-2 min-h-[32px] leading-tight">
        {name}
      </h3>
      <p className="text-xs font-bold text-[#E07A5F] mt-1 mb-3">
        ETB {price}
      </p>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#E07A5F] text-[#4A3B32] font-serif font-bold text-[11px] py-2 rounded-xl hover:bg-[#d0694e] transition cursor-pointer mt-auto">
        Add to Cart
      </button>
    </div>
  );
}