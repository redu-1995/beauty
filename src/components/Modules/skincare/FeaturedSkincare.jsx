import React from "react";
import argan from  "../../../assets/images/products/ArganOilImg.webp"
import { skincareProducts } from "../../../data/skincareData";
export default function FeaturedSkincare() {
  // 4-8 Curated Premium Skincare Products Array
 const featuredProducts = skincareProducts.filter(product => product.isFeatured);

  const handleAddToCart = (productId) => {
    console.log(`Adding item ID ${productId} to cart feature slice state management`);
  };

  return (
    <section id="skincare-grid" className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
              Our Favorites
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Featured Products
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              Handpicked formulation staples engineered to deliver visible, glowing results for your daily regimen.
            </p>
          </div>
          
          {/* Subtle design element link to see all items */}
          <button className="text-xs font-bold text-[#E07A5F] hover:text-[#d0694e] uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors duration-200 text-left">
            View Full Collection <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>

        {/* Product Grid Matrix Layout (Responsive 4-column framework) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-[#F2E3D5] rounded-2xl p-3 sm:p-4 flex flex-col hover:border-[#E07A5F] hover:shadow-xs transition-all duration-300 group relative"
            >
              {/* Image Frame Container Shell */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7] border border-[#F1E7DE]/30 relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable="false"
                />

                {/* 🏷️ Small dynamic ribbon badge flag */}
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-[#E07A5F] text-white font-serif font-bold text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-md shadow-2xs select-none">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Title, Metrics & Context Labels */}
              <div className="flex flex-col items-start text-left space-y-1 flex-1">
                <h3 className="font-serif font-bold text-[#4A3B32] text-xs sm:text-sm md:text-base leading-snug group-hover:text-[#E07A5F] transition-colors duration-200 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <span className="font-sans font-bold text-[#A47E6C] text-xs sm:text-sm pt-1">
                  {product.price}
                </span>
              </div>

              {/* Quick Add Action Overlay Button */}
              <div className="pt-4 mt-auto">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full bg-[#FFFBF7] text-[#4A3B32] border border-[#F2E3D5] group-hover:bg-[#E07A5F] group-hover:text-white group-hover:border-[#E07A5F] py-2.5 rounded-xl text-xs font-serif font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-bag-shopping text-[11px]"></i> Add To Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}