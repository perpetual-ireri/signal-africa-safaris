import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Globe,
  Languages,
  MapPin,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import { allDestinations, getDestinationBySlug } from "@/data/destinations";

// Pre-build all destination pages at build time
export function generateStaticParams() {
  return allDestinations.map((d) => ({ slug: d.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const d = destination;

  return (
    <main className="bg-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${d.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

        <div className="container-custom relative z-10 pb-12 text-white">
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-2 text-sm text-[#d4a24c] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Destinations
          </Link>

          <span className="inline-block bg-[#d4a24c] text-[#14291f] text-xs font-bold px-3 py-1 rounded-full mb-3">
            {d.type === "africa" ? "African Destination" : "International Package"}
          </span>

          <h1 className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            {d.name}
          </h1>
          <p className="text-[#d4a24c] text-lg md:text-xl font-medium mb-2">
            {d.tagline}
          </p>
          <p className="text-sm text-gray-200 max-w-2xl">{d.spots}</p>
        </div>
      </section>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
            Overview
          </p>
          <h2 className="section-title text-[#14291f] mb-6">
            About {d.name}
          </h2>
          <p className="text-lg text-[#3a4f42] leading-relaxed">
            {d.overview}
          </p>
        </div>
      </section>

      {/* ═══════════════ QUICK FACTS ═══════════════ */}
      <section className="bg-[#f3f8f1] py-16">
        <div className="container-custom">
          <h2 className="font-brand text-3xl font-bold text-[#14291f] text-center mb-10">
            Quick Facts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FactCard icon={<Calendar size={20} />} label="Best Time to Visit" value={d.bestTime} />
            <FactCard icon={<Languages size={20} />} label="Languages" value={d.language} />
            <FactCard icon={<DollarSign size={20} />} label="Currency" value={d.currency} />
            <FactCard icon={<Ticket size={20} />} label="Visa" value={d.visa} />
          </div>

          {d.idealFor && (
            <div className="mt-6 bg-white rounded-2xl p-6 border border-[#14291f]/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a24c]/20 text-[#b8862f] flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b8862f] font-semibold mb-1">
                    Ideal For
                  </p>
                  <p className="text-[#14291f]">{d.idealFor}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ HIGHLIGHTS ═══════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-[#d4a24c]" size={28} />
            <h2 className="font-brand text-3xl font-bold text-[#14291f]">
              Top Highlights
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {d.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[#f7f4ed] rounded-xl p-4"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#1f5e3b] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-[#3a4f42]">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ SAMPLE ITINERARY ═══════════════ */}
      <section className="bg-[#14291f] py-16 md:py-20 text-white">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-[#d4a24c]" size={28} />
            <h2 className="font-brand text-3xl font-bold">
              Sample Itinerary
            </h2>
          </div>

          <ol className="relative border-l-2 border-[#d4a24c]/40 pl-8 space-y-6">
            {d.sampleItinerary.map((step, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[43px] w-6 h-6 rounded-full bg-[#d4a24c] text-[#14291f] text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-200 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-16 md:py-20 bg-[#e8f0e6]">
        <div className="container-custom text-center">
          <Globe className="text-[#b8862f] mx-auto mb-4" size={40} />
          <h2 className="font-brand text-3xl md:text-4xl font-bold text-[#14291f] mb-4">
            Ready to Explore {d.name}?
          </h2>
          <p className="text-[#3a4f42] max-w-2xl mx-auto mb-8">
            Let our safari consultants craft a tailor-made itinerary just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1f5e3b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#164a2e] transition-colors shadow-md"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/#safaris"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1f5e3b] text-[#1f5e3b] font-semibold px-8 py-3 rounded-full hover:bg-[#1f5e3b] hover:text-white transition-colors"
            >
              Browse Safari Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────
// Small reusable FactCard component
// ─────────────────────────────────────────────
function FactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#14291f]/5">
      <div className="flex items-center gap-2 mb-2 text-[#b8862f]">
        {icon}
        <span className="text-xs uppercase tracking-widest font-semibold">
          {label}
        </span>
      </div>
      <p className="text-sm text-[#14291f] leading-relaxed">{value}</p>
    </div>
  );
}