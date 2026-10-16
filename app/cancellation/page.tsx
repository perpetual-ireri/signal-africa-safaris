import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Cancellation & Refund Policy | Signal Africa Safaris",
  description:
    "Cancellation, refund, and rescheduling policy for Signal Africa Safaris bookings.",
};

export default function CancellationPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#14291f] text-white py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#d4a24c] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
            Legal
          </p>
          <h1 className="font-brand text-4xl md:text-5xl font-bold">
            Cancellation &amp; Refund Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:font-brand prose-headings:text-[#14291f] prose-a:text-[#1f5e3b]">
          <p>
            At <strong>Signal Africa Safaris</strong>, we understand that plans
            can change. Our cancellation policy ensures transparency while
            helping us provide the best service possible.
          </p>

          <h2>General Cancellation Policy</h2>
          <ul>
            <li>
              <strong>
                Cancellations made 30 days or more before the travel date:
              </strong>{" "}
              Full refund, minus administrative fees.
            </li>
            <li>
              <strong>
                Cancellations made 15–29 days before the travel date:
              </strong>{" "}
              50% refund of the total amount paid.
            </li>
            <li>
              <strong>
                Cancellations made 7–14 days before the travel date:
              </strong>{" "}
              25% refund of the total amount paid.
            </li>
            <li>
              <strong>
                Cancellations made less than 7 days before departure:
              </strong>{" "}
              No refund will be provided.
            </li>
          </ul>

          <h2>Non-Refundable Services</h2>
          <p>
            Some bookings, including but not limited to flights, hotels, and
            excursions with third-party providers, may be non-refundable or
            subject to the supplier&apos;s cancellation policy. Please check
            with us before booking.
          </p>

          <h2>No-Show Policy</h2>
          <p>
            Failure to arrive for your trip without prior notice will be
            treated as a no-show, and no refund will be issued.
          </p>

          <h2>Changes &amp; Rescheduling</h2>
          <p>
            Changes made at least 15 days before departure may be allowed,
            subject to availability and possible fare differences.
          </p>
          <p>
            Last-minute changes (less than 7 days before departure) will be
            considered on a case-by-case basis and may incur extra charges.
          </p>

          <h2>Force Majeure &amp; Special Circumstances</h2>
          <p>
            In case of unforeseen events such as natural disasters, political
            unrest, or airline disruptions, we will work to reschedule your
            trip or offer a credit for future travel, where possible.
          </p>

          <h2>Travel Insurance</h2>
          <p>
            We strongly recommend purchasing comprehensive travel insurance to
            cover cancellations, medical emergencies, and other unexpected
            events.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any cancellation requests or clarifications, please reach out:
          </p>
          <ul>
            <li>
              📞 <strong>Call / WhatsApp:</strong>{" "}
              <a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>
            </li>
            <li>
              ✉️ <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#f7f4ed] py-12">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-[#3a4f42] mb-6">
            Need to cancel or reschedule? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 bg-[#1f5e3b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#164a2e] transition-colors"
            >
              <Phone size={18} /> Call Us
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 bg-[#d4a24c] text-[#14291f] font-semibold px-8 py-3 rounded-full hover:bg-[#c08f3a] transition-colors"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}