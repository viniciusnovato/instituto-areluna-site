import Header from "@/components/Header";
import TreatmentsHeroSection from "@/components/TreatmentsHeroSection";
import TreatmentDetailsSection from "@/components/TreatmentDetailsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TreatmentsFAQSection from "@/components/TreatmentsFAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TreatmentsHeroSection />
      <TreatmentDetailsSection />
      <BeforeAfterSection />
      <TreatmentsFAQSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TreatmentsPage;