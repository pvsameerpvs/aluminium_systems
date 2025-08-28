// components/OtherService.tsx
export default function OtherService() {
  const items = [
    { title: "INTERIOR FIT OUT", src: "/projects/modern-profiles.jpg" },
    { title: "INTERIOR DESIGN", src: "/projects/integration.jpg" },
    { title: "ARCHITECTURE DESIGN", src: "/projects/modularity.jpg" },
  ];

  return (
    <section className="bg-white border-b border-zinc-200">
      <div className="container-max pt-12 md:pt-16">
        <h2
          className="mb-8 md:mb-10  text-[18px] md:text-[24px] font-thin tracking-[0.06em] text-zinc-800
"
        >
          OTHER SERVICES
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 pb-16">
          {items.map((it) => (
            <li key={it.title} className="group">
              {/* square tile + bottom border */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-200 border-b border-zinc-200">
                {/* image */}
                <img
                  src={it.src}
                  alt={it.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-safe:group-hover:scale-[1.03] will-change-transform"
                  loading="lazy"
                />

                {/* dark overlay (like screenshot) */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />

                {/* centered label */}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-white uppercase tracking-[0.14em] text-sm md:text-base">
                    {it.title}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
