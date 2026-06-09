import React from "react";

export default function ConsultationCTA() {
  // Centralized configuration for quick-chat handles
  const SOCIAL_CHANNELS = {
    telegram: "https://t.me/your_telegram_username", // Replace with your actual Telegram link or channel username
    whatsapp: "https://wa.me/251911******"          // Replace with your actual WhatsApp contact link
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Background Panel Container */}
        <div className="bg-[#4A3B32] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center shadow-lg group">
          
          {/* Ambient Design Elements (Rich Terracotta Backlighting Glow) */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#E07A5F]/15 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#FBE7D6]/10 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>

          {/* Core Text and Typography Stack */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
            
            {/* Status Indicator Badge */}
            <div className="flex items-center gap-2 text-[#FFFBF7] bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest select-none">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              Consultants Online
            </div>

            {/* Catchy Headlines */}
            <div className="space-y-3">
              <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Need Help Choosing <br className="hidden sm:inline" />
                the Right Products?
              </h2>
              <p className="text-[#FFFBF7]/80 font-sans font-medium text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Skip the trial and error. Chat directly with our personal beauty consultants to build a custom regimen tailored to your exact hair goals.
              </p>
            </div>

            {/* Split Order/Chat Action Row Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* Main Telegram Consultant Trigger Button */}
              <a
                href={SOCIAL_CHANNELS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#E07A5F] text-white hover:bg-[#d0694e] px-8 py-4 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-all duration-300 shadow-xs flex items-center justify-center gap-2.5 group/btn"
              >
                <i className="fa-brands fa-telegram text-base"></i>
                <span>Chat on Telegram</span>
                <i className="fa-solid fa-chevron-right text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1"></i>
              </a>

              {/* Secondary Backup WhatsApp Contact Trigger Button */}
              <a
                href={SOCIAL_CHANNELS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 text-[#FFFBF7] hover:bg-white/10 border border-white/20 px-8 py-4 rounded-xl text-xs sm:text-sm font-serif font-bold tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2.5"
              >
                <i className="fa-brands fa-whatsapp text-base text-[#25D366]"></i>
                <span>Message via WhatsApp</span>
              </a>

            </div>

            {/* Fast Context Footer Subtext Label */}
            <p className="text-[#FFFBF7]/50 font-sans text-[10px] font-semibold tracking-wide uppercase pt-2 select-none">
              ✨ Free Consultation • Response time under 10 mins
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}