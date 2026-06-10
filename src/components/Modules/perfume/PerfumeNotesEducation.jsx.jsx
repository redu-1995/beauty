import React from 'react';

export default function PerfumeNotesEducation() {
  const noteLayers = [
    {
      phase: "Top Notes",
      timing: "First 5 - 15 Minutes",
      concept: "The First Impression",
      example: "Citrus, Bergamot, Mint, Sea Salt",
      description: "Light, volatile molecules that burst forth immediately upon spraying. They form your initial reaction to a fragrance but evaporate quickly to clear the stage for deeper layers.",
      icon: "fa-solid fa-wind",
      bgAccent: "bg-[#FFFBF7]"
    },
    {
      phase: "Heart / Middle Notes",
      timing: "20 Minutes - 2 Hours",
      concept: "The Soul of the Scent",
      example: "Jasmine, Damask Rose, Cardamom, Sage",
      description: "Considered the core architecture of the perfume. As the top notes fade, these full-bodied floral, herbal, or spicy notes emerge to give the fragrance its true character and body.",
      icon: "fa-solid fa-heart-pulse",
      bgAccent: "bg-[#FBE7D6]/30"
    },
    {
      phase: "Base Notes",
      timing: "4 - 8+ Hours",
      concept: "The Lasting Memory",
      example: "Oud, Sandalwood, Vanilla, Amber",
      description: "Heavy, rich compounds that anchor the blend to your skin. They evaporate incredibly slowly, developing depth over hours and leaving behind a lingering, magnetic trails (silage).",
      icon: "fa-solid fa-anchor",
      bgAccent: "bg-[#4A3B32]/5 text-white"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Heading Label Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            The Science of Sillage
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            How Your Fragrance Evolves
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            A luxury perfume is an evolving art piece. Understand the three distinct structural layers that unfold on your skin over time.
          </p>
        </div>

        {/* 3-Column Visual Timeline Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
          
          {/* Timeline Connector Ribbon Linkage (Visible on Wide Desktop Viewports Only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] border-t border-dashed border-[#E07A5F]/40 -z-10"></div>

          {noteLayers.map((layer, index) => (
            <div 
              key={layer.phase}
              className={`border border-[#F2E3D5] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between hover:border-[#E07A5F] transition-all duration-300 relative bg-white group shadow-2xs`}
            >
              <div className="space-y-6 text-left">
                
                {/* Header Phase Metadata Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#E07A5F] bg-[#FBE7D6]/30 border border-[#F1E7DE]/40 px-2.5 py-1 rounded-md select-none">
                    ⏱️ {layer.timing}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#FFFBF7] group-hover:bg-[#E07A5F] group-hover:text-white border border-[#F2E3D5] text-[#A47E6C] flex items-center justify-center text-xs transition-colors duration-300">
                    <i className={layer.icon}></i>
                  </div>
                </div>

                {/* Core Title Content */}
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-[#4A3B32] text-lg sm:text-xl tracking-tight">
                    {layer.phase}
                  </h3>
                  <span className="text-xs font-sans font-bold text-[#A47E6C] block italic">
                    {layer.concept}
                  </span>
                </div>

                {/* Visual Ingredient Pill Showcase Box */}
                <div className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-xl p-3 text-left">
                  <span className="text-[9px] font-sans font-extrabold text-[#705A4F] uppercase tracking-wider block mb-0.5 opacity-70">
                    Key Ingredients:
                  </span>
                  <p className="text-xs font-serif font-bold text-[#4A3B32]">
                    {layer.example}
                  </p>
                </div>

                {/* Long-form Informative Text Paragraph */}
                <p className="text-[#705A4F] font-sans text-xs sm:text-sm font-medium leading-relaxed">
                  {layer.description}
                </p>
              </div>

              {/* Mobile Interconnected Directional Flow Arrow Indicators */}
              {index < 2 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden bg-white border border-[#F2E3D5] w-6 h-6 rounded-full flex items-center justify-center text-[9px] text-[#E07A5F] z-20 shadow-3xs animate-bounce">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              )}

              {/* Desktop Interconnected Directional Flow Arrow Indicators */}
              {index < 2 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-[#F2E3D5] w-6 h-6 rounded-full items-center justify-center text-[9px] text-[#E07A5F] z-20 shadow-3xs group-hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}