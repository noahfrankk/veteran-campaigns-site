
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Updated client work images with new uploads
const images = [
  "/lovable-uploads/dcaf19f6-4ed3-40ca-893e-a21a708ca8b1.png",
  "/lovable-uploads/1113947f-0110-44b6-b131-619a3e1e1a55.png",
  "/lovable-uploads/9ae4af05-faf5-488c-98cc-215a0ae1dd8c.png",
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
