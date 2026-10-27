import { createWhatsAppUrl } from "../../../utils/whatsapp";

export default function ContactSocials() {
  const whatsappUrl = createWhatsAppUrl("Hello! I would like to speak with a YV. Beauty advisor.");
  const socialChannels = [
    {
      id: 1,
      name: "Telegram",
      username: "YVbeauty",
      subtext: "Best for instant support & orders",
      icon: "fa-brands fa-telegram",
      colorClass: "text-[#26A5E4]",
      bgClass: "bg-[#26A5E4]/10",
      link: "https://t.me/YVbeauty1"
    },
    ...(whatsappUrl ? [{
      id: 2,
      name: "WhatsApp",
      username: "Chat with an advisor",
      subtext: "Chat directly with a beauty advisor",
      icon: "fa-brands fa-whatsapp",
      colorClass: "text-[#25D366]",
      bgClass: "bg-[#25D366]/10",
      link: whatsappUrl
    }] : [])
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Join Our Community
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Chat With Our Beauty Team
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Message us on Telegram, or use WhatsApp when ordering is configured for your region.
          </p>
        </div>

        {/* Dynamic Responsive Social Matrix Grid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {socialChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-2xl p-5 flex flex-col items-center text-center space-y-4 hover:border-[#E07A5F] hover:bg-white hover:shadow-xs transition-all duration-300 group"
            >
              {/* Dynamic Native Icon Bubble Pod */}
              <div className={`w-12 h-12 rounded-xl ${channel.bgClass} ${channel.colorClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <i className={`${channel.icon} text-xl`}></i>
              </div>

              {/* Channel Meta Context Block */}
              <div className="flex flex-col space-y-1 w-full">
                <span className="text-sm font-serif font-bold text-[#4A3B32]">
                  {channel.name}
                </span>
                <span className="text-xs font-semibold text-[#E07A5F] tracking-wide truncate">
                  {channel.username}
                </span>
                <p className="text-[#705A4F] text-[11px] leading-tight font-medium pt-1">
                  {channel.subtext}
                </p>
              </div>

              {/* Clean Decorative Action Indicator */}
              <div className="text-[10px] font-bold text-[#A47E6C] group-hover:text-[#E07A5F] uppercase tracking-wider flex items-center gap-1 pt-1 transition-colors duration-200 mt-auto">
                Connect <i className="fa-solid fa-arrow-up-right text-[8px]"></i>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}