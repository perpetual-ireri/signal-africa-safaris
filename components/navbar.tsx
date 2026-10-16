"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Safaris", href: "/#safaris" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Our Services", href: "/#hire" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top contact bar ─────────────────────────── */}
      <div className="hidden md:block bg-[#14291f] text-white text-sm">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="flex items-center gap-2 hover:text-[#d4a24c]"
            >
              <Phone size={14} /> {CONTACT.phone}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#d4a24c]"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-[#d4a24c]"
            >
              <Mail size={14} /> {CONTACT.email}
            </a>
          </div>
          <span className="text-[#d4a24c]">
            Kenya&apos;s Leading Tours &amp; Travel Company
          </span>
        </div>
      </div>

      {/* ── Milky glassmorphism navbar ─────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
          scrolled
            ? "bg-white/75 border-white/50 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)] py-1.5"
            : "bg-white/60 border-white/35 py-2.5"
        }`}
      >
        {/* Subtle inner highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

        <nav className="container-custom relative flex items-center justify-between">
          {/* ── LEFT: Navigation Links ─────────────── */}
          <div className="hidden lg:flex flex-1 items-center justify-start">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-800 hover:text-[#1f5e3b] transition-colors relative group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a24c] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Mobile: hamburger on the left ──────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#14291f]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* ── CENTER-RIGHT: Logo with frosted circle ── */}
          <Link
            href="/"
            aria-label="Signal Africa Safaris — Home"
            className="group flex items-center leading-none mx-4 lg:mx-8 flex-shrink-0"
          >
            <div
              className="
                relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex-shrink-0
                rounded-full
                bg-white/50
                backdrop-blur-md
                ring-1 ring-white/70
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_4px_16px_-4px_rgba(0,0,0,0.08)]
                p-1.5
                transition-all duration-500
                group-hover:bg-white/70
                group-hover:ring-white/90
                group-hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_20px_-4px_rgba(0,0,0,0.12)]
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo.png"
                  alt="Signal Africa Safaris Logo"
                  fill
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                  quality={90}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* ── RIGHT: CTA Button ─────────────────── */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <Link href="/#contact" className="btn-primary text-sm">
              Plan Your Safari
            </Link>
          </div>

          {/* Mobile spacer for grid balance */}
          <div className="lg:hidden w-10" aria-hidden="true" />
        </nav>

        {/* ── Mobile menu dropdown ─────────────────── */}
        {isOpen && (
          <div className="lg:hidden relative bg-white/85 backdrop-blur-xl border-t border-white/40 mt-2">
            <ul className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-800 font-medium hover:text-[#1f5e3b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full"
                >
                  Plan Your Safari
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}