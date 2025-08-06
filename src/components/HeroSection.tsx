import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "./FloatingElements";

const HeroSection = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-anime py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Add lots of top space */}
        <div className="h-20"></div>
        
        {/* Simple, visible title */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            🎂 Happy Birthday 🎂
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-name-pink font-fredoka">
            Rachita Ranjan
          </h2>
          <p className="text-2xl text-anime-purple font-quicksand">
            🎉 ✨ 💖 ✨ 🎉
          </p>
        </div>

        {/* Scroll button */}
        <div className="mt-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToGallery}
            className="rounded-full px-8 py-6 text-lg font-semibold bg-card/50 border-2 border-primary text-primary hover:bg-primary/20"
          >
            <span className="mr-2">Explore Memories</span>
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Add bottom space */}
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;