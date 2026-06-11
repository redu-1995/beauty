// src/components/about/OurStory.jsx
import React from "react";
import AboutStoryImg from "../../../assets/images/About/AboutStoryImg.png";

export default function OurStory() {
  // Refined category items matching your specialized Ethiopian hair & beauty curation
  const curatedCategories = [
    { 
      id: 1, 
      name: "Hair Care", 
      label: "Growth Oils & Butter", 
      fallbackText: "🌿" 
    },
    { 
      id: 2, 
      name: "Skincare", 
      label: "Hydrating Serums", 
      fallbackText: "✨" 
    },
    { 
      id: 3, 
      name: "Makeup", 
      label: "Everyday Essentials", 
      fallbackText: "💄" 
    },
    { 
      id: 4, 
      name: "Perfume", 
      label: "Luxury Oud & Scents", 
      fallbackText: "🌸" 
    },
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Layout: Image + Core Story Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glowing Lifestyle Community Image (Takes 5 cols) */}
          <div className="md:col-span-5 relative flex justify-center">
            {/* Soft decorative background frame */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#E07A5F]/20 rounded-2xl z-0 hidden sm:block"></div>
            
            <div className="w-full max-w-md aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm z-10 bg-[#FBE7D6]/20">
              <img 
                src={AboutStoryImg} 
                alt="Diverse group enjoying natural Ethiopian hair and beauty routines" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                draggable="false"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Text Profile (Takes 7 cols) */}
          <div className="md:col-span-7 space-y-6 text-left md:pl-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/40 px-3 py-1 rounded-full inline-block">
                Our Genesis
              </span>
              <h2 className="font-serif text-[#4A3B32] font-bold text-3xl sm:text-4xl tracking-tight">
                Our Founded Story
              </h2>
            </div>

            {/* Premium Styling Text Content */}
            <div className="space-y-6">
              <p className="text-[#E07A5F] text-lg sm:text-xl font-medium font-serif leading-relaxed">
                YV. Beauty was founded with a clear, passionate vision: to celebrate diverse textures and make premium, authentic beauty and hair care essentials accessible to everyone.
              </p>
              
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium">
                We specialize deeply in nurturing beautiful, rich Ethiopian hair textures—ranging from gorgeous kinky-coily crowns to traditional braided patterns. By sourcing trusted, authentic formulas that treat curls, skin, and senses with absolute gentleness, we ensure your self-care rituals feel profoundly rewarding.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Layout: Curated Selection Category Cards Row */}
        <div className="pt-6 border-t border-[#F1E7DE]/60">
          <p className="text-left text-xs font-bold text-[#A47E6C] uppercase tracking-widest mb-6">
            What We Curate
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {curatedCategories.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-[#F2E3D5] rounded-xl p-4 flex flex-col items-center text-center space-y-3 hover:border-[#E07A5F] hover:shadow-xs transition duration-300 group cursor-pointer"
              >
                {/* Visual Thumbnail Pod */}
                <div className="w-full aspect-square bg-[#FFF5EB] rounded-lg flex items-center justify-center overflow-hidden">
                  {item.img ? (
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition duration-300" 
                    />
                  ) : (
                    <span className="text-2xl group-hover:scale-110 transition duration-300 select-none">
                      {item.fallbackText}
                    </span>
                  )}
                </div>
                
                {/* Meta Details */}
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-[#4A3B32] line-clamp-1">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#A47E6C] uppercase font-semibold mt-1 tracking-wider">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}