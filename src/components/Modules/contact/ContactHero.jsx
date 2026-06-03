import React from "react";
import contactHeroImg from "../../../assets/images/contact/serumImg.png"; // Adjust path to your asset

export default function ContactHero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Structural Outer Grid Canvas */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <div className="text-left flex flex-col items-start space-y-6">
            
            {/* Subtle Brand Identity Tag */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-semibold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full select-none">
              Connect With Us
            </span>

            {/* Main Header Display Line */}
            <h1 className="font-serif text-[#4A3B32] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              Get In Touch
            </h1>

            {/* Core Message Blocks */}
            <div className="space-y-4 max-w-lg">
              <p className="text-[#E07A5F] text-lg sm:text-xl font-medium leading-relaxed font-serif">
                We're here to help with product questions, orders, and beauty recommendations.
              </p>
              <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium">
                Whether you need advice on finding the perfect serum for your skincare routine or have a question about an existing delivery, our friendly team is ready to assist you.
              </p>
            </div>

            {/* Quick Trust Indicator Bar */}
            <div className="flex items-center gap-3 pt-2 text-[#A47E6C] font-semibold text-xs tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Support Team Online • Mon - Sat
            </div>

          </div>

          {/* Right Graphical Visual Showcase Column */}
          <div className="relative flex justify-center items-center w-full">
            
            {/* Soft Branding Decorative Accent Glow */}
            <div className="absolute w-[280px] sm:w-[380px] aspect-square rounded-full bg-[#FFF3EE] opacity-80 blur-3xl z-0 -bottom-4 -left-4"></div>
            
            {/* Primary Customer Support Visual Container */}
            <div className="relative z-10 w-full max-w-md md:max-w-lg aspect-[4/5] bg-[#FBE7D6]/30 rounded-3xl border border-[#F1E7DE] p-4 group">
              <img
                src={contactHeroImg}
                alt="Friendly customer support setup with premium cosmetics"
                className="w-full h-full object-cover rounded-2xl grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                draggable="false"
              />

              {/* 🟢 Floating Call-Themed Interaction Badge */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 bg-white border border-[#F1E7DE] rounded-2xl p-4 shadow-md flex items-center gap-4 max-w-xs animate-fade-in select-none">
                <div className="w-10 h-10 rounded-xl bg-[#E07A5F] flex items-center justify-center text-white shrink-0">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-[10px] uppercase font-bold text-[#A47E6C] tracking-wider">Speak To Expert</span>
                  <span className="text-xs font-bold text-[#4A3B32] whitespace-nowrap mt-0.5">We love to guide you</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}