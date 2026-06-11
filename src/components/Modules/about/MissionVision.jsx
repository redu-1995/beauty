import React from "react";
 
export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        
        {/* Subtle Section Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Our Purpose
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-3xl sm:text-4xl tracking-tight">
            Focus & Direction
          </h2>
        </div>

        {/* Two Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Mission Card */}
          <div className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-2xl p-8 lg:p-10 flex flex-col items-start text-left space-y-4 hover:border-[#E07A5F] transition-all duration-300 shadow-xs group">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[#FBE7D6] flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-bullseye text-lg"></i>
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#4A3B32]">
                Mission
              </h3>
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium">
                To provide authentic beauty products that help customers feel confident and empowered every day.
              </p>
            </div>
          </div>

          {/* Card 2: Vision Card */}
          <div className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-2xl p-8 lg:p-10 flex flex-col items-start text-left space-y-4 hover:border-[#E07A5F] transition-all duration-300 shadow-xs group">
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[#FBE7D6] flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-white transition-colors duration-300">
              <i className="fa-solid fa-eye text-lg"></i>
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#4A3B32]">
                Vision
              </h3>
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium">
                To become a trusted destination for beauty and self-care products.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}