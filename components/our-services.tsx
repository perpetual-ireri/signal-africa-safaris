"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
// SERVICE OPTIONS DATA
// ─────────────────────────────────────────────
const hireServices = [
  {
    id: "land-cruiser",
    badge: "Most Popular",
    name: "Land Cruiser 4x4",
    subtitle: "Safari-Modified Toyota Land Cruisers",
    description:
      "Safari-modified Toyota Land Cruisers with pop-top roofs, built for comfort on Kenya's toughest roads — from the Maasai Mara to Samburu.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Pop-top roof for unobstructed game viewing",
      "Available self-drive or chauffeur-driven",
      "Full comprehensive insurance & 24/7 roadside support",
      "Airport pickup and drop-off in Nairobi",
      "Cooler box, charging ports, and unlimited mileage",
    ],
    cta: "Enquire Now",
  },
  {
    id: "helicopter",
    badge: "Premium",
    name: "Helicopter Charter",
    subtitle: "Luxury Aerial Safaris & Transfers",
    description:
      "Skip the long drives and see Kenya from above. Scenic flights over Nairobi, direct transfers to the Maasai Mara, and full aerial safaris.",
    image:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Scenic flights over Nairobi National Park & Rift Valley",
      "Direct transfers to Maasai Mara, Amboseli, and Diani",
      "Aerial safari routes with wildlife viewing from above",
      "VIP airport and lodge transfers",
      "Experienced commercial pilots, fully insured aircraft",
    ],
    cta: "Enquire Now",
  },
];

// ─────────────────────────────────────────────
// LAND CRUISER RATES
// ─────────────────────────────────────────────
const landCruiserRates = [
  {
    tier: "Self-Drive",
    description:
      "Full insurance, unlimited mileage, airport pickup and drop-off available.",
    price: "$120",
    unit: "/ day",
    highlight: false,
  },
  {
    tier: "Chauffeur-Driven",
    description:
      "Professional English-speaking driver/guide, all fuel and park fees included.",
    price: "$180",
    unit: "/ day",
    highlight: true,
  },
  {
    tier: "Multi-Day Safari Package",
    description:
      "3+ day discounted rates for extended safaris, includes full support vehicle network.",
    price: "$150",
    unit: "/ day",
    highlight: false,
  },
];

