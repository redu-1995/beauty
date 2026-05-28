import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../cards/ProductCard";
import { ALL_PRODUCTS } from "../../data/products";

export default function ProductCarousel() {
  // 1. Initialize Embla with layout configurations (align: "start" stops awkward centering)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: true,
    slidesToScroll: 1 
  });

  // Navigation controller hooks
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full bg-[#FFF5EB] py-10 px-4 md:px-6 border-b border-[#EADBC8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Action Row */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#FF40C4] uppercase">
              Trending Now
            </span>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A3B32]">
              Our Best Sellers
            </h2>
          </div>

          {/* Custom Arrow Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="w-8 h-8 rounded-lg bg-white border border-[#EADBC8] text-[#4A3B32] font-bold flex items-center justify-center text-xs shadow-xs hover:bg-[#E07A5F] hover:text-white transition cursor-pointer"
            >
              &lt;
            </button>
            <button 
              onClick={scrollNext}
              className="w-8 h-8 rounded-lg bg-white border border-[#EADBC8] text-[#4A3B32] font-bold flex items-center justify-center text-xs shadow-xs hover:bg-[#E07A5F] hover:text-white transition cursor-pointer"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* 2. Main Embla Viewport Frame wrapper */}
        <div className="overflow-hidden" ref={emblaRef}>
          
          {/* 3. Sliding Track container (Negative margins handle item spacings cleanly) */}
          <div className="flex -ml-4">
            
            {ALL_PRODUCTS.map((prod) => (
              <div 
                key={`carousel-${prod.id}`}
                className="pl-4 min-w-0 flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
              >
                {/* Individual slide item tracking */}
                <ProductCard 
                  image={prod.image}
                  category={prod.category}
                  name={prod.name}
                  price={prod.price}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}