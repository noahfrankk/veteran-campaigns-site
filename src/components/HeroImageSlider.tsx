
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated client work images with the first three from the new uploads
const images = [
  "/lovable-uploads/027375c9-7928-4b48-9d29-6e4067c238f4.png",
  "/lovable-uploads/ffe6f323-ca9e-4a84-910a-fb58cb12f534.png",
  "/lovable-uploads/30e0140e-030a-41ee-8d89-6c8989da5f5e.png",
];

const HeroImageSlider: React.FC = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center p-4">
                  <img 
                    src={image} 
                    alt={`Campaign Example ${index + 1}`} 
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
