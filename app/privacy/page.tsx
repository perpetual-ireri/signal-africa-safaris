import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Signal Africa Safaris",
  description:
    "How Signal Africa Safaris collects, uses and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-300 mt-3 text-sm">
            Last updated: {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:font-brand prose-headings:text-[#14291f] prose-a:text-[#1f5e3b]">
          <p>
            At <strong>Signal Africa Safaris Ltd</strong>, we are committed to
            protecting your privacy. This policy explains what personal data we
            collect, how we use it, and your rights regarding your information.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            Our website address is:{" "}
            <strong>signalafricasafaris.com</strong>. We are a
            safari tour operator based in Nairobi, Kenya.
          </p>
          <p>
            For any privacy concerns, contact us at{" "}
            <a href="mailto:deals@signalafricasafaris.com">
              deals@signalafricasafaris.com
            </a>{" "}
            or call / WhatsApp{" "}
            <a href="tel:+254721233126">0721 233 126</a>.
          </p>

          <h2>2. Comments</h2>
          <p>
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor&apos;s IP address and
            browser user agent string to help spam detection.
          </p>
          <p>
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available at{" "}
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible
            to the public in the context of your comment.
          </p>

          <h2>3. Media</h2>
          <p>
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>

          <h2>4. Cookies</h2>
          <p>
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </p>
          <p>
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </p>
          <p>
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select &quot;Remember Me&quot;, your login will persist for two
            weeks. If you log out of your account, the login cookies will be
            removed.
          </p>
          <p>
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>

          <h2>5. Embedded Content From Other Websites</h2>
          <p>
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p>
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>

          <h2>6. Who We Share Your Data With</h2>
          <p>
            If you request a password reset, your IP address will be included
            in the reset email. We do not sell or share your personal data with
            third parties for marketing purposes.
          </p>

          <h2>7. How Long We Retain Your Data</h2>
          <p>
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any
            follow-up comments automatically instead of holding them in a
            moderation queue.
          </p>
          <p>
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>

          <h2>8. What Rights You Have Over Your Data</h2>
          <p>
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This
            does not include any data we are obliged to keep for
            administrative, legal, or security purposes.
          </p>

          <h2>9. Where Your Data Is Sent</h2>
          <p>
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#f7f4ed] py-12">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-[#3a4f42] mb-4">
            Questions about how we handle your data?
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#1f5e3b] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#164a2e] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}