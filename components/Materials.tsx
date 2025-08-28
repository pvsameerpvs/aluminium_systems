// components/Materials.tsx
"use client";
import { motion } from "framer-motion";

export default function Materials() {
  return (
    <section className="container-max font-thin py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className=" text-sm leading-relaxed tracking-wide text-zinc-500"
      >
        Our aluminum joinery collection is designed not merely as functional
        elements, but as architectural statements. Every door, partition, and
        wardrobe system reflects a deliberate interplay of proportion, material,
        and technology—where nothing is exposed, yet everything is experienced.
        Our aluminum joinery collection is designed not merely as functional
        elements, but as architectural statements. Every door, partition, and
        wardrobe system reflects a deliberate interplay of proportion, material,
        and technology—where nothing is exposed, yet everything is experienced.
        Our aluminum joinery collection is designed not merely as functional
        elements, but as architectural statements. Every door, partition, and
        wardrobe system reflects a deliberate interplay of proportion, material,
        and technology—where nothing is exposed, yet everything is experienced.
      </motion.p>
    </section>
  );
}
