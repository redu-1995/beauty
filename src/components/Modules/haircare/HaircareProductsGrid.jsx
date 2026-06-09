import React from "react";
import ProductCard from "../../cards/ProductCard.jsx";
import { globalHaircareProducts } from "../../../data/haircareData";

export default function HaircareProductsGrid({ activeCategory, activeType, activeConcern }) {
  
  // 🔍 Dynamic Cascading Multi-Layer Filtering Pipeline Engine
  const filteredProducts = globalHaircareProducts
    // Layer 1: Guarantee we are exclusively targeting haircare inventory logs
    .filter((product) => product && product.type === "haircare")
    
    // Layer 2: Filter by active Hair Type pill (e.g., dry, curly, all)
    .filter((product) => {
      if (!activeCategory || activeCategory === "all") return true;
      const productHairType = product.concern || ""; // Map target category tags safely
      return productHairType.toLowerCase() === activeCategory.toLowerCase();
    })
    
    // Layer 3: Filter by active Product Form card (e.g., shampoo, conditioner, all)
    .filter((product) => {
      if (!activeType || activeType === "all") return true;
      const productForm = product.category || ""; // Map layout categories safely
      return productForm.toLowerCase() === activeType.toLowerCase();
    })
    
    // Layer 4: Filter by active Hair Concern card block (e.g., hair-fall, scalp, all)
    .filter((product) => {
      if (!activeConcern || activeConcern === "all") return true;
      const productConcern = product.concern || "";
      return productConcern.toLowerCase() === activeConcern.toLowerCase();
    });

  return (
    <section id="haircare-storefront" className="w-full bg-[#FFFBF7] pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Dynamic Meta Catalog Tracker Headers */}
        <div className="flex items-center justify-between border-b border-[#F1E7DE] pb-4">
          <span className="text-xs font-sans font-bold text-[#A47E6C] tracking-wide uppercase">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Formula" : "Formulas"}
          </span>
          
          {/* Active Filter Pill Labels */}
          <div className="flex flex-wrap items-center gap-2">
            {activeCategory && activeCategory !== "all" && (
              <span className="text-[9px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-2.5 py-1 rounded-md">
                Hair: <span className="text-[#E07A5F]">{activeCategory}</span>
              </span>
            )}
            {activeType && activeType !== "all" && (
              <span className="text-[9px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-2.5 py-1 rounded-md">
                Form: <span className="text-[#E07A5F]">{activeType}</span>
              </span>
            )}
            {activeConcern && activeConcern !== "all" && (
              <span className="text-[9px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-2.5 py-1 rounded-md">
                Concern: <span className="text-[#E07A5F]">{activeConcern}</span>
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Empty Fallback Block State Handler */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#F2E3D5] rounded-3xl bg-white max-w-md mx-auto w-full">
            <i className="fa-solid fa-bubbles text-3xl text-[#A47E6C] mb-3 block animate-bounce"></i>
            <h3 className="font-serif font-bold text-[#4A3B32] text-lg">No Formulas Found</h3>
            <p className="text-[#705A4F] text-xs max-w-xs mx-auto mt-1 leading-relaxed">
              We don't have items matching that precise combination right now. Try resetting your concern or hair type selections to discover more blends!
            </p>
          </div>
        ) : (
          /* Responsive Product Card Matrix Layout Framework Grid 
             Flawlessly matches your 2-column mobile split and 4-column desktop layout
          */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                tag={product.tag}
                // ProductCard handles rendering Telegram and WhatsApp ordering button nodes internally!
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}