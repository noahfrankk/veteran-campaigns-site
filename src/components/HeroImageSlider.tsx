
import React, { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

// Updated with newly uploaded hero images
const images = [
  "/lovable-uploads/c1fa1053-d369-455d-9954-f4fc65e1d74f.png",
  "/lovable-uploads/88c8b938-bbc7-4f31-8c16-699406762764.png",
  "/lovable-uploads/db3fcf6e-9a6d-4d23-8062-701a2e13448d.png",
];

const HeroImageSlider: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  // Set up auto-scrolling with useEffect
  useEffect(() => {
    if (!api) return;

    // Auto-scroll interval (8 seconds - slowed down from 5)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full max-w-[175%]">
      {/* Add fade overlay on left */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <div className="p-1">
                  <div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center p-4">
                    <img 
                      src={image} 
                      alt={`Campaign Example ${index + 1}`} 
                      className="w-full h-full object-contain transition-all duration-300 scale-[1.4]"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 z-20" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* Add fade overlay on right */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

export default HeroImageSlider;
