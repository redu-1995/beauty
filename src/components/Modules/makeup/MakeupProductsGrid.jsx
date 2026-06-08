import React from "react";
import ProductCard from "../../cards/ProductCard.jsx";
import { globalProducts } from "../../../data/makeupData.js"



export default function MakeupProductsGrid({ activeCategory }) {
  // 🔍 Case-insensitive dynamic classification filtering engine logic
  // 🔍 Filter by page type FIRST, then evaluate the active category tab selection
const filteredProducts = globalProducts
  .filter((product) => product.type === "makeup")
  .filter((product) => {
    const active = activeCategory ?? "all";
    const category = product.category ?? "";

    if (active.toLowerCase() === "all") return true;

    return category.toLowerCase().includes(active.toLowerCase());
  });
  return (
    <section id="makeup-storefront" className="w-full bg-[#FFFBF7] pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Dynamic Catalog Section Subheader Results Counter */}
        <div className="flex items-center justify-between border-b border-[#F1E7DE] pb-4">
          <span className="text-xs font-sans font-bold text-[#A47E6C] tracking-wide uppercase">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
          </span>
          <div className="text-[10px] uppercase tracking-wider text-[#705A4F] font-bold bg-white border border-[#F2E3D5] px-3 py-1 rounded-md">
            Active Filter: <span className="text-[#E07A5F]">{activeCategory}</span>
          </div>
        </div>

        {/* Dynamic Fallback: Empty Categorization State Handler */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#F2E3D5] rounded-3xl bg-white max-w-md mx-auto w-full">
            <i className="fa-solid fa-wand-magic-sparkles text-3xl text-[#A47E6C] mb-3 block animate-bounce"></i>
            <h3 className="font-serif font-bold text-[#4A3B32] text-lg">Restocking Category</h3>
            <p className="text-[#705A4F] text-xs max-w-xs mx-auto mt-1 leading-relaxed">
              We are working directly with distributors to source premium cosmetics formulations. Check back with us shortly!
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