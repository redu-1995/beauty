import React from "react";

export default function ContactMap() {
  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Section Header Text */}
        <div className="text-center md:text-left space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Find Our Showroom
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Our Location
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-xl">
            Visit our physical boutique in Addis Ababa to sample premium skincare textures, experience luxury fragrances in person, and receive custom beauty recommendations from our team.
          </p>
        </div>

        {/* 🟢 Professional Map Iframe Wrapper Canvas */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-white border border-[#F1E7DE] rounded-3xl overflow-hidden shadow-xs relative group">
          
          <iframe
            title="YV. Beauty Premium Showroom Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.115865614995!2d38.78162235!3d9.00125745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d4a!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set"
            className="w-full h-full border-0 grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Subtle Float Frame Info Label Layer (Hidden on tiny mobile) */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#F1E7DE] rounded-xl p-3 shadow-xs pointer-events-none hidden sm:flex items-center gap-3 select-none">
            <div className="w-8 h-8 rounded-lg bg-[#E07A5F] flex items-center justify-center text-white">
              <i className="fa-solid fa-location-dot text-xs"></i>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#4A3B32]">YV. Beauty Headquarters</span>
              <span className="text-[9px] text-[#A47E6C] font-semibold tracking-wide uppercase mt-0.5">Bole Road, Addis Ababa</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}