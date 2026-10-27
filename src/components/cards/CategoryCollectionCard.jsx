import { Link } from "react-router-dom";

export default function CategoryCollectionCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <Link
      to={link}
      className="group flex min-h-full flex-col rounded-lg border border-[#F0E2D5] bg-[#FFF6F0] p-3 text-left transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32] sm:p-4"
    >
      <div className="mb-3 aspect-[4/3] w-full overflow-hidden rounded-md bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-sm font-bold text-[#4A3B32] sm:text-base">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-[#5F4A40]">{description}</p>
      <span className="mt-auto inline-flex min-h-10 items-center gap-2 pt-2 text-xs font-semibold text-[#9F422F]">
        Shop {title}<i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
      </span>
    </Link>
  );
}