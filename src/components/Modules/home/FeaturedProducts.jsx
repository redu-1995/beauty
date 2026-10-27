// src/components/home/FeaturedProducts.jsx

import { Link } from "react-router-dom";
import { ALL_PRODUCTS } from "../../../data/products";
import { createWhatsAppUrl, hasWhatsAppContact } from "../../../utils/whatsapp";

export default function FeaturedProducts() {
  const featuredProducts = ALL_PRODUCTS.slice(0, 4);

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-6 md:py-14 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-7 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#705A4F] font-semibold">
            Best Sellers
          </span>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold font-serif text-[#4A3B32]">
            Featured Products
          </h2>

          <p className="mt-2 text-sm text-[#5F4A40] max-w-2xl mx-auto">
            Shop skincare, makeup, haircare, and fragrances for your daily routine.
          </p>
        </div>

        <div className="mb-7 grid gap-3 border-y border-[#F1E7DE] py-4 text-sm sm:grid-cols-3 sm:gap-5">
          <p className="flex items-center gap-2 text-[#4A3B32]"><i className="fa-solid fa-location-dot text-[#C85D45]" aria-hidden="true"></i><span><strong>Delivery area:</strong> Addis Ababa</span></p>
          <p className="flex items-center gap-2 text-[#4A3B32]"><i className="fa-solid fa-truck-fast text-[#C85D45]" aria-hidden="true"></i><span><strong>Typical delivery:</strong> 1–3 business days</span></p>
          <Link to="/contact" className="flex min-h-11 items-center gap-2 font-semibold text-[#9F422F] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"><i className="fa-regular fa-comment-dots text-[#C85D45]" aria-hidden="true"></i>Ask a question</Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {featuredProducts.map((product) => {
            const orderUrl = createWhatsAppUrl(`Hello! I would like to order ${product.name} for ETB ${product.price}. Please share payment and delivery details.`);

            return (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-[#F1E7DE] bg-[#FAF7F4] transition-shadow duration-300 hover:shadow-md"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden">

                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 bg-[#E07A5F] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">

                <span className="text-[10px] uppercase tracking-wider text-[#705A4F] sm:text-xs">
                  {product.category}
                </span>

                <h3 className="mt-1 min-h-10 text-sm font-semibold leading-snug text-[#4A3B32] line-clamp-2 sm:text-base">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="mt-2 flex items-center">
                  <span className="text-base font-bold text-[#9F422F] sm:text-lg">
                    ETB {product.price}
                  </span>
                </div>
                {orderUrl ? (
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#AD4B37] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#913D2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32] sm:text-sm"
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>Order on WhatsApp
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-[#C85D45] px-2 py-2 text-center text-xs font-semibold text-[#9F422F] transition hover:bg-[#FFF3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32] sm:text-sm"
                  >
                    Ask about this product
                  </Link>
                )}
              </div>

            </div>
            );
          })}

        </div>

        {/* View All Products */}
        {!hasWhatsAppContact && (
          <p className="mt-5 text-center text-xs text-[#5F4A40]">
            WhatsApp ordering is being set up. You can ask us about any product through <Link to="/contact" className="font-semibold text-[#9F422F] underline">Contact</Link>.
          </p>
        )}

        <div className="mt-7 flex justify-center">
          <Link
            to="/products"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#AD4B37] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#913D2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
          >
            Shop Products
          </Link>
        </div>

      </div>
    </section>
  );
}