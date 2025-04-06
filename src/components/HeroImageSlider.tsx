
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated client work images with new uploads (first 3 from the uploads)
const images = [
  "/lovable-uploads/33494cf3-5303-4f97-bac9-bd3fc412d590.png",
  "/lovable-uploads/c9f3c25a-0fcd-4cc8-849c-4d014e4dbcd8.png",
  "/lovable-uploads/42930263-f146-4382-89e9-8ac188ef3297.png",
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
