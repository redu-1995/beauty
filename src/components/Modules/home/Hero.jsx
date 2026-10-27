// 1. Import Link from your router kit to drive navigation actions
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#FFFBF7] pt-16 md:pt-14">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 md:px-12 md:py-12">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-12">
          <div className="order-2 flex flex-col items-start text-left md:order-1">
            <span className="mb-3 inline-flex items-center rounded-full bg-[#FBE7D6] px-3 py-1.5 text-xs font-semibold text-[#705A4F]">
              Premium beauty essentials
            </span>
            <h1 className="max-w-xl font-serif text-3xl font-bold leading-tight text-[#4A3B32] sm:text-4xl lg:text-5xl">
              Beauty That Enhances Your <span className="text-[#C85D45]">Natural Glow</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-[#5F4A40] sm:text-base">
              Shop skincare, makeup, haircare, and fragrance, delivered across Addis Ababa.
            </p>
            <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#AD4B37] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#913D2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
              >
                Shop Products
              </Link>
              <Link
                to="/categories"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#C85D45] px-7 py-3 text-sm font-semibold text-[#9F422F] transition hover:bg-[#FFF3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-lg md:order-2">
            <img
              src={heroImage}
              alt="A woman applying skincare to her cheek"
              className="h-60 w-full rounded-xl object-cover object-[center_35%] sm:h-72 md:h-auto md:max-h-[520px] md:rounded-none md:object-contain md:object-center"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}