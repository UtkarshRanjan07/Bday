import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Photos array with the uploaded images
  const photos = [
    { src: "/lovable-uploads/21508498-9a94-4213-a9bb-d8711f622bdf.png", alt: "Rachita in elegant white saree" },
    { src: "/lovable-uploads/3eed22fd-80e5-4c25-a450-ff29903b1f6f.png", alt: "Rachita creating rangoli art" },
    { src: "/lovable-uploads/32786a20-0401-4ce8-82b4-b23841e3c227.png", alt: "Rachita in beautiful blue traditional outfit" },
    { src: "/lovable-uploads/a57b8a09-2bd4-4b8d-ba09-cea2e98b98d5.png", alt: "Rachita stylish mirror selfie" },
    { src: "/lovable-uploads/5efd092b-93b7-4ffb-91dc-3122a950cc6e.png", alt: "Rachita cozy casual moment" },
    { src: "/lovable-uploads/4bfc2ecb-8d66-4f08-9960-8146b0169370.png", alt: "Rachita artistic mirror reflection" },
    { src: "/lovable-uploads/7dc48c1a-32e0-4b55-b523-9c16e7d96604.png", alt: "Rachita vintage camera style" },
    { src: "/lovable-uploads/11a48fee-6259-4c1a-aca4-8994490b5d84.png", alt: "Rachita retro camera aesthetic" },
    { src: "/lovable-uploads/1861ae7d-3656-479e-a8ac-2dd083138a4b.png", alt: "Rachita relaxing moment" },
    { src: "/lovable-uploads/e6578a37-e5ce-48e3-9313-d2f379dc6749.png", alt: "Rachita natural smile" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-sakura">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary text-glow bounce-in mb-4">
            ✨ Beautiful Memories ✨
          </h2>
          <p className="text-xl text-magic-violet">A collection of wonderful moments</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-glow-soft hover:shadow-glow-strong transition-magic">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-magic"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-magic opacity-0 group-hover:opacity-20 transition-magic"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-magic">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
                    <span className="text-primary-foreground font-semibold">Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-md border-primary/30 shadow-glow-strong">
            {selectedImage !== null && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 z-10 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/80 transition-magic shadow-glow-soft"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={photos[selectedImage].src}
                  alt={photos[selectedImage].alt}
                  className="w-full h-auto rounded-xl shadow-glow-magic"
                />
                <div className="mt-4 text-center">
                  <p className="text-magic-violet font-medium">{photos[selectedImage].alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;