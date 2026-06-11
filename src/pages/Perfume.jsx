import React, { useState } from "react";
import PerfumeHero from "../components/Modules/perfume/PerfumeHero.jsx";
import FragranceFamilyFilter from "../components/Modules/perfume/FragranceFamilyFilter.jsx";
import FeaturedFragrances from "../components/Modules/perfume/FeaturedFragrances.jsx";
import PerfumeCollection from "../components/Modules/perfume/PerfumeCollection.jsx";
import SignatureScentFinder from "../components/Modules/perfume/SignatureScentFinder.jsx";
import PerfumeNotesEducation from "../components/Modules/perfume/PerfumeNotesEducation.jsx";
import WhyChooseFragrances from "../components/Modules/perfume/WhyChooseFragrances.jsx";
import PerfumeReviews from "../components/Modules/perfume/PerfumeReviews.jsx";
import PerfumeFAQ from "../components/Modules/perfume/PerfumeFAQ.jsx";
function Perfume() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
     <PerfumeHero />
     <FragranceFamilyFilter activeFamily={activeCategory} onFamilyChange={setActiveCategory} />
     <FeaturedFragrances />
     <PerfumeCollection activeFamily={activeCategory} onFamilyChange={setActiveCategory} />
    <SignatureScentFinder />
    <PerfumeNotesEducation />
    <WhyChooseFragrances />
    <PerfumeReviews />
    <PerfumeFAQ/>
    </div>
  );
}

export default Perfume;