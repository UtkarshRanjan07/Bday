import { Heart, Star, Sparkles, Gift } from "lucide-react";
import { useState } from "react";

const FloatingElements = () => {
  const [surpriseRevealed, setSurpriseRevealed] = useState<number | null>(null);

  const handleSurpriseClick = (index: number) => {
    setSurpriseRevealed(index);
    setTimeout(() => setSurpriseRevealed(null), 2000);
  };

  return (
    <>
      {/* Floating anime icons */}
      <div className="absolute top-20 left-10 anime-float cursor-pointer group" onClick={() => handleSurpriseClick(1)}>
        <Heart className="w-8 h-8 text-sakura-pink hover:scale-125 transition-magic glow-pulse" />
        {surpriseRevealed === 1 && (
          <div className="absolute -top-8 -left-4 text-sm text-sparkle-gold font-bold bounce-in">
            💕 Love!
          </div>
        )}
      </div>

      <div className="absolute top-32 right-16 anime-float cursor-pointer group" style={{ animationDelay: '1s' }} onClick={() => handleSurpriseClick(2)}>
        <Star className="w-10 h-10 text-sparkle-gold hover:scale-125 transition-magic magical-rotate" />
        {surpriseRevealed === 2 && (
          <div className="absolute -top-8 -left-6 text-sm text-magic-violet font-bold bounce-in">
            ⭐ Magical!
          </div>
        )}
      </div>

      <div className="absolute bottom-32 left-20 anime-float cursor-pointer group" style={{ animationDelay: '2s' }} onClick={() => handleSurpriseClick(3)}>
        <Sparkles className="w-9 h-9 text-magic-violet hover:scale-125 transition-magic sparkle-animation" />
        {surpriseRevealed === 3 && (
          <div className="absolute -top-8 -left-4 text-sm text-anime-blue font-bold bounce-in">
            ✨ Sparkle!
          </div>
        )}
      </div>

      <div className="absolute bottom-20 right-12 anime-float cursor-pointer group" style={{ animationDelay: '3s' }} onClick={() => handleSurpriseClick(4)}>
        <Gift className="w-8 h-8 text-birthday-rose hover:scale-125 transition-magic glow-pulse" />
        {surpriseRevealed === 4 && (
          <div className="absolute -top-8 -left-4 text-sm text-sakura-pink font-bold bounce-in">
            🎁 Gift!
          </div>
        )}
      </div>

      {/* Medium screen floating elements */}
      <div className="hidden md:block absolute top-1/4 left-1/4 anime-float" style={{ animationDelay: '4s' }}>
        <div className="w-6 h-6 bg-anime-blue rounded-full sparkle-animation"></div>
      </div>

      <div className="hidden md:block absolute top-1/3 right-1/3 anime-float" style={{ animationDelay: '5s' }}>
        <div className="w-4 h-4 bg-sakura-light rounded-full glow-pulse"></div>
      </div>

      <div className="hidden md:block absolute bottom-1/4 left-1/3 anime-float" style={{ animationDelay: '6s' }}>
        <div className="w-5 h-5 bg-magic-violet rounded-full magical-rotate"></div>
      </div>
    </>
  );
};

export default FloatingElements;