import React from "react";

export default function WhyChooseFragrances() {
  const valueProps = [
    {
      id: "prop-01",
      title: "Long Lasting Scents",
      description: "Formulated with ultra-high concentrations of pure oil extracts that remain vibrant on your skin for 8 to 12+ hours without fading.",
      icon: "fa-solid fa-clock-three"
    },
    {
      id: "prop-02",
      title: "Premium Ingredients",
      description: "Sourced globally, using rare and highly refined organic botanicals, real resins, and hand-picked blossoms for a pure, authentic profile.",
      icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
      id: "prop-03",
      title: "Luxury Packaging",
      description: "Encased in weighted French crystal bottles featuring custom-fitted magnetic seals designed to perfectly preserve volatile top note oils.",
      icon: "fa-solid fa-gem"
    },
    {
      id: "prop-04",
      title: "Authentic Products",
      description: "100% genuine formulation logs mixed and verified right here in Addis Ababa. Pure boutique luxury with zero cutting agents or synthetics.",
      icon: "fa-solid fa-shield-check"
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Heading Text Stack */}
        <div className="text-left max-w-xl space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Our Quality Blueprint
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Why Choose Our Fragrances
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            We don't make standard body sprays. Discover the premium design elements and strict engineering rules behind every bottle we pour.
          </p>
        </div>

        {/* 2-Column Mobile to 4-Column Desktop Value Grid Layout Framework */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {valueProps.map((prop) => (
            <div 
              key={prop.id}
              className="bg-white border border-[#F2E3D5] rounded-3xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-2xs transition-all duration-300 text-left group"
            >
              <div className="space-y-4">
                
                {/* Custom Glass-Morphic Check/Icon Container Module */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFBF7] group-hover:bg-[#E07A5F]/10 border border-[#F2E3D5] text-[#A47E6C] group-hover:text-[#E07A5F] flex items-center justify-center text-xs transition-colors duration-300">
                    <i className={prop.icon}></i>
                  </div>
                  
                  {/* Subtle Checked Meta Icon Anchor */}
                  <div className="text-[#25D366] text-xs font-sans font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>

                {/* Proposition Typography Header */}
                <h3 className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base tracking-tight group-hover:text-[#E07A5F] transition-colors duration-200">
                  {prop.title}
                </h3>

                {/* Explanatory Body Paragraph Description */}
                <p className="text-[#705A4F] font-sans text-xs font-medium leading-relaxed">
                  {prop.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}