
import React, { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated client work images with new uploads
const images = [
  "/lovable-uploads/daf939d5-adbc-44ca-831e-ae3a2083853f.png",
  "/lovable-uploads/a47949c9-3ba7-4d0b-9b73-a5bb95c3deb5.png",
  "/lovable-uploads/719bb9ec-500b-4f84-894c-16ba44a24261.png",
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
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`Client Work ${index + 1}`} 
                    className="w-full h-full object-contain filter grayscale transition-all duration-300"
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
