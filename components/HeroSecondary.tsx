// components/HeroSecondary.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSecondary() {
  return (
    <section className="bg-white">
      {/* White gaps top/bottom */}
      <div className="h-10 md:h-14" />

      {/* Full-width hero */}
      <div className="relative w-full min-h-[72vh] md:min-h-[78vh]">
        {/* Image */}
        <img
          src="/hero-2.jpg"
          alt="Seamless integration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content with exact-like paddings */}
        <div className="absolute inset-0 grid grid-cols-12 items-center">
          {/* Left text block */}
          <div className="col-span-12 md:col-span-7 flex items-center">
            {/* Left padding: ~64/88/112px */}
            <div className="pl-[64px] md:pl-[88px] lg:pl-[112px]">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] md:text-xs font-thin tracking-[0.22em] uppercase text-white/80"
              >
                Seamless <span className="font-medium">Integration</span>
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 md:mt-4 font-thin text-2xl md:text-4xl leading-[1.2] text-white font-semibold max-w-[36rem]"
              >
                BESPOKE SYSTEMS,
                <br className="hidden sm:block" />
                <span className="font-light">CUSTOM MADE FOR YOUR SPACE</span>
              </motion.h3>
            </div>
          </div>

          {/* Right CTA */}
          <div className="col-span-12 md:col-span-5 mt-8 md:mt-0 flex md:justify-end">
            {/* Right padding: ~64/88/112px */}
            <div className="pr-[64px] md:pr-[88px] lg:pr-[112px]">
              <Link
                href="#contact"
                aria-label="Drop an inquiry"
                className="group inline-flex items-center font-thin gap-2 uppercase tracking-[0.14em] text-white text-sm md:text-base px-8 py-3 border border-white/70 hover:border-white transition"
              >
                Drop an inquiry
                {/* Icon nudge on hover + tap spring */}
                <motion.span whileTap={{ scale: 0.92 }} className="inline-flex">
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-14" />
    </section>
  );
}
