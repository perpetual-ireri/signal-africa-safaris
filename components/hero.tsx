"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles } from "lucide-react";

// ─────────────────────────────────────────────
// HERO SLIDES — local images in /public/images/
// ─────────────────────────────────────────────
const slides = [
  { id: "home0", image: "/images/home0.jpg", alt: "Safari landscape" },
  { id: "home1", image: "/images/home1.jpeg", alt: "Safari landscape in Kenya" },
  { id: "home2", image: "/images/home2.jpeg", alt: "Wildlife on the Maasai Mara" },
  { id: "home3", image: "/images/home3.jpeg", alt: "Elephants in Amboseli" },
  { id: "home4", image: "/images/home4.jpeg", alt: "Beach paradise in Diani" },
  { id: "home5", image: "/images/home5.jpeg", alt: "Gorilla trekking in Uganda" },
  { id: "home6", image: "/images/home6.jpeg", alt: "Sunset over the Serengeti" },
];

type HeroProps = {
  onOpenChat?: () => void;
};

export default function Hero({ onOpenChat }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images (crossfade) */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          role="img"
          aria-label={slide.alt}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Hero content */}
      <div className="relative z-10 container-custom text-center text-white">
        <p className="font-brand text-[#d4a24c] text-lg md:text-xl mb-4 tracking-wide">
          Welcome to Signal Africa Safaris
        </p>
        <h1 className="font-brand text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover the Magic of <br className="hidden md:block" />
          <span className="text-[#d4a24c]">Kenya and Beyond</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100 mb-10">
          Tailor-made safaris across Kenya, Uganda, Botswana, Tanzania, Rwanda
          and South Africa. Experience the Great Migration, pristine beaches
          and unforgettable wildlife encounters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#safaris" className="btn-secondary text-base px-8 py-4">
            Explore Safaris
          </Link>

          {/* Get a Free Quote → opens AI chat */}
          <button
            type="button"
            onClick={onOpenChat}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#14291f] transition-all duration-300"
          >
            <Sparkles size={18} className="text-[#d4a24c]" />
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={26} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#d4a24c]" : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full">
        {current + 1} / {slides.length}
      </div>

      {/* Scroll indicator */}
      <a
        href="#safaris"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}