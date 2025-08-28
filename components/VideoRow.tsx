// components/VideoRow.tsx
"use client";
import { motion } from "framer-motion";

export default function VideoRow() {
  return (
    <section className="bg-white border-b border-zinc-200 dark:border-zinc-800 overflow-x-hidden">
      {/* top white gap */}
      <div className="h-10 md:h-14" />

      <div className="mx-auto ">
        {/* equal widths; both videos get the SAME height via aspect box */}
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-y-8 md:gap-y-0 md:gap-x-12">
          {/* Left */}
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[16/9] overflow-hidden"
            >
              <video
                src="/video-11.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/60" />
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[16/9] overflow-hidden"
            >
              <video
                src="/video-12.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/60" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* bottom white gap */}
      <div className="h-10 md:h-14" />
    </section>
  );
}
