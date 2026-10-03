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
      {/* Top bar */}
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
        {/* Subtle inner highlight so it reads as glass, not flat white */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />

        <nav className="container-custom relative flex items-center justify-between">
          {/* Logo only */}
          <Link
            href="/"
            aria-label="Signal Africa Safaris — Home"
            className="flex items-center leading-none"
          >
            <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Signal Africa Safaris Logo"
                fill
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                quality={90}
                className="object-contain rounded-full scale-105 drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#1f5e3b] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a24c] group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/#contact" className="btn-primary text-sm">
              Plan Your Safari
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#14291f]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

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