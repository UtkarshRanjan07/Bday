import { useState } from "react";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGiftClick = () => {
    setIsRevealed(true);
    setShowConfetti(true);
    
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createConfetti();
      }, i * 100);
    }
    
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'fixed pointer-events-none z-50';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '0';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = [
      'hsl(var(--sakura-pink))',
      'hsl(var(--anime-purple))',
      'hsl(var(--sparkle-gold))',
      'hsl(var(--magic-violet))',
      'hsl(var(--anime-blue))'
    ][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '50%';
    confetti.style.animation = 'confetti-pop 3s ease-out forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  };

  // Special collage photos for the surprise
  const surprisePhotos = [
    "/lovable-uploads/5.jpg",
    "/lovable-uploads/17.jpg",
    "/lovable-uploads/34.jpg",
    "/lovable-uploads/39.jpg",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-birthday">
      <div className="max-w-4xl mx-auto text-center">
        {!isRevealed ? (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-glow mb-8">
              🎁 Special Surprise for Rachita! 🎁
            </h2>
            
            <div className="relative inline-block">
              <Button
                onClick={handleGiftClick}
                size="lg"
                className="relative bg-gradient-magic text-primary-foreground font-bold text-2xl py-8 px-12 rounded-3xl shadow-glow-strong hover:shadow-glow-magic transition-magic transform hover:scale-105 animate-bounce group"
              >
                <Gift className="w-12 h-12 mr-4 group-hover:animate-bounce" />
                Click Me, Rachita!
                <Gift className="w-12 h-12 ml-4 group-hover:animate-bounce" />
              </Button>
              
              {/* Sparkle effects around the button */}
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-sparkle-gold rounded-full sparkle-animation"></div>
              <div className="absolute -top-2 -right-4 w-3 h-3 bg-magic-violet rounded-full sparkle-animation" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-2 w-5 h-5 bg-anime-blue rounded-full sparkle-animation" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-sakura-pink rounded-full sparkle-animation" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-glow-strong">
              🎉 Surprise! 🎉
            </h2>
            
            <p className="text-2xl text-magic-violet text-glow mb-8">
              A special collage of your most beautiful moments! 💖
            </p>
            
            {/* Photo Collage */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {surprisePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-glow-magic bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={photo}
                    alt={`Special moment ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-magic"
                  />
                  <div className="absolute inset-0 bg-gradient-magic opacity-20"></div>
                  <div className="absolute bottom-2 right-2">
                    <div className="w-6 h-6 bg-sparkle-gold rounded-full sparkle-animation"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-xl text-birthday-rose font-semibold text-glow">
                ✨ Made with lots of love just for you! ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseSection;