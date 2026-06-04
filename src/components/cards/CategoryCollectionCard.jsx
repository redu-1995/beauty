import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCollectionCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <div className="bg-[#FFF6F0] rounded-2xl p-6 border border-[#F0E2D5] flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300">

      {/* Category Showcase Image */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white shadow-xs">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category Title */}
      <h3 className="text-base font-serif font-bold text-[#4A3B32] mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-[#705A4F] font-medium max-w-[200px] leading-relaxed min-h-[36px] mb-4">
        {description}
      </p>

      {/* Navigation CTA */}
      <Link
        to={link}
        className="bg-[#E07A5F] text-white font-semibold text-xs px-6 py-2 rounded-xl shadow-xs hover:bg-[#d0694e] transition duration-200"
      >
        Explore
      </Link>

    </div>
  );
}