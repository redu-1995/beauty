// src/pages/Home.jsx
import React from "react";
import SkincareHero from "../components/modules/skincare/SkincareHero";
import ShopByConcern from "../components/modules/skincare/ShopByConcern";
import FeaturedSkincare from "../components/modules/skincare/FeaturedSkincare";
import ProductFilters from "../components/modules/skincare/ProductFilters";
import SkincareRoutine from "../components/modules/skincare/SkincareRoutine";
import SkincareReviews from "../components/modules/skincare/SkincareReviews";
export default function SkincarePage() {
  return (
    <div className="w-full flex flex-col">
      <SkincareHero />
     <ShopByConcern />
     <FeaturedSkincare/>
     <SkincareRoutine />
     <SkincareReviews/>
      {/* Other landing page sections go here */}
    </div>
  );
}