import React from "react";

export default function HairRoutineGuide() {
  // Ordered sequence workflow data array for hair treatment optimization
  const routineSteps = [
    {
      step: "01",
      name: "Cleanse (Shampoo)",
      frequency: "2-3x a week",
      instruction: "Apply directly to your scalp. Massage firmly with your fingertips to lift oils and product buildup without stripping your lengths.",
      icon: "fa-solid fa-soap",
      tip: "Use lukewarm water to open cuticles cleanly."
    },
    {
      step: "02",
      name: "Condition (Soften)",
      frequency: "Every wash",
      instruction: "Focus purely from mid-lengths down to your tips. Leave on for 2–3 minutes to instantly smooth and seal the outer hair cuticle layer.",
      icon: "fa-solid fa-sparkles",
      tip: "Never apply heavy conditioner directly to your roots."
    },
    {
      step: "03",
      name: "Treat (Hair Mask)",
      frequency: "1x a week",
      instruction: "Swap your conditioner once a week for an intensive mask treatment. Comb through evenly and wrap in a warm towel for deep moisture.",
      icon: "fa-solid fa-jar",
      tip: "Leave on for 10-15 mins for deep salon results."
    },
    {
      step: "04",
      name: "Lock (Hair Oil)",
      frequency: "Post-wash / Daily",
      instruction: "Warm a few precious drops between your palms. Smooth over damp or dry tips to lock in structural moisture and protect against heat damage.",
      icon: "fa-solid fa-droplet",
      tip: "Adds a glassy, high-shine reflective shield finish."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Typography Headline Block */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Educational Ritual
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            The Perfect Wash Day Ritual
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            Healthy hair is built on routine. Follow our expert-recommended layer sequence to unlock maximum strength, volume, and shine.
          </p>
        </div>

        {/* 4-Step Connected Timeline Grid Layout Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle Horizontal Connect Line Element (Visible on Desktop Viewports Only) */}
          <div className="hidden lg:block absolute top-16 left-4 right-4 h-[1px] bg-gradient-to-r from-[#F2E3D5] via-[#E07A5F]/40 to-[#F2E3D5] z-0"></div>

          {routineSteps.map((item, index) => (
            <div 
              key={item.step}
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-3xl p-6 flex flex-col justify-between hover:border-[#E07A5F] transition-all duration-300 relative z-10 group shadow-2xs"
            >
              {/* Card Upper Segment: Timeline Marker + Identity Headings */}
              <div className="space-y-4 text-left">
                
                {/* Step Index Circle Row Indicator */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-[#4A3B32] text-[#FFFBF7] font-serif font-bold text-xs flex items-center justify-center select-none group-hover:bg-[#E07A5F] transition-colors duration-300">
                    {item.step}
                  </div>
                  
                  {/* Step Specific Context Icon Element */}
                  <div className="text-[#A47E6C] group-hover:text-[#E07A5F] transition-colors duration-300 text-sm p-1">
                    <i className={item.icon}></i>
                  </div>
                </div>

                {/* Step Titles Stack */}
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base tracking-tight group-hover:text-[#E07A5F] transition-colors duration-200">
                    {item.name}
                  </h3>
                  <span className="text-[9px] font-sans font-extrabold uppercase tracking-wider text-[#A47E6C] block">
                    🔄 {item.frequency}
                  </span>
                </div>

                {/* Instruction Core Paragraph Content Block */}
                <p className="text-[#705A4F] font-sans text-xs font-medium leading-relaxed">
                  {item.instruction}
                </p>
              </div>

              {/* Card Lower Segment: Pro Salon Pro-Tip Banner Card */}
              <div className="mt-6 pt-4 border-t border-[#F1E7DE]/60 text-left">
                <span className="text-[9px] font-sans font-extrabold text-[#E07A5F] tracking-wider uppercase block mb-0.5">
                  Pro Tip:
                </span>
                <p className="text-[#4A3B32] font-serif italic text-[11px] leading-normal">
                  {item.tip}
                </p>
              </div>

              {/* Decorative Step-linking Chevron Chevron Indicator (Mobile/Tablet Friendly View Flow) */}
              {index < 3 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-20 bg-white border border-[#F2E3D5] w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-[#A47E6C] shadow-xs">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}