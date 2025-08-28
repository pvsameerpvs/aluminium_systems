// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-100 border-t border-zinc-200">
      <div className="container-max">
        {/* Top band */}
        <div className="bg-zinc-100 px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div>
              <h2 className="uppercase text-zinc-900 leading-[1.05] font-light text-3xl sm:text-4xl md:text-4xl">
                IDEAS COME TO LIFE
                <br />
                WITH CONVERSATION.
              </h2>
              <p className="mt-4 sm:mt-5 uppercase text-zinc-800 font-thin text-xl sm:text-2xl md:text-3xl">
                INFO@RAYFITOUT.COM
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center border border-zinc-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 uppercase tracking-wide text-sm md:text-base hover:bg-white"
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

        {/* Divider */}
        <div className="border-t border-zinc-200" />

        {/* Addresses row */}
        <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12">
            <div className="uppercase text-sm text-zinc-900">OFFICE</div>

            <div>
              <div className="uppercase text-sm text-zinc-900">DUBAI, UAE</div>
              <p className="mt-2 text-zinc-600 text-sm font-thin leading-relaxed">
                23, ST 35, AL QUSAIS 5
                <br />
                +971 800 729 43
              </p>
            </div>

            <div>
              <div className="uppercase text-sm text-zinc-900">
                RIYADH, SAUDI ARABIA
              </div>
              <p className="mt-2 text-zinc-600 font-thin text-sm leading-relaxed">
                LEVEL 6, GATE D, AL AKARIA PLAZA, RIYADH
                <br />
                SAUDI ARABIA.
                <br />+ 966 800 891 2050
              </p>
            </div>

            <div>
              <div className="uppercase text-sm text-zinc-900">
                NAIROBI, KENYA
              </div>
              <p className="mt-2 text-zinc-600 font-thin text-sm leading-relaxed">
                OFFICE 2504, BRITAM TOWER, HOSPITAL HILL
                <br />
                ROAD, UPPERHILL, KENYA
                <br />
                +254 2076 40228
              </p>
            </div>
          </div>
        </div>

        {/* Emails row */}
        <div className="border-t border-zinc-200" />
        <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
            <div className="uppercase text-sm text-zinc-900">BUSINESS</div>

            <div>
              <div className="uppercase text-sm text-zinc-900">INQUIRIES</div>
              <a
                href="mailto:info@rayfitout.com"
                className="mt-2 inline-block font-thin text-zinc-800 text-sm underline underline-offset-4 break-words"
              >
                INFO@RAYFITOUT.COM
              </a>
            </div>

            <div>
              <div className="uppercase text-sm text-zinc-900">CAREER</div>
              <a
                href="mailto:hr@rayfitout.com"
                className="mt-2 inline-block text-zinc-800 font-thin text-sm underline underline-offset-4 break-words"
              >
                HR@RAYFITOUT.COM
              </a>
            </div>

            <div>
              <div className="uppercase text-sm text-zinc-900">SUPPLIERS</div>
              <a
                href="mailto:procurement@rayfitout.com"
                className="mt-2 inline-block text-zinc-800 font-thin text-sm underline underline-offset-4 break-words"
              >
                PROCUREMENT@RAYFITOUT.COM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200" />
        <div className="px-4 sm:px-6 md:px-12 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-4 text-[12px] md:text-xs uppercase tracking-widest text-zinc-600">
            <div className="text-center sm:text-left">PRIVACY POLICY</div>

            <div className="text-center space-x-8">
              <a href="#" className="hover:underline font-thin">
                YOUTUBE
              </a>
              <a href="#" className="hover:underline font-thin">
                PINTEREST
              </a>
            </div>

            <div className="text-center sm:text-right font-thin">
              © 2025 RAYFITOUT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
