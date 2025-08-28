// components/Projects.tsx
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const items = [
    { title: "MODERN PROFILES", src: "/projects/modern-profiles.jpg" },
    { title: "INTEGRATION", src: "/projects/integration.jpg" },
    { title: "MODULARITY", src: "/projects/modularity.jpg" },
  ];

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="bg-white border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="container-max pt-16 md:pt-24">
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 pb-16 gap-x-10 gap-y-10"
        >
          {items.map((it) => (
            <motion.li key={it.title} variants={item} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-200">
                {/* Image */}
                <img
                  src={it.src}
                  alt={it.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-safe:group-hover:scale-[1.03] will-change-transform"
                  loading="lazy"
                />

                {/* Permanent black overlay + darken on hover */}
                <div className="absolute inset-0 bg-black/35 transition-colors duration-300 motion-safe:delay-100 group-hover:bg-black/55" />

                {/* Centered label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white uppercase tracking-[0.14em] text-sm md:text-base transition-all duration-300 motion-safe:delay-150 motion-safe:group-hover:opacity-100 motion-safe:group-hover:translate-y-0 opacity-95 translate-y-0">
                    {it.title}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom-left heading */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-[18px] md:text-[24px] font-thin tracking-[0.06em] text-zinc-800"
        >
          ABOUT OUR PRODUCTS & SERVICES
        </motion.h3>
      </div>
    </section>
  );
}
