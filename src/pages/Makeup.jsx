import React from "react";
import MakeupHero from "../components/Modules/makeup/MakeupHero.jsx";
import MakeupCategoryFilters from "../components/Modules/makeup/MakeupCategoryFilters.jsx";
import MakeupFeatured from "../components/Modules/makeup/MakeupFeatured.jsx";
import MakeupBestSellers from "../components/Modules/makeup/MakeupBestSellers.jsx";
import MakeupProductsGrid from "../components/Modules/makeup/MakeupProductsGrid.jsx";
import MakeupShopByConcern from "../components/Modules/makeup/MakeupShopByConcern.jsx";
import MakeupTrending from "../components/Modules/makeup/MakeupTrending.jsx";
import MakeupTestimonials from "../components/Modules/makeup/MakeupTestimonials.jsx";
function Makeup() {

  return (
    <div>
    <MakeupHero/>
    <MakeupFeatured/>
    <MakeupBestSellers/>
    <MakeupProductsGrid/>
    <MakeupShopByConcern/>
    <MakeupTrending/>
    <MakeupTestimonials/>
    </div>
  );
}

export default Makeup;