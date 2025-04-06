
import React, { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

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

    // Auto-scroll interval (5 seconds)
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel className="w-full max-w-[175%]" setApi={setApi}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center p-4">
                  <img 
                    src={image} 
                    alt={`Campaign Example ${index + 1}`} 
                    className="w-full h-full object-contain transition-all duration-300 scale-[1.4]" // Reduced from 1.75 to 1.4 (20% smaller)
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default HeroImageSlider;
