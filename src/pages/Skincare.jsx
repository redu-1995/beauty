// src/pages/Home.jsx
import React from "react";
import SkincareHero from "../components/Modules/skincare/SkincareHero";
import ShopByConcern from "../components/Modules/skincare/ShopByConcern";
import FeaturedSkincare from "../components/Modules/skincare/FeaturedSkincare";
import ProductFilters from "../components/Modules/skincare/ProductFilters";
export default function SkincarePage() {
  return (
    <div className="w-full flex flex-col">
      <SkincareHero />
     <ShopByConcern />
     <FeaturedSkincare/>
     <ProductFilters/>
      {/* Other landing page sections go here */}
    </div>
  );
}