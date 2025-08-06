import { Heart, Sparkles, Star } from "lucide-react";

const BirthdayMessage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-anime relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-sparkle-gold rounded-full sparkle-animation"></div>
        <div className="absolute top-20 right-16 w-4 h-4 bg-magic-violet rounded-full sparkle-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-anime-blue rounded-full sparkle-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-12 w-3 h-3 bg-sakura-pink rounded-full sparkle-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-birthday-rose rounded-full sparkle-animation" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-anime-purple rounded-full sparkle-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Main message */}
          <div className="space-y-6 bounce-in">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Heart className="w-8 h-8 text-sakura-pink anime-float" />
              <Sparkles className="w-10 h-10 text-sparkle-gold magical-rotate" />
              <Star className="w-8 h-8 text-magic-violet anime-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-primary text-glow-strong mb-6">
              Happy Birthday, Rachita! 🎂
            </h2>
            
            <div className="space-y-4 text-xl md:text-2xl text-white/85 drop-shadow-lg">
              <p className="leading-relaxed">
                Wishing you endless happiness, boundless joy, 
              </p>
              <p className="leading-relaxed">
                and all the love your heart can hold! 💖
              </p>
              <p className="leading-relaxed">
                May this special day be filled with magical moments
              </p>
              <p className="leading-relaxed">
                and beautiful memories that last forever! ✨
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="py-8 bounce-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex justify-center items-center space-x-6 text-4xl">
              <span className="anime-float">🌸</span>
              <span className="anime-float" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="anime-float" style={{ animationDelay: '1s' }}>💫</span>
              <span className="anime-float" style={{ animationDelay: '1.5s' }}>🎉</span>
              <span className="anime-float" style={{ animationDelay: '2s' }}>💖</span>
            </div>
          </div>

          {/* Final blessing */}
          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-glow-soft bounce-in" style={{ animationDelay: '1s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-birthday-rose text-glow mb-4">
              "May your dreams take flight like sakura petals in the wind"
            </p>
            <p className="text-lg text-anime-purple">
              and may every moment sparkle with the magic you bring to this world! 🌟
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;