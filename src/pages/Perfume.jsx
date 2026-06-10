import React, { useState } from "react";
import PerfumeHero from "../components/modules/perfume/PerfumeHero";
function Perfume() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
     <PerfumeHero />
    </div>
  );
}

export default Perfume;