import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const highlights = [
    "Tailor-made safaris designed around your budget and style",
    "Experienced local guides and well-maintained 4x4 Land Cruisers",
    "Partnerships with trusted lodges, camps and conservancies",
    "24/7 support from arrival to departure",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#f7f4ed]">
      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div
            className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1000&q=80')",
            }}
          />
          <div
            className="hidden md:block absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl bg-cover bg-center border-8 border-[#f7f4ed] shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80')",
            }}
          />
          <div className="absolute top-6 -left-4 bg-[#1f5e3b] text-white rounded-xl px-6 py-4 shadow-lg">
            <div className="font-brand text-3xl font-bold">10+</div>
            <div className="text-xs uppercase tracking-wider">
              Years of Excellence
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
            About Us
          </p>
          <h2 className="section-title">
            Kenya&apos;s Leading Tours and Travel Company
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Signal Africa Safaris, we believe every journey should be as unique as
            the traveller. From the sweeping plains of the Maasai Mara to the
            shores of Diani Beach, we craft immersive safari experiences that
            connect you with Africa&apos;s wildlife, cultures and landscapes.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you dream of witnessing the Great Wildebeest Migration,
            climbing Mount Kilimanjaro, or relaxing on a pristine beach, our
            dedicated consultants design every detail around your preferences,
            schedule and budget.
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#1f5e3b] mt-0.5 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="btn-primary">
              Talk to a Consultant
            </Link>
            <Link
              href="/#safaris"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#1f5e3b] text-[#1f5e3b] font-medium hover:bg-[#1f5e3b] hover:text-white transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}