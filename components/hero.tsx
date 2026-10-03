"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────
// PACKAGE DATA — each package has its own background image
// ─────────────────────────────────────────────
const packages = [
  {
    id: "mombasa-sgr",
    title: "2026 Mombasa SGR Package",
    duration: "3 Days 2 Nights",
    validity: "Valid till 21st Dec",
    hotel: "Mombasa Budget Beach Hotel",
    price: "From Kes.16,500",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
  {
    id: "maasai-mara",
    title: "Maasai Mara Migration Special",
    duration: "4 Days 3 Nights",
    validity: "Valid till 31st Oct",
    hotel: "Mara Sopa Lodge",
    price: "From Kes.42,000",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
  {
    id: "diani-beach",
    title: "Diani Beach Getaway",
    duration: "5 Days 4 Nights",
    validity: "Valid till 20th Dec",
    hotel: "Diani Sea Resort",
    price: "From Kes.28,500",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
  {
    id: "amboseli",
    title: "Amboseli and Kilimanjaro Views",
    duration: "3 Days 2 Nights",
    validity: "Valid till 15th Dec",
    hotel: "Amboseli Sentrim Camp",
    price: "From Kes.35,000",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
  {
    id: "nairobi-national-park",
    title: "Nairobi National Park Day Trip",
    duration: "1 Day",
    validity: "Daily Departures",
    hotel: "Nairobi City Tour",
    price: "From Kes.8,500",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
  {
    id: "lake-nakuru",
    title: "Lake Nakuru Flamingo Escape",
    duration: "2 Days 1 Night",
    validity: "Valid till 30th Nov",
    hotel: "Sarova Woodlands",
    price: "From Kes.22,000",
    priceNote: "Per person sharing",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80",
    href: "/#contact",
  },
];

export default function FeaturedPackages() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % packages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + packages.length) % packages.length);
  }, []);

  // Auto-advance every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const pkg = packages[current];

  return (
    <section
      id="packages"
      className="relative h-[90vh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ───────────────────────────── */}
      {/* BACKGROUND IMAGES (crossfade) */}
      {/* ───────────────────────────── */}
      {packages.map((p, i) => (
        <div
          key={p.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${p.image}')` }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* ───────────────────────────── */}
      {/* CONTENT PANEL */}
      {/* ───────────────────────────── */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          {/* Title bar */}
          <div className="bg-white px-6 py-4 md:px-10 md:py-6 shadow-2xl">
            <h2 className="font-brand text-2xl md:text-4xl lg:text-5xl font-bold text-[#1f5e3b] uppercase tracking-wide leading-tight">
              {pkg.title}
            </h2>
          </div>

          {/* Duration */}
          <div className="bg-white/95 inline-block px-6 py-2 md:px-8 md:py-3 mt-3 shadow-lg">
            <p className="font-brand text-xl md:text-3xl font-bold text-[#b91c1c] uppercase tracking-wide">
              {pkg.duration}
            </p>
          </div>

          {/* Validity */}
          <div className="bg-white/90 inline-block px-5 py-1.5 md:px-7 md:py-2 mt-2 shadow">
            <p className="text-sm md:text-lg font-semibold text-[#b91c1c]">
              {pkg.validity}
            </p>
          </div>

          {/* Hotel */}
          <div className="bg-white/90 block mx-auto w-fit px-5 py-1.5 md:px-7 md:py-2 mt-2 shadow">
            <p className="text-xs md:text-base font-medium text-[#1f5e3b]">
              {pkg.hotel}
            </p>
          </div>

          {/* Price */}
          <div className="bg-white block mx-auto w-fit px-8 py-3 md:px-12 md:py-4 mt-4 shadow-2xl">
            <p className="font-brand text-2xl md:text-4xl lg:text-5xl font-bold text-[#dc2626]">
              {pkg.price}
            </p>
            <p className="text-xs md:text-sm text-[#1f5e3b] font-medium mt-1">
              {pkg.priceNote}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-7">
            <Link
              href={pkg.href}
              className="btn-primary inline-block text-base md:text-lg px-10 py-4 shadow-xl"
            >
              Book This Package
            </Link>
          </div>
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* CAROUSEL CONTROLS */}
      {/* ───────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous package"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/80 hover:bg-white text-[#14291f] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={next}
        aria-label="Next package"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/80 hover:bg-white text-[#14291f] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={26} />
      </button>

      {/* ───────────────────────────── */}
      {/* DOT INDICATORS */}
      {/* ───────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {packages.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to ${p.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-[#d4a24c]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full">
        {current + 1} / {packages.length}
      </div>
    </section>
  );
}