import React from "react";
import MakeupHero from "../components/modules/makeup/MakeupHero";
import MakeupCategoryFilters from "../components/modules/makeup/MakeupCategoryFilters";
import MakeupFeatured from "../components/modules/makeup/MakeupFeatured";
import MakeupBestSellers from "../components/modules/makeup/MakeupBestSellers";
import MakeupProductsGrid from "../components/modules/makeup/MakeupProductsGrid";
function Makeup() {

  return (
    <div>
    <MakeupHero/>
    <MakeupFeatured/>
    <MakeupBestSellers/>
    <MakeupProductsGrid/>
    </div>
  );
}

export default Makeup;