"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";

type Safari = {
  id: string;
  title: string;
  country:
    | "Kenya"
    | "Uganda"
    | "Botswana"
    | "Tanzania"
    | "Rwanda"
    | "South Africa";
  duration: string;
  groupSize: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
};

const safaris: Safari[] = [
  // KENYA
  {
    id: "masai-mara",
    title: "3 Days Masai Mara Safari",
    country: "Kenya",
    duration: "3 Days / 2 Nights",
    groupSize: "2-7 Guests",
    price: "From KShs 20,633",
    description:
      "Witness the legendary Great Wildebeest Migration and Big Five in Kenya's most iconic reserve.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "amboseli",
    title: "Amboseli and Mount Kilimanjaro Views",
    country: "Kenya",
    duration: "4 Days / 3 Nights",
    groupSize: "2-7 Guests",
    price: "From $650",
    description:
      "Elephant herds against the backdrop of Africa's highest peak — a photographer's dream.",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "diani-beach",
    title: "Diani Beach and Safari Combo",
    country: "Kenya",
    duration: "7 Days / 6 Nights",
    groupSize: "2-10 Guests",
    price: "From $1,200",
    description:
      "Combine thrilling game drives in Tsavo with relaxation on Kenya's white sandy beaches.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lake-nakuru",
    title: "Lake Nakuru and Naivasha Escape",
    country: "Kenya",
    duration: "3 Days / 2 Nights",
    groupSize: "2-6 Guests",
    price: "From $450",
    description:
      "Flamingos, rhinos and boat rides in the Great Rift Valley's most scenic lakes.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
  },

  // UGANDA
  {
    id: "gorilla-uganda",
    title: "Uganda Gorilla Trekking Adventure",
    country: "Uganda",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 Guests",
    price: "From $1,800",
    description:
      "Come face-to-face with mountain gorillas in Bwindi Impenetrable Forest.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "murchison-falls",
    title: "Murchison Falls Wildlife Safari",
    country: "Uganda",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,500",
    description:
      "Big game, Nile boat cruises and the world's most powerful waterfall.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80",
  },

  // BOTSWANA
  {
    id: "okavango",
    title: "Okavango Delta and Chobe Safari",
    country: "Botswana",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,900",
    description:
      "Explore the world's largest inland delta and Chobe's legendary elephant herds.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "kalahari",
    title: "Kalahari and Makgadikgadi Pans",
    country: "Botswana",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,400",
    description:
      "Discover the surreal salt pans, meerkats and black-maned lions of the Kalahari.",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
  },

  // TANZANIA
  {
    id: "serengeti",
    title: "Serengeti and Ngorongoro Crater",
    country: "Tanzania",
    duration: "7 Days / 6 Nights",
    groupSize: "2-7 Guests",
    price: "From $2,100",
    description:
      "Follow the Great Migration through the Serengeti and descend into the Ngorongoro Crater.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro Trek – Machame Route",
    country: "Tanzania",
    duration: "8 Days / 7 Nights",
    groupSize: "2-10 Guests",
    price: "From $2,300",
    description:
      "Summit Africa's highest peak on the most scenic route to Uhuru Point.",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zanzibar",
    title: "Zanzibar Beach and Safari Combo",
    country: "Tanzania",
    duration: "8 Days / 7 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,950",
    description:
      "Pair a Serengeti safari with the spice-scented beaches of Zanzibar.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
  },

  // RWANDA
  {
    id: "rwanda-gorilla",
    title: "Rwanda Gorilla and Golden Monkey Trek",
    country: "Rwanda",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,200",
    description:
      "Trek mountain gorillas and golden monkeys in Volcanoes National Park.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
  },

  // SOUTH AFRICA
  {
    id: "kruger",
    title: "Kruger National Park Safari",
    country: "South Africa",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,700",
    description:
      "Big Five game drives in South Africa's largest and most famous national park.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cape-town",
    title: "Cape Town and Winelands Experience",
    country: "South Africa",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 Guests",
    price: "From $1,500",
    description:
      "Table Mountain, Cape Point, penguins and world-class wine estates.",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
  },
];

const countries = [
  "All",
  "Kenya",
  "Uganda",
  "Botswana",
  "Tanzania",
  "Rwanda",
  "South Africa",
] as const;

export default function Safaris() {
  const [active, setActive] = useState<(typeof countries)[number]>("All");

  const filtered =
    active === "All" ? safaris : safaris.filter((s) => s.country === active);

  return (
    <section id="safaris" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
            Our Safari Packages
          </p>
          <h2 className="section-title mx-auto">Explore Our Safaris</h2>
          <p className="section-subtitle mx-auto">
            From the Great Migration in Kenya to gorilla trekking in Uganda and
            Rwanda, and the wilds of Botswana — discover the perfect African
            adventure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === c
                  ? "bg-[#1f5e3b] text-white border-[#1f5e3b]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#1f5e3b] hover:text-[#1f5e3b]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((safari) => (
            <article
              key={safari.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${safari.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#d4a24c] text-[#14291f] text-xs font-semibold px-3 py-1 rounded-full">
                  {safari.country}
                </span>
                {safari.featured && (
                  <span className="absolute top-4 right-4 bg-[#1f5e3b] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-brand text-xl font-bold text-[#14291f] mb-2 group-hover:text-[#1f5e3b] transition-colors">
                  {safari.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {safari.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {safari.groupSize}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-6 flex-1">
                  {safari.description}
                </p>

                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <div className="text-xs text-gray-500">Starting from</div>
                    <div className="font-bold text-[#1f5e3b]">
                      {safari.price}
                    </div>
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#d4a24c] hover:text-[#1f5e3b] transition-colors"
                  >
                    Enquire <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? We build custom
            safaris too.
          </p>
          <Link href="/#contact" className="btn-secondary">
            Request a Custom Safari
          </Link>
        </div>
      </div>
    </section>
  );
}