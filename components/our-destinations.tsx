"use client";

import Link from "next/link";
import {
  africanDestinations,
  internationalPackages,
} from "@/data/destinations";

export default function OurDestinations() {
  return (
    <>
      {/* AFRICAN DESTINATIONS */}
      <section id="destinations" className="py-20 md:py-28 bg-[#e8f0e6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
              Where We Travel
            </p>
            <h2 className="section-title text-[#14291f] mx-auto">
              Our Destinations
            </h2>
            <p className="text-[#3a4f42] max-w-2xl mx-auto">
              Six extraordinary African countries. Countless unforgettable
              experiences waiting for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {africanDestinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative h-96 rounded-2xl overflow-hidden block shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${d.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-brand text-2xl md:text-3xl font-bold mb-1">
                    {d.name}
                  </h3>
                  <p className="text-[#d4a24c] text-sm font-medium mb-2">
                    {d.tagline}
                  </p>
                  <p className="text-xs text-gray-200 mb-2 opacity-90">
                    {d.spots}
                  </p>

                  <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-[11px] text-gray-300 leading-relaxed border-t border-white/20 pt-2 mt-1">
                      {d.detail}
                    </p>
                  </div>

                  <span className="inline-block mt-3 text-xs font-semibold text-[#d4a24c] group-hover:underline">
                    View Full Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL PACKAGES */}
      <section id="international" className="py-20 md:py-28 bg-[#f3f8f1]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
              Beyond Africa
            </p>
            <h2 className="section-title text-[#14291f] mx-auto">
              International Packages
            </h2>
            <p className="text-[#3a4f42] max-w-2xl mx-auto">
              Curated itineraries to the world&apos;s most sought-after
              destinations. From island escapes to ancient empires.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalPackages.map((p) => (
              <Link
                key={p.slug}
                href={`/destinations/${p.slug}`}
                className="group relative h-96 rounded-2xl overflow-hidden block shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="bg-[#d4a24c] text-[#14291f] text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-brand text-2xl md:text-3xl font-bold mb-1">
                    {p.name}
                  </h3>
                  <p className="text-[#d4a24c] text-sm font-medium mb-2">
                    {p.tagline}
                  </p>
                  <p className="text-xs text-gray-200 mb-2 opacity-90">
                    {p.spots}
                  </p>

                  <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-[11px] text-gray-300 leading-relaxed border-t border-white/20 pt-2 mt-1">
                      {p.detail}
                    </p>
                  </div>

                  <span className="inline-block mt-3 text-xs font-semibold text-[#d4a24c] group-hover:underline">
                    View Full Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="inline-block bg-[#d4a24c] text-[#14291f] font-semibold px-8 py-3 rounded-full hover:bg-[#c4903a] transition-colors shadow-md shadow-[#d4a24c]/20"
            >
              Enquire About International Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}