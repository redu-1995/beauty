// src/components/home/WhyChooseUs.jsx

const features = [
  {
    id: 1,
    icon: "fa-shield-heart",
    title: "Authentic products",
  },
  {
    id: 2,
    icon: "fa-box-open",
    title: "7-day returns on eligible items",
  },
  {
    id: 3,
    icon: "fa-user-check",
    title: "Personal product support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full border-y border-[#F1E7DE] bg-[#FAF7F4] px-5 py-8 sm:px-6 md:py-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-xl font-bold text-[#4A3B32] md:max-w-xs md:text-2xl">
          Beauty shopping, made simple
        </h2>
        <div className="grid gap-3 sm:grid-cols-3 md:flex md:flex-1 md:justify-end md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex min-h-11 items-center gap-2 text-sm font-medium text-[#4A3B32]">
              <i className={`fa-solid ${feature.icon} text-[#C85D45]`} aria-hidden="true"></i>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}