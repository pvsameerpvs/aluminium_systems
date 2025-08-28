// components/MaterialsRow.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MaterialsRow() {
  return (
    <section className="bg-white border-y border-zinc-200 ">
      <div className="mx-auto pl-0 pl-4 md:pl-6">
        <div className="md:flex md:items-center md:gap-12 font-thin">
          {/* LEFT: 5/12 */}
          <motion.div
            className="py-12 md:py-16 md:w-5/12"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="uppercase text-sm tracking-[0.22em] text-zinc-400">
              Materials
            </p>

            <h3 className="mt-6 uppercase  text-2xl  leading-tight">
              <span className="block text-zinc-500  text-2xl md:text-2xl">
                Unlike plastics,
              </span>
              <span className="block text-zinc-900 font-normal text-2xl md:text-2xl font-light">
                Aluminum is 100% recyclable.
              </span>
              <span className="block text-zinc-500 text-2xl md:text-2xl font-thin">
                Moreover, approximately 70% of it
              </span>
              <span className="block text-zinc-500 font-light text-2xl md:text-2xl">
                produced is still in use.
              </span>
            </h3>

            <Link
              href="/projects"
              className="mt-8 inline-flex  font-light items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium uppercase tracking-wide hover:bg-zinc-50"
            >
              View Projects
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </motion.div>

          {/* RIGHT: 7/12 */}
          <div className="md:w-7/12">
            <motion.div
              className="relative aspect-[16/10] md:aspect-[7/5] lg:aspect-[3/2] group"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/cutting-glass.png"
                alt="CNC machining spray — aluminum production"
                fill
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                priority
                sizes="(min-width: 1024px) 720px, (min-width: 768px) 560px, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
