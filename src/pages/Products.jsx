import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import { PRODUCTS_BY_TYPE, ALL_PRODUCTS } from "../data/products";

export default function Products() {
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Category Filtering
  let displayedProducts = activeCategory
    ? PRODUCTS_BY_TYPE[activeCategory]
    : ALL_PRODUCTS;

  // Search Filtering
  displayedProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting Logic
  if (selectedSort === "Price: L-H") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (selectedSort === "Price: H-L") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  if (selectedSort === "Newest") {
    displayedProducts = [...displayedProducts].reverse();
  }

  return (
    <div className="w-full flex flex-col bg-white">

      <header className="w-full border-b border-[#F1E7DE] bg-[#FFFBF7] px-4 pb-5 pt-24 text-center md:pb-7 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl font-bold leading-tight text-[#4A3B32] sm:text-3xl">
            Beauty Collection
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#5F4A40]">
            Shop skincare, makeup, haircare, and fragrance.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-6 md:py-6">

        {/* Breadcrumb + Controls */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="text-xs font-semibold flex items-center gap-2">

              <Link
                to="/"
                className="text-[#705A4F] hover:text-[#E07A5F] transition"
              >
                Home
              </Link>

              <span className="text-[#A47E6C]">&gt;</span>

              <Link
                to="/products"
                className="text-[#E07A5F]"
              >
                Products
              </Link>

            </div>

            <p className="mt-1 text-xs text-[#5F4A40]" aria-live="polite">
              Showing {displayedProducts.length} products
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">

            {/* Search */}
            <label className="sr-only" htmlFor="products-search">Search products</label>
            <input
              id="products-search"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="min-h-11 w-full rounded-lg border border-[#D8C6B7] bg-[#FFF5EB] px-4 text-sm text-[#4A3B32] placeholder:text-[#705A4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F422F] sm:w-56"
            />

            <label className="sr-only" htmlFor="products-sort">Sort products</label>
            <select
              id="products-sort"
              value={selectedSort}
              onChange={(event) => setSelectedSort(event.target.value)}
              className="min-h-11 w-full rounded-lg border border-[#D8C6B7] bg-[#FFF5EB] px-4 text-sm font-medium text-[#4A3B32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F422F] sm:w-auto"
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: L-H</option>
              <option>Price: H-L</option>
            </select>

          </div>
        </div>

        {/* Main Layout */}
        <div>
          <div role="group" aria-label="Filter products by category" className="mb-4 flex flex-wrap gap-2">
            {[
              { label: "All Products", value: null },
              { label: "Skincare", value: "skincare" },
              { label: "Makeup", value: "makeup" },
              { label: "Haircare", value: "haircare" },
              { label: "Perfumes", value: "perfumes" },
            ].map(({ label, value }) => (
              <button
                key={label}
                type="button"
                aria-pressed={activeCategory === value}
                onClick={() => setActiveCategory(value)}
                className={`min-h-11 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F422F] ${
                  activeCategory === value
                    ? "border-[#9F422F] bg-[#9F422F] text-white"
                    : "border-[#D8C6B7] bg-white text-[#4A3B32] hover:bg-[#FFF5EB]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <section aria-label="Product results">

            <div className="grid grid-cols-1 gap-4 min-[375px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">

              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                />
              ))}

            </div>

            {/* Empty State */}
            {displayedProducts.length === 0 && (
              <div className="rounded-lg border border-[#EADBC8] bg-[#FFFBF7] px-5 py-10 text-center sm:col-span-2 lg:col-span-3">
                <h2 className="font-serif text-xl font-bold text-[#4A3B32]">No products found</h2>
                <p className="mt-2 text-sm text-[#5F4A40]">Try another search or clear your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory(null);
                    setSelectedSort("Featured");
                  }}
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#9F422F] px-5 text-sm font-semibold text-[#9F422F] hover:bg-[#FFF3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9F422F]"
                >
                  Clear search and filters
                </button>
              </div>
            )}

          </section>

        </div>

      </div>

    </div>
  );
}