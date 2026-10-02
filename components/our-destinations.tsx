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
    tagline: "Land of a Thousand Hills",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80",
    spots: "Volcanoes NP · Kigali · Lake Kivu",
  },
  {
    name: "South Africa",
    tagline: "Big Five and Cape Beauty",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    spots: "Kruger · Cape Town · Garden Route",
  },
];

export default function OurDestinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#14291f]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
            Where We Travel
          </p>
          <h2 className="section-title text-white mx-auto">
            Our Destinations
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Six extraordinary African countries. Countless unforgettable
            experiences waiting for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <Link
              key={d.name}
              href="/#safaris"
              className="group relative h-80 rounded-2xl overflow-hidden block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${d.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-brand text-2xl md:text-3xl font-bold mb-1">
                  {d.name}
                </h3>
                <p className="text-[#d4a24c] text-sm font-medium mb-2">
                  {d.tagline}
                </p>
                <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {d.spots}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}