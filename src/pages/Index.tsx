import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import SurpriseSection from "@/components/SurpriseSection";
import BirthdayMessage from "@/components/BirthdayMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhotoGallery />
      <SurpriseSection />
      <BirthdayMessage />
      <Footer />
    </div>
  );
};

export default Index;
