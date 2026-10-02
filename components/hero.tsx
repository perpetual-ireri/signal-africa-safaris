import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

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
          and South Africa. Experience the Great Migration, pristine beaches and
          unforgettable wildlife encounters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#safaris" className="btn-secondary text-base px-8 py-4">
            Explore Safaris
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#14291f] transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-white/20 pt-8">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5,000+", label: "Happy Travellers" },
            { value: "6", label: "African Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-brand text-3xl md:text-4xl font-bold text-[#d4a24c]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-200 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

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