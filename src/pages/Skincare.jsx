// src/pages/Home.jsx
import React from "react";
import SkincareHero from "../components/Modules/skincare/SkincareHero";
import ShopByConcern from "../components/Modules/skincare/ShopByConcern";
import FeaturedSkincare from "../components/Modules/skincare/FeaturedSkincare";
export default function SkincarePage() {
  return (
    <div className="w-full flex flex-col">
      <SkincareHero />
     <ShopByConcern />
     <FeaturedSkincare/>
      {/* Other landing page sections go here */}
    </div>
  );
}