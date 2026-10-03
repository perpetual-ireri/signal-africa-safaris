import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Safaris from "@/components/safaris";
import OurDestinations from "@/components/our-destinations";
import OurServices from "@/components/our-services";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Safaris />
        <OurDestinations />
        <OurServices/>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}