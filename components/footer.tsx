import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { CONTACT, SOCIALS, WHATSAPP_LINK } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Safaris", href: "/#safaris" },
  { label: "Destinations", href: "/#destinations" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const destinations = [
  "Kenya Safaris",
  "Uganda Gorilla Trekking",
  "Botswana Okavango Delta",
  "Tanzania Serengeti",
  "Rwanda Volcanoes",
  "South Africa Kruger",
];

export default function Footer() {
  return (
    <footer className="bg-[#14291f] text-gray-300">
      {/* Top CTA Strip */}
      <div className="bg-[#1f5e3b]">
        <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-brand text-2xl md:text-3xl font-bold text-white">
              Ready for your African adventure?
            </h3>
            <p className="text-sm text-gray-200 mt-1">
              Talk to a safari consultant today — free, no obligation.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4a24c] text-[#14291f] font-semibold hover:bg-[#c08f3a] transition-all"
          >
            <Send size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div>
          <Link href="/" className="inline-flex flex-col leading-none mb-4">
            <span className="font-brand text-2xl font-bold text-white">
              Signal Africa Safaris
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#d4a24c] font-medium">
              Tours &amp; Travel · Kenya
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Kenya&apos;s leading tours &amp; travel company. Tailor-made safaris
            across East &amp; Southern Africa — crafted around your budget,
            style and dreams.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] flex items-center justify-center transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.26z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-brand text-lg font-bold text-white mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#d4a24c] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-brand text-lg font-bold text-white mb-5">
            Destinations
          </h4>
          <ul className="space-y-3 text-sm">
            {destinations.map((d) => (
              <li key={d}>
                <Link
                  href="/#safaris"
                  className="hover:text-[#d4a24c] transition-colors"
                >
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-brand text-lg font-bold text-white mb-5">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-[#d4a24c] mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Call / WhatsApp</div>
                <a
                  href={`tel:${CONTACT.phoneIntl}`}
                  className="hover:text-[#d4a24c]"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-[#d4a24c] mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Email</div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[#d4a24c] break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#d4a24c] mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Location</div>
                <span>{CONTACT.address}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Signal Africa Safaris Ltd. All rights
            reserved.
          </p>
          <p>Designed with love for unforgettable African adventures.</p>
        </div>
      </div>
    </footer>
  );
}