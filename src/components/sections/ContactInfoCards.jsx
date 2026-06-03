import React from "react";

export default function ContactInfoCards() {
  const contactDetails = [
    {
      id: 1,
      title: "Phone",
      value: "+251 911 23 45 67", // Standard Ethiopian formatting
      subtext: "Call us for instant support",
      icon: "fa-solid fa-phone"
    },
    {
      id: 2,
      title: "Email",
      value: "info@yvbeauty.com",
      subtext: "We reply within 24 hours",
      icon: "fa-solid fa-envelope"
    },
    {
      id: 3,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      subtext: "Bole Sub-City, Curated Showroom",
      icon: "fa-solid fa-location-dot"
    },
    {
      id: 4,
      title: "Operating Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      subtext: "Closed on Sundays",
      icon: "fa-solid fa-clock"
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-14 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto">
        
        {/* 4-Column Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((card) => (
            <div 
              key={card.id}
              className="bg-white border border-[#F2E3D5] rounded-2xl p-6 flex flex-col items-start text-left space-y-4 hover:border-[#E07A5F] hover:shadow-xs transition-all duration-300 group"
            >
              {/* Icon Capsule Pod */}
              <div className="w-10 h-10 rounded-xl bg-[#FBE7D6]/60 flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-white transition-colors duration-300">
                <i className={`${card.icon} text-sm`}></i>
              </div>

              {/* Card Meta Content Block */}
              <div className="space-y-1 w-full overflow-hidden">
                <h3 className="text-xs font-bold text-[#A47E6C] uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="font-serif text-[#4A3B32] font-bold text-base sm:text-md truncate group-hover:text-[#E07A5F] transition-colors duration-200">
                  {card.value}
                </p>
                <p className="text-[#705A4F] text-xs font-medium">
                  {card.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}