import { skincareProducts } from "../../../data/skincareData";
import { createWhatsAppUrl, hasWhatsAppContact } from "../../../utils/whatsapp";

export default function FeaturedSkincare({ products }) {
  // Fall back to the filtered list from state props, or default to the featured central matrix data
  const displayList = products || skincareProducts.filter((product) => product.isFeatured);

  const handleInstantOrder = (product) => {
    const url = createWhatsAppUrl(
      `Hello! I would like to order ${product.name} for ${product.price}. Please share payment and delivery details.`,
    );

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign("/contact");
    }
  };

  return (
    <section id="skincare-grid" className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
              Our Favorites
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Featured Products
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              Handpicked formulation staples engineered to deliver visible, glowing results for your daily regimen.
            </p>
          </div>
        </div>

        {/* Product Grid Matrix Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {displayList.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-[#F2E3D5] rounded-2xl p-3 sm:p-4 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-md transition-all duration-300 group relative h-full"
            >
              {/* Top Section: Image + Info */}
              <div className="flex flex-col flex-1">
                {/* Image Frame Container Shell */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7] border border-[#F1E7DE]/30 relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable="false"
                  />

                  {/* Ribbon Badge */}
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-[#E07A5F] text-white font-serif font-bold text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-md shadow-2xs select-none">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Title & Metrics */}
                <div className="flex flex-col items-start text-left space-y-1 mb-4">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#A47E6C]">
                    {product.category || "Skincare"}
                  </span>
                  <h3 className="font-serif font-bold text-[#4A3B32] text-xs sm:text-sm md:text-base leading-snug group-hover:text-[#E07A5F] transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="font-sans font-extrabold text-[#E07A5F] text-xs sm:text-sm pt-0.5">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Bottom Section: Perfectly Aligned Elegant Social Grid Buttons */}
             <div className="pt-2 mt-auto border-t border-[#F1E7DE]/40">
                <button
                  type="button"
                  onClick={() => handleInstantOrder(product)}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C85D45] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#AD4B37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                  {hasWhatsAppContact ? "Order on WhatsApp" : "Ask about this product"}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}