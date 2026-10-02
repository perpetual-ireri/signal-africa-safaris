"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Safaris", href: "/#safaris" },
  { label: "Destinations", href: "/#destinations" },
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

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
        }`}
      >
        <nav className="container-custom flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-brand text-2xl md:text-3xl font-bold text-[#1f5e3b]">
              Signal Africa Safaris
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#d4a24c] font-medium">
              Tours &amp; Travel · Kenya
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#1f5e3b] transition-colors relative group"
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
          <div className="lg:hidden bg-white border-t mt-2">
            <ul className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-[#1f5e3b]"
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