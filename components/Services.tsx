// components/Services.tsx
"use client";
import { motion } from "framer-motion";

export default function Services() {
  const items = [
    {
      title: "COMPLIMENTARY INSTALLATION",
      body: "We offer complimentary professional installation by our in-house technicians to ensure flawless execution on every project.",
    },
    {
      title: "MADE-TO-MEASURE ARCHITECTURE",
      body: "Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision.",
    },
    {
      title: "PATENTED DESIGNS",
      body: "Our systems are designed to be embedded in the architecture—not added onto it. They align perfectly with joinery, wall cladding, and interior finishes.",
    },
  ];

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white border-b border-zinc-200 dark:border-zinc-800">
      <div className="container-max py-16 md:py-24">
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12"
        >
          {items.map((x) => (
            <motion.div key={x.title} variants={item}>
              <h3 className="text-xl md:text-2xl font-thin uppercase tracking-[0.08em] leading-snug text-zinc-900">
                {x.title}
              </h3>
              <p className="mt-6 text-[15px] font-thin leading-relaxed text-zinc-500">
                {x.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
