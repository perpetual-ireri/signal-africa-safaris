import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Site-wide constants
const SITE_URL = "https://signalafricasafaris.com";
const SITE_NAME = "Signal Africa Safaris";
const LOGO_PATH = "/images/logo.jpg"; // ← public/images/logo.jpg

export const metadata: Metadata = {
  // ── Basic SEO ─────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Signal Africa Safaris Ltd | Kenya's Leading Tours and Travel Company",
    template: "%s | Signal Africa Safaris",
  },
  description:
    "Experience unforgettable safaris in Kenya, Uganda, Botswana, Tanzania, Rwanda and South Africa. Tailor-made wildlife adventures, cultural tours and beach holidays.",
  keywords: [
    "Kenya safaris",
    "African safari tours",
    "Maasai Mara",
    "Great Migration",
    "Uganda gorilla trekking",
    "Tanzania Serengeti",
    "Botswana Okavango",
    "Rwanda Volcanoes",
    "South Africa Kruger",
    "Signal Africa Safaris",
    "Nairobi tours",
    "Diani beach holidays",
    "Mombasa SGR packages",
  ],
  authors: [{ name: "Signal Africa Safaris Ltd" }],
  creator: "Signal Africa Safaris Ltd",
  publisher: "Signal Africa Safaris Ltd",

  // ── Favicon & Icons ───────────────────────
  // All point at /images/logo.jpg (public/images/logo.jpg)
  icons: {
    icon: [
      { url: LOGO_PATH, type: "image/jpeg" },
      { url: LOGO_PATH, sizes: "48x48", type: "image/jpeg" },
      { url: LOGO_PATH, sizes: "96x96", type: "image/jpeg" },
    ],
    shortcut: LOGO_PATH,
    apple: [{ url: LOGO_PATH, sizes: "200x200", type: "image/jpeg" }],
    other: [
      {
        rel: "icon",
        url: LOGO_PATH,
      },
    ],
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn) ──
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Signal Africa Safaris Ltd | Kenya's Leading Tours and Travel Company",
    description:
      "Tailor-made safaris across Kenya, Uganda, Botswana, Tanzania, Rwanda and South Africa. Experience the Great Migration, pristine beaches and unforgettable wildlife encounters.",
    images: [
      {
        url: LOGO_PATH,
        width: 1200,
        height: 630,
        alt: "Signal Africa Safaris Logo",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "Signal Africa Safaris Ltd | Kenya's Leading Tours and Travel Company",
    description:
      "Tailor-made safaris across East & Southern Africa. Wildlife, culture and beach adventures crafted around your dreams.",
    images: [LOGO_PATH],
  },

  // ── Robots & Indexing ────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Misc ─────────────────────────────────
  category: "Travel",
  applicationName: SITE_NAME,
};

// Viewport config
export const viewport: Viewport = {
  themeColor: "#14291f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload the logo for faster favicon paint */}
        <link rel="preload" as="image" href={LOGO_PATH} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}