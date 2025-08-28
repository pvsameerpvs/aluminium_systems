// components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <div className="container-max flex h-16 items-center justify-between">
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

        {/* Nav on the right */}
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
      </div>
    </motion.header>
  );
}
