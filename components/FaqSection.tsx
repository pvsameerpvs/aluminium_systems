// components/FaqSection.tsx
"use client";

import { useState } from "react";

type FaqItem = { q: string; a?: string };

const FAQS: FaqItem[] = [
  {
    q: "WHAT IS INTERIOR FIT OUT? (H3)",
    a: "Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },
  { q: "WHAT DO INTERIOR FIT OUT COMPANIES IN DUBAI DO?" },
  { q: "HOW LONG DOES AN INTERIOR FIT OUT TYPICALLY TAKE?" },
  { q: "WHAT IS THE SCOPE OF THE INTERIOR FIT OUT?" },
  { q: "HOW MUCH DOES AN INTERIOR FIT OUT COST?" },
  { q: "WHAT COUNTRIES DOES RAYFITOUT OPERATE IN?" },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0); // first row open (like the screenshot)

  return (
    <section className="bg-white">
      <div className="mx-auto px-6 md:px-6">
        <h2 className="text-zinc-900 uppercase tracking-wide text-2xl md:text-4xl font-light">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* Divider under title */}
        <div className="mt-6 border-t border-zinc-200">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-zinc-200">
              <button
                type="button"
                onClick={() => setOpen((o) => (o === i ? -1 : i))}
                className="flex w-full items-center justify-between py-6 md:py-7 text-left"
              >
                <span className="uppercase text-[15px] md:text-base text-zinc-900 font-thin">
                  {item.q}
                </span>

                {/* NE arrow like in the screenshot */}
                <svg
                  className="h-4 w-4 text-zinc-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              {open === i && item.a && (
                <p className="pb-6 md:pb-8 max-w-3xl text-sm leading-relaxed text-zinc-500">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
