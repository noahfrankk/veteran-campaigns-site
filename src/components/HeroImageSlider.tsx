
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated client work images with new uploads - removed the fourth image
const images = [
  "/lovable-uploads/daf939d5-adbc-44ca-831e-ae3a2083853f.png",
  "/lovable-uploads/a47949c9-3ba7-4d0b-9b73-a5bb95c3deb5.png",
  "/lovable-uploads/719bb9ec-500b-4f84-894c-16ba44a24261.png",
];

const HeroImageSlider: React.FC = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="rounded-lg overflow-hidden aspect-square bg-primary-cyan-blue/20 flex items-center justify-center p-4">
                  <img 
                    src={image} 
                    alt={`Client Work ${index + 1}`} 
                    className="w-full h-full object-contain transition-all duration-300"
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
