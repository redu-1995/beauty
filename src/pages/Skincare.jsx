// src/pages/Home.jsx
import React from "react";
import SkincareHero from "../components/Modules/skincare/SkincareHero";
import ShopByConcern from "../components/Modules/skincare/ShopByConcern";
export default function SkincarePage() {
  return (
    <div className="w-full flex flex-col">
      <SkincareHero />
     <ShopByConcern />
      {/* Other landing page sections go here */}
    </div>
  );
}