// ─────────────────────────────────────────────
// HELICOPTER RATES
// ─────────────────────────────────────────────
const helicopterRates = [
  {
    tier: "Scenic Flights",
    description:
      "See Nairobi National Park, the Great Rift Valley, and more from the air.",
    price: "$1,200",
    unit: "/ hour",
    highlight: false,
  },
  {
    tier: "Maasai Mara Transfers",
    description:
      "Fly directly to the Mara — skip the long road journey and start your safari fresh.",
    price: "$2,800",
    unit: "one-way",
    highlight: true,
  },
  {
    tier: "Aerial Safaris",
    description:
      "Combine flying with wildlife viewing from above — the ultimate safari vantage point.",
    price: "$1,500",
    unit: "/ hour",
    highlight: false,
  },
];

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function VehicleAndHelicopterHire() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    dates: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ FIXED — Type added to event parameter
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ FIXED — Type added to event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, send formData to your backend / email service
    console.log("Hire enquiry submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="hire" className="bg-[#e8f0e6] text-[#1a2f24]">
      {/* ───────────────────────────── */}
      {/* HERO / INTRO */}
      {/* ───────────────────────────── */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0e6]/85 via-[#e8f0e6]/70 to-[#e8f0e6]" />

        <div className="container-custom relative z-10 text-center">
          <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
            Vehicle &amp; Helicopter Hire
          </p>
          <h1 className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#14291f]">
            Explore Kenya <span className="text-[#b8862f]">Your Way</span>
          </h1>
          <p className="text-[#3a4f42] max-w-3xl mx-auto text-lg">
            Nairobi-based, safari-ready Land Cruisers and luxury helicopter
            charters. Two flagship options for exploring Kenya your way — on
            the ground in a safari 4x4, or from the air in a luxury helicopter.
          </p>
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* TWO FLAGSHIP SERVICES */}
      {/* ───────────────────────────── */}
      <div className="container-custom pb-20 md:pb-28">
        <div className="text-center mb-14">
          <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
            Our Hire Services
          </p>
          <h2 className="section-title text-[#14291f] mx-auto">
            Two Flagship Options
          </h2>
          <p className="text-[#3a4f42] max-w-2xl mx-auto">
            Choose the experience that fits your adventure — rugged ground
            travel or breathtaking aerial views.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {hireServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#14291f]/5 hover:border-[#d4a24c]/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-[#d4a24c] text-[#14291f] text-xs font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-[#b8862f] text-sm font-medium mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-brand text-2xl md:text-3xl font-bold mb-3 text-[#14291f]">
                  {service.name}
                </h3>
                <p className="text-[#3a4f42] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#d4a24c]/20 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-[#b8862f]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-[#3a4f42]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#hire-enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4a24c] text-[#14291f] font-semibold px-6 py-3 rounded-full hover:bg-[#c4903a] transition-colors w-full sm:w-auto"
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* LAND CRUISER RATES */}
      {/* ───────────────────────────── */}
      <div className="bg-[#f3f8f1] py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
              Transparent Pricing
            </p>
            <h2 className="section-title text-[#14291f] mx-auto">
              Land Cruiser 4x4 Rates
            </h2>
            <p className="text-[#3a4f42] max-w-2xl mx-auto">
              Self-drive or chauffeur-driven, all fully insured and
              safari-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {landCruiserRates.map((rate) => (
              <div
                key={rate.tier}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                  rate.highlight
                    ? "bg-[#d4a24c] text-[#14291f] shadow-2xl shadow-[#d4a24c]/30 scale-[1.02] md:scale-105"
                    : "bg-white border border-[#14291f]/5 hover:border-[#d4a24c]/40 text-[#14291f] shadow-sm hover:shadow-lg"
                }`}
              >
                {rate.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14291f] text-[#d4a24c] text-xs font-bold px-4 py-1 rounded-full border border-[#d4a24c]/40">
                    Best Value
                  </span>
                )}

                <h3 className="font-brand text-xl font-bold mb-2 text-[#14291f]">
                  {rate.tier}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 flex-1 ${
                    rate.highlight ? "text-[#14291f]/80" : "text-[#3a4f42]"
                  }`}
                >
                  {rate.description}
                </p>

                <div className="mb-6">
                  <span className="font-brand text-4xl font-bold">
                    {rate.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      rate.highlight ? "text-[#14291f]/70" : "text-[#6b7f70]"
                    }`}
                  >
                    {rate.unit}
                  </span>
                </div>

                <a
                  href="#hire-enquiry"
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-colors w-full ${
                    rate.highlight
                      ? "bg-[#14291f] text-[#d4a24c] hover:bg-[#0f1f17]"
                      : "bg-[#d4a24c] text-[#14291f] hover:bg-[#c4903a]"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* HELICOPTER RATES */}
      {/* ───────────────────────────── */}
      <div className="py-20 md:py-28 bg-[#e8f0e6]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
              Aerial Experiences
            </p>
            <h2 className="section-title text-[#14291f] mx-auto">
              Helicopter Charter Rates
            </h2>
            <p className="text-[#3a4f42] max-w-2xl mx-auto">
              Scenic flights over Nairobi, VIP transfers, and aerial safaris —
              priced per hour or per route.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {helicopterRates.map((rate) => (
              <div
                key={rate.tier}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                  rate.highlight
                    ? "bg-[#d4a24c] text-[#14291f] shadow-2xl shadow-[#d4a24c]/30 scale-[1.02] md:scale-105"
                    : "bg-white border border-[#14291f]/5 hover:border-[#d4a24c]/40 text-[#14291f] shadow-sm hover:shadow-lg"
                }`}
              >
                {rate.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14291f] text-[#d4a24c] text-xs font-bold px-4 py-1 rounded-full border border-[#d4a24c]/40">
                    Most Booked
                  </span>
                )}

                <h3 className="font-brand text-xl font-bold mb-2 text-[#14291f]">
                  {rate.tier}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 flex-1 ${
                    rate.highlight ? "text-[#14291f]/80" : "text-[#3a4f42]"
                  }`}
                >
                  {rate.description}
                </p>

                <div className="mb-6">
                  <span className="font-brand text-4xl font-bold">
                    {rate.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      rate.highlight ? "text-[#14291f]/70" : "text-[#6b7f70]"
                    }`}
                  >
                    {rate.unit}
                  </span>
                </div>

                <a
                  href="#hire-enquiry"
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-colors w-full ${
                    rate.highlight
                      ? "bg-[#14291f] text-[#d4a24c] hover:bg-[#0f1f17]"
                      : "bg-[#d4a24c] text-[#14291f] hover:bg-[#c4903a]"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────────────────────── */}
      {/* ENQUIRY FORM */}
      {/* ───────────────────────────── */}
      <div id="hire-enquiry" className="bg-[#f3f8f1] py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#b8862f] font-medium tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="section-title text-[#14291f] mx-auto">
                Hire Enquiry
              </h2>
              <p className="text-[#3a4f42] max-w-2xl mx-auto">
                Tell us what you need and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-[#d4a24c]/40 rounded-2xl p-10 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#d4a24c]/15 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-[#b8862f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-brand text-2xl font-bold text-[#14291f] mb-2">
                  Thank You!
                </h3>
                <p className="text-[#3a4f42]">
                  Your enquiry has been received. Our team will contact you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#14291f]/5 rounded-2xl p-8 md:p-10 space-y-6 shadow-sm"
              >
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[#3a4f42] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] placeholder-[#8a9c8f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#3a4f42] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] placeholder-[#8a9c8f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#3a4f42] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] placeholder-[#8a9c8f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#3a4f42] mb-2"
                    >
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors"
                    >
                      <option value="">— Please choose an option —</option>
                      <option value="land-cruiser-self-drive">
                        Land Cruiser — Self-Drive
                      </option>
                      <option value="land-cruiser-chauffeur">
                        Land Cruiser — Chauffeur-Driven
                      </option>
                      <option value="land-cruiser-multi-day">
                        Land Cruiser — Multi-Day Safari Package
                      </option>
                      <option value="helicopter-scenic">
                        Helicopter — Scenic Flight
                      </option>
                      <option value="helicopter-mara-transfer">
                        Helicopter — Maasai Mara Transfer
                      </option>
                      <option value="helicopter-aerial-safari">
                        Helicopter — Aerial Safari
                      </option>
                      <option value="other">Other / Custom Request</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label
                    htmlFor="dates"
                    className="block text-sm font-medium text-[#3a4f42] mb-2"
                  >
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g. 10–15 December"
                    className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] placeholder-[#8a9c8f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors"
                  />
                </div>

                {/* Row 4 */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-[#3a4f42] mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Number of people, special requests, pickup location..."
                    className="w-full bg-[#f8fbf7] border border-[#14291f]/10 rounded-lg px-4 py-3 text-[#14291f] placeholder-[#8a9c8f] focus:outline-none focus:border-[#d4a24c] focus:ring-2 focus:ring-[#d4a24c]/20 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#d4a24c] text-[#14291f] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#c4903a] transition-colors shadow-lg shadow-[#d4a24c]/20"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}