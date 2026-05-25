import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { PackagesSection } from "./components/PackagesSection";
import { ProcessSection } from "./components/ProcessSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { TechnologySection } from "./components/TechnologySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { WhatsAppChat } from "./components/WhatsAppChat";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { GstServicesPage } from "./components/GstServicesPage";
import { IncomeTaxReturnPage } from "./components/IncomeTaxReturnPage";
import { OtherServicesSlider } from "./components/OtherServicesSlider";

type Page = "home" | "gst" | "itr";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== "home") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Inter, sans-serif", color: "#333333" }}
    >
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "home" && (
        <>
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <ServicesSection />
          <OtherServicesSlider />
          <WhyChooseSection />
          <PackagesSection />
          <ProcessSection />
          <IndustriesSection />
          <TechnologySection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </>
      )}

      {currentPage === "gst" && (
        <GstServicesPage onBack={() => handleNavigate("home")} />
      )}

      {currentPage === "itr" && (
        <IncomeTaxReturnPage onBack={() => handleNavigate("home")} />
      )}

      <WhatsAppChat />
      <CustomCursor />
      <ScrollProgressBar />
    </div>
  );
}
