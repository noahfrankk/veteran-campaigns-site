
import React, { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Client work images
const images = [
  "/lovable-uploads/17fb8b2e-400a-469d-9c36-d2dc9097c8a1.png",
  "/lovable-uploads/41e8b3a2-5896-4846-bbc8-7fce84445ad7.png",
  "/lovable-uploads/05403e95-4ce0-4741-89f1-86fdc721b9e4.png",
  "/lovable-uploads/7b947215-8f55-4a9f-92be-d0b31f432174.png",
];

const HeroImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1460ab]/10 to-[#10acdc]/10" />
              <div className="p-1">
                <div className="rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`Client Work ${index + 1}`} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
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
