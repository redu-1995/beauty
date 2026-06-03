import React from "react";

export default function Statistics() {
  const stats = [
    { id: 1, value: "500+", label: "Happy Customers", icon: "fa-solid fa-users" },
    { id: 2, value: "50+", label: "Products", icon: "fa-solid fa-sparkles" },
    { id: 3, value: "4.9★", label: "Average Rating", icon: "fa-solid fa-star" },
    { id: 4, value: "100%", label: "Authentic Products", icon: "fa-solid fa-shield-check" }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-14 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-6xl mx-auto">
        
        {/* Responsive Flex/Grid Grid Board */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 divide-y-0 divide-x-0 md:divide-x divide-[#F1E7DE]">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center text-center p-4 space-y-1.5 group select-none"
            >
              {/* Massive Metric Header */}
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E07A5F] tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              
              {/* Clean Supporting Context Subheading */}
              <span className="text-xs sm:text-sm font-semibold text-[#4A3B32] tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}