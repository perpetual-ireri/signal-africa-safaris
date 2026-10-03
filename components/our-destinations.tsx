import Link from "next/link";

const destinations = [
  {
    name: "Kenya",
    tagline: "Home of the Great Migration",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
    spots: "Maasai Mara · Amboseli · Diani · Lake Nakuru",
  },
  {
    name: "Uganda",
    tagline: "The Pearl of Africa",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    spots: "Bwindi · Murchison Falls · Queen Elizabeth NP",
  },
  {
    name: "Botswana",
    tagline: "Wild Luxury in the Delta",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    spots: "Okavango Delta · Chobe · Kalahari",
  },
  {
    name: "Tanzania",
    tagline: "Serengeti and Kilimanjaro",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80",
    spots: "Serengeti · Ngorongoro · Zanzibar",
  },
  {
    name: "Rwanda",
    tagline: "Gorilla Trekking in the Land of a Thousand Hills",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80",
    spots: "Volcanoes NP · Kigali · Lake Kivu · Nyungwe Forest",
  },
  {
    name: "South Africa",
    tagline: "Big Five and Cape Beauty",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    spots: "Kruger · Cape Town · Garden Route",
  },
];

const internationalPackages = [
  {
    name: "Maldives",
    tagline: "Overwater Luxury & Coral Reefs",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    spots: "Malé · Private Islands · Snorkeling · Spa",
    itinerary: "5-7 Days · Couples & Honeymoon",
  },
  {
    name: "Dubai",
    tagline: "Skyline Glamour & Desert Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    spots: "Burj Khalifa · Miracle Garden · Desert Safari",
    itinerary: "4-5 Days · Family & Shopping",
  },
  {
    name: "Mauritius",
    tagline: "Island Serenity & Creole Flavour",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    spots: "Le Morne · Flic en Flac · Black River Gorges",
    itinerary: "5-6 Days · Beach & Nature",
  },
  {
    name: "China",
    tagline: "Ancient Wonders & Modern Cities",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    spots: "Beijing · Shanghai · Xi'an · Yangshuo",
    itinerary: "7-10 Days · Culture & History",
  },
  {
    name: "Malaysia",
    tagline: "Street Food, Temples & Skylines",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    spots: "Kuala Lumpur · Penang · Melaka · Borneo",
    itinerary: "5-7 Days · Food & Culture",
  },
  {
    name: "Thailand",
    tagline: "Temples, Islands & Street Food Paradise",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    spots: "Bangkok · Phuket · Chiang Mai · Phi Phi Islands",
    itinerary: "6-8 Days · Beach & Culture",
  },
];

export default function OurDestinations() {
  return (
    <>
      {/* African Destinations Section */}
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
            {destinations.map((d) => (
              <Link
                key={d.name}
                href="/#safaris"
                className="group relative h-80 rounded-2xl overflow-hidden block shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${d.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-brand text-2xl md:text-3xl font-bold mb-1">
                    {d.name}
                  </h3>
                  <p className="text-[#d4a24c] text-sm font-medium mb-2">
                    {d.tagline}
                  </p>
                  <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {d.spots}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* International Packages Section */}
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
            {internationalPackages.map((pkg) => (
              <Link
                key={pkg.name}
                href="#contact"
                className="group relative h-80 rounded-2xl overflow-hidden block shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="bg-[#d4a24c] text-[#14291f] text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.itinerary}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-brand text-2xl md:text-3xl font-bold mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-[#d4a24c] text-sm font-medium mb-2">
                    {pkg.tagline}
                  </p>
                  <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {pkg.spots}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
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