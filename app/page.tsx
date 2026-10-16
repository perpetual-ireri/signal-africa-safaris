"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Safaris from "@/components/safaris";
import OurDestinations from "@/components/our-destinations";
import VehicleAndHelicopterHire from "@/components/our-services";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import AIChat from "@/components/ai-chat";

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <Safaris />
        <OurDestinations />
        <VehicleAndHelicopterHire />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />

      {/* AI Chat — controlled by homepage state */}
      <AIChat
        isOpen={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
      />
    </>
  );
}