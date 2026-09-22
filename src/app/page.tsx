import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import OpeningHours from "@/components/OpeningHours/OpeningHours";
import FAQ from "@/components/FAQ/FAQ";
import Feedback from "@/components/Feedback/Feedback";
import Address from "@/components/Address/Address";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <OpeningHours />
      <Feedback />
      <FAQ />
      <Address />
      <Footer />
    </>
  );
}
