import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "./FloatingElements";

const HeroSection = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-anime">
      <FloatingElements />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="sakura-falling absolute top-0 left-[10%] w-4 h-4 bg-sakura-pink rounded-full"></div>
        <div className="sakura-falling absolute top-0 left-[30%] w-3 h-3 bg-sakura-light rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="sakura-falling absolute top-0 left-[50%] w-5 h-5 bg-anime-purple rounded-full" style={{ animationDelay: '4s' }}></div>
        <div className="sakura-falling absolute top-0 left-[70%] w-4 h-4 bg-anime-blue rounded-full" style={{ animationDelay: '6s' }}></div>
        <div className="sakura-falling absolute top-0 left-[90%] w-3 h-3 bg-sparkle-gold rounded-full" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Title with glow effect */}
          <h1 className="text-6xl md:text-8xl font-bold text-glow-strong anime-gradient bg-clip-text text-transparent bounce-in">
            🎂 Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-glow bounce-in" style={{ animationDelay: '0.3s' }}>
            Rachita Ranjan
          </h2>
          <p className="text-2xl md:text-3xl text-magic-violet text-glow bounce-in" style={{ animationDelay: '0.6s' }}>
            🎉 ✨ 💖 ✨ 🎉
          </p>
        </div>

        {/* Scroll button */}
        <div className="mt-16 bounce-in" style={{ animationDelay: '1s' }}>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToGallery}
            className="rounded-full px-8 py-6 text-lg font-semibold bg-card/20 backdrop-blur-sm border-2 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-glow-soft transition-magic group"
          >
            <span className="mr-2">Explore Memories</span>
            <ChevronDown className="w-6 h-6 anime-float" />
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;