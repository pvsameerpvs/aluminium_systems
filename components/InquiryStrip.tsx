// components/InquiryStrip.tsx
import Link from "next/link";

export default function InquiryStrip() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto px-4 md:px-6">
        {/* Light gray band */}
        <div className="bg-zinc-100 px-6 md:px-12 py-16 md:py-20">
          <div className="flex items-center justify-between gap-6">
            <h2 className="uppercase text-zinc-900 text-2xl md:text-2xl font-light">
              HAVE A PROJECT IN MIND ?
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center font-light justify-center border border-zinc-900 px-6 md:px-8 py-4 text-sm md:text-base uppercase tracking-wide hover:bg-white"
            >
              DROP AN INQUIRY
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
          </div>
        </div>
      </div>
    </section>
  );
}
