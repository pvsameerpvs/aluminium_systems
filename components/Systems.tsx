// components/Systems.tsx
"use client";
import { motion } from "framer-motion";

export default function Systems() {
  const items: { title: string; src: string }[] = [
    { title: "DOORS", src: "/systems/doors.jpg" },
    { title: "WINDOWS", src: "/systems/windows.png" },
    { title: "PARTITIONS", src: "/systems/partitions.png" },
    { title: "PERGOLAS", src: "/systems/pergolas.png" },
    { title: "BULLET RESISTANT WINDOWS", src: "/systems/bullet-resistant.png" },
    { title: "CURTAIN WALLS & FACADES", src: "/systems/curtain-walls.png" },
  ];

  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white border-b border-zinc-200 dark:border-zinc-800">
      <div className="container-max py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-[28px] font-semibold tracking-tight"
        >
          OUR ALUMINIUM SYSTEMS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 text-sm md:text-base text-zinc-500"
        >
          Expert craftsmanship in aluminium systems, offering fit your unique
          space.
        </motion.p>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {items.map((it) => (
            <motion.li key={it.title} variants={itemVariants} className="group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
                {/* Image */}
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-safe:group-hover:scale-[1.03] will-change-transform"
                />
                {/* Permanent overlay + darken on hover */}
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 motion-safe:group-hover:bg-black/50" />
              </div>

              {/* Caption */}
              <div className="mt-4 text-[13px] uppercase tracking-[0.08em] text-zinc-700">
                {it.title}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
