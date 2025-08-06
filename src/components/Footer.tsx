import { Heart, Sparkles, Gift } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-sakura border-t border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Decorative icons */}
          <div className="flex justify-center items-center space-x-6">
            <Sparkles className="w-8 h-8 text-sparkle-gold sparkle-animation" />
            <Heart className="w-10 h-10 text-sakura-pink glow-pulse" />
            <Gift className="w-8 h-8 text-magic-violet anime-float" />
          </div>
          
          {/* Main footer text */}
          <div className="space-y-3">
            <p className="text-2xl font-bold text-primary text-glow">
              Made with love for Rachita 💕
            </p>
            <p className="text-lg text-magic-violet">
              Celebrating another year of your beautiful journey! ✨
            </p>
          </div>
          
          {/* Anime-style decorative border */}
          <div className="flex justify-center items-center space-x-2 py-4">
            <div className="w-16 h-1 bg-gradient-magic rounded-full"></div>
            <div className="w-4 h-4 bg-sakura-pink rounded-full sparkle-animation"></div>
            <div className="w-6 h-6 bg-anime-purple rounded-full anime-float"></div>
            <div className="w-4 h-4 bg-sparkle-gold rounded-full sparkle-animation" style={{ animationDelay: '1s' }}></div>
            <div className="w-16 h-1 bg-gradient-magic rounded-full"></div>
          </div>
          
          {/* Final wishes */}
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <p className="text-birthday-rose font-medium text-lg">
              🌸 May your special day be as wonderful as you are! 🌸
            </p>
            <p className="text-anime-blue mt-2">
              Happy Birthday, beautiful soul! 🎂✨
            </p>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 text-sm text-muted-foreground">
            <p>• A magical birthday celebration • Made with 💖 for Rachita Ranjan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;