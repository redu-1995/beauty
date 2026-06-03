import React from "react";
import storyGroupImg from "../../assets/heroImg.png"; // Your glowing lifestyle group image
import serumThumb from "../../assets/heroImg.png";     // Reuse your existing serum/product image

export default function OurStory() {
  // Mini category items representing what you select
  const curatedCategories = [
    { id: 1, name: "Skincare", label: "Vitamin C Serum", img: serumThumb },
    { id: 2, name: "Makeup", label: "Matte Lipstick", img: serumThumb },
    { id: 3, name: "Perfume", label: "Aura Perfume", img: serumThumb },
    { id: 4, name: "Self-Care", label: "Hydrating Mask", img: serumThumb },
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
                src={storyGroupImg} 
                alt="Diverse group enjoying natural self-care and beauty products" 
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

            {/* Your Provided Text Content with Premium Styling */}
            <div className="space-y-6">
              <p className="text-[#E07A5F] text-lg sm:text-xl font-medium font-serif leading-relaxed">
                YV. Beauty was founded with a simple vision: to make premium beauty products accessible, authentic, and enjoyable for everyone.
              </p>
              
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium">
                We carefully select skincare, makeup, perfumes, and self-care essentials from trusted brands that meet our quality standards. Every item in our catalog is chosen to ensure your daily beauty ritual feels genuinely rewarding.
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
                className="bg-white border border-[#F2E3D5] rounded-xl p-3 flex flex-col items-center text-center space-y-3 hover:border-[#E07A5F] transition duration-300 group"
              >
                {/* Image Thumbnail Pod */}
                <div className="w-full aspect-square bg-[#FFF5EB] rounded-lg p-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition duration-300" 
                  />
                </div>
                
                {/* Meta details */}
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-[#4A3B32]">{item.label}</span>
                  <span className="text-[10px] text-[#A47E6C] uppercase font-semibold mt-0.5 tracking-wider">
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