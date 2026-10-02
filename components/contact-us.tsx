"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { CONTACT, SOCIALS, WHATSAPP_LINK } from "@/lib/constants";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Kenya",
    travellers: "2",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you ${form.name}! Our safari consultant will contact you shortly.`
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f7f4ed]">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
            Contact Us
          </p>
          <h2 className="section-title mx-auto">Plan Your Dream Safari</h2>
          <p className="section-subtitle mx-auto">
            Send us a message and one of our safari consultants will get back
            to you within 24 hours. Or reach out directly via phone, WhatsApp
            or social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT — Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#1f5e3b] text-white flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  Call Us
                </div>
                <div className="font-semibold text-[#14291f] text-lg">
                  {CONTACT.phone}
                </div>
                <div className="text-xs text-gray-500">
                  Mon–Sun · 7:00 AM – 9:00 PM
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  WhatsApp
                </div>
                <div className="font-semibold text-[#14291f] text-lg">
                  {CONTACT.phone}
                </div>
                <div className="text-xs text-gray-500">
                  Fastest way to get a quote
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#d4a24c] text-[#14291f] flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  Email
                </div>
                <div className="font-semibold text-[#14291f] break-all">
                  {CONTACT.email}
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#14291f] text-white flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  Office
                </div>
                <div className="font-semibold text-[#14291f]">
                  {CONTACT.address}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                Follow Our Adventures
              </div>
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
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
                  className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
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
                  className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.26z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition bg-white"
                  >
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Botswana</option>
                    <option>Tanzania</option>
                    <option>Rwanda</option>
                    <option>South Africa</option>
                    <option>Multi-Country</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travellers
                  </label>
                  <input
                    type="number"
                    name="travellers"
                    value={form.travellers}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Dream Safari
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Dates, interests, budget, special requests..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20 outline-none transition resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="btn-primary flex-1">
                  <Send size={18} className="mr-2" /> Send Enquiry
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}