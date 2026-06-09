import React from "react";

const transformations = [
  {
    id: "trans-01",
    concern: "Severely Damaged Hair",
    solution: "Restored & Resilient",
    regimen: "Bond-Repair Cream + Castor Oil",
    timeline: "After 3 Weeks",
    beforeImg: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400",
  },
  {
    id: "trans-02",
    concern: "Dull, Dehydrated Curls",
    solution: "Hydrated & Defined",
    regimen: "Coconut Milk Curl Cream",
    timeline: "Instant Results",
    beforeImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400",
  }
];

export default function HairTransformationShowcase() {
  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Typography Title Header */}
        <div className="text-left space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Proven Results
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Real Transformations
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
            See how switching to our clean, high-performance biological formulations transforms dry, compromised cuticles into radiant health.
          </p>
        </div>

        {/* Dual Matrix Split-Card Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {transformations.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#F2E3D5] rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-[#E07A5F] transition-all duration-300 shadow-2xs group"
            >
              {/* Upper Compartment: The Side-by-Side Split View Box */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 relative rounded-[1.5rem] overflow-hidden">
                  
                  {/* BEFORE FRAME */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7]">
                    <img 
                      src={item.beforeImg} 
                      alt="Before hair condition state overview" 
                      className="w-full h-full object-cover filter grayscale-30 opacity-90 transition-transform duration-500 group-hover:scale-102"
                      draggable="false"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#4A3B32]/90 backdrop-blur-xs text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs select-none">
                      Before
                    </span>
                  </div>

                  {/* AFTER FRAME */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7]">
                    <img 
                      src={item.afterImg} 
                      alt="After hair treatment condition result" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      draggable="false"
                    />
                    <span className="absolute bottom-3 right-3 bg-[#E07A5F]/90 backdrop-blur-xs text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs select-none">
                      After
                    </span>
                  </div>

                  {/* Visual Center Divider Ribbon Badge arrow hook */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#F2E3D5] text-[#4A3B32] shadow-xs flex items-center justify-center text-[10px] z-10 pointer-events-none group-hover:rotate-180 transition-transform duration-500">
                    <i className="fa-solid fa-right-left"></i>
                  </div>
                </div>

                {/* Info Text Stack Container Block */}
                <div className="text-left space-y-1 pt-2 px-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base tracking-tight">
                      {item.concern}
                    </h3>
                    <i className="fa-solid fa-arrow-right text-[10px] text-[#A47E6C]"></i>
                    <h3 className="font-serif font-bold text-[#E07A5F] text-sm sm:text-base tracking-tight">
                      {item.solution}
                    </h3>
                  </div>
                  
                  <p className="text-[#705A4F] text-xs font-medium">
                    <span className="text-[#A47E6C] font-semibold">Regimen:</span> {item.regimen}
                  </p>
                </div>
              </div>

              {/* Lower Compartment: Timeline Meta Tag Ribbon Footer */}
              <div className="mt-5 pt-4 border-t border-[#F1E7DE]/60 flex items-center justify-between px-1 w-full mt-auto">
                <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-[#A47E6C] bg-[#FFFBF7] border border-[#F2E3D5] px-2.5 py-1 rounded-md select-none">
                  ⏱️ {item.timeline}
                </span>
                <span className="text-[10px] font-serif font-bold text-[#4A3B32] group-hover:text-[#E07A5F] transition-colors duration-200 flex items-center gap-1">
                  Shop Routine <i className="fa-solid fa-chevron-right text-[8px] mt-0.5"></i>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}