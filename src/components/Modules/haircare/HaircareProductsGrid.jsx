import React from "react";
import ProductCard from "../../cards/ProductCard";
import { globalHaircareProducts } from "../../../data/haircareData";

export default function HaircareProductsGrid({ activeCategory = "all", activeType = "all" }) {
  
  // 🔍 Multi-layered Filtering Pipeline Logic
  // 🔍 Safe Multi-layered Filtering Pipeline Logic
const filteredProducts = globalHaircareProducts
  // 1. Double check that we are strictly evaluating haircare inventory lines
  .filter((product) => product && product.type === "haircare")
  
  // 2. Evaluate active Hair Type selector state safely
  .filter((product) => {
    if (activeCategory === "all") return true;
    const hairTypeTag = product.concern || ""; 
    return hairTypeTag.toLowerCase() === activeCategory.toLowerCase();
  })
  
  // 3. 🌟 CRUCIAL REPAIR: Evaluate active Product Type safely with direct fallbacks
  .filter((product) => {
    if (activeType === "all") return true;
    const productForm = product.category || "";
    return productForm.toLowerCase() === activeType.toLowerCase();
  });

  return (
    <section id="haircare-storefront" className="w-full bg-[#FFFBF7] pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Dynamic Meta Tracking Stats Banner */}
        <div className="flex items-center justify-between border-b border-[#F1E7DE] pb-4">
          <span className="text-xs font-sans font-bold text-[#A47E6C] tracking-wide uppercase">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Formula" : "Formulas"}
          </span>
          
          <div className="flex items-center gap-2">
            {activeCategory !== "all" && (
              <span className="text-[9px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-2.5 py-1 rounded-md">
                Type: <span className="text-[#E07A5F]">{activeCategory}</span>
              </span>
            )}
            {activeType !== "all" && (
              <span className="text-[9px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-2.5 py-1 rounded-md">
                Form: <span className="text-[#E07A5F]">{activeType}</span>
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Fallback: Empty State Handler */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#F2E3D5] rounded-3xl bg-white max-w-md mx-auto w-full">
            <i className="fa-solid fa-bubbles text-3xl text-[#A47E6C] mb-3 block animate-bounce"></i>
            <h3 className="font-serif font-bold text-[#4A3B32] text-lg">No Matching Formulas</h3>
            <p className="text-[#705A4F] text-xs max-w-xs mx-auto mt-1 leading-relaxed">
              We don't have that specific product combination in stock right now. Try adjusting your hair type filters to explore more of our collection!
            </p>
          </div>
        ) : (
          /* Responsive Product Card Matrix Layout Framework Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                tag={product.tag}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}