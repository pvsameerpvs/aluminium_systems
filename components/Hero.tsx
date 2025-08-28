// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background image with black overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-left-bottom bg-cover bg-no-repeat will-change-transform"
          style={{ backgroundImage: "url('/hero.jpg')" }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        {/* Black shade overlay (adjust opacity as needed) */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content pinned bottom-left */}
      <div className="relative container-max flex h-full items-end pb-16 md:pb-24">
        <div>
          <p className="mb-2 text-sm tracking-wider font-thin uppercase text-zinc-300">
            Services / Aluminium Systems
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-thin"
          >
            ALUMINUM SYSTEMS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-sm  font-thin md:text-lg text-zinc-300"
          >
            CONTEMPORARY SYSTEMS, SEAMLESS INTEGRATION
          </motion.p>
        </div>
      </div>
    </section>
  );
}
