import { useState } from "react";
import MakeupCategoryFilters from "./MakeupCategoryFilters";
import { globalProducts } from "../../../data/makeupData.js"
import { createWhatsAppUrl, hasWhatsAppContact } from "../../../utils/whatsapp";
// 📦 Sample Premium Makeup Dataset Matrix 

export default function MakeupFeatured() {
  // 1. Setup Active Category Filter Track State
  const [activeCategory, setActiveCategory] = useState("all");

  // 2. Filter the Products Dynamically Based on Selection State
  const displayedProducts = activeCategory === "all" 
    ? globalProducts 
    : globalProducts.filter(product => product.category === activeCategory);

  const handleInstantOrder = (product) => {
    const url = createWhatsAppUrl(
      `Hello! I would like to order ${product.name} for ETB ${product.price}. Please share payment and delivery details.`,
    );

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign("/contact");
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#FFFBF7]">
      
      {/* 🔄 Integrated Quick Category Filters Bar */}
      <MakeupCategoryFilters 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* 🛍️ Dynamic Product Matrix Viewport */}
      <section id="makeup-grid" className="w-full py-8 px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Conditional Empty Fallback Safeguard State */}
          {displayedProducts.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-[#F2E3D5] rounded-2xl bg-white">
              <i className="fa-solid fa-wand-sparkles text-2xl text-[#A47E6C] mb-2 block"></i>
              <p className="font-serif font-bold text-[#4A3B32]">Coming Soon!</p>
              <p className="text-[#705A4F] text-xs mt-1">We are restocking premium formulations for this category right now.</p>
            </div>
          ) : (
            /* Responsive Product Card Framework Grid Grid */
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {displayedProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-[#F2E3D5] rounded-2xl p-3 sm:p-4 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-md transition-all duration-300 group h-full relative"
                >
                  {/* Top Block: Product Visual Media Context */}
                  <div className="flex flex-col flex-1">
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7] border border-[#F1E7DE]/30 relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable="false"
                      />
                      {product.tag && (
                        <span className="absolute top-2 left-2 bg-[#E07A5F] text-white font-serif font-bold text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-md shadow-2xs">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-start text-left space-y-1 mb-4">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#A47E6C]">
                        {product.category}
                      </span>
                      <h3 className="font-serif font-bold text-[#4A3B32] text-xs sm:text-sm md:text-base leading-snug group-hover:text-[#E07A5F] transition-colors duration-200 line-clamp-2">
                        {product.name}
                      </h3>
                      <span className="font-sans font-extrabold text-[#E07A5F] text-xs sm:text-sm pt-0.5">
                        ETB {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Block: Fixed Alignment Cohesive Direct Social Buttons */}
                  <div className="pt-2 mt-auto border-t border-[#F1E7DE]/40">
                    <button
                      type="button"
                      onClick={() => handleInstantOrder(product)}
                      className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C85D45] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#AD4B37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                      {hasWhatsAppContact ? "Order on WhatsApp" : "Ask about this product"}
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}