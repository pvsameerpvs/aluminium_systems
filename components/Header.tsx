// components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when viewport becomes >= md
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Close menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur"
          : "border-b border-transparent bg-transparent",
        "text-white",
      ].join(" ")}
    >
      <div className="container-max flex h-16 items-center justify-between px-4 md:px-0 lg:px-0">
        {/* Logo on the left */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Logo className="h-6 w-auto" />
          </motion.div>
        </Link>

        {/* Nav on the right (desktop & tablet as you currently have it) */}
        <nav className="hidden font-thin md:flex items-center gap-8 text-[13px] tracking-widest uppercase">
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              Projects
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              Services
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              Systems
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              Products
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              About
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
          <Link href="#" className="opacity-90 hover:opacity-100 transition">
            <span className="relative inline-block">
              Contact
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] w-full bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
              />
            </span>
          </Link>
        </nav>

        {/* Hamburger (mobile only, does not affect your current desktop/tablet nav) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-11 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          {/* Animated burger icon */}
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-[1px] w-full bg-white transition-transform duration-200 ${
                open
                  ? "translate-y-[6px] rotate-45"
                  : "-translate-y-[0px] rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1px] w-full bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-80"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1px] w-full bg-white transition-transform duration-200 ${
                open
                  ? "-translate-y-[6px] -rotate-45"
                  : "translate-y-[0px] rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Slide-over mobile menu */}
      {open && (
        <div className="md:hidden">
          {/* overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[61] h-full w-[85%] max-w-[320px] border-l border-white/10 bg-black/90 p-6 backdrop-blur"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <Logo className="h-6 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              >
                <span className="relative block h-3 w-3">
                  <span className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5 text-sm uppercase tracking-widest">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Projects
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Services
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Systems
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Products
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                About
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="opacity-90 hover:opacity-100"
              >
                Contact
              </Link>
            </nav>
          </motion.aside>
        </div>
      )}
    </motion.header>
  );
}
