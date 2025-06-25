
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeaturedCarouselProps {
  galleryCategories: Array<{
    title: string;
    images: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  }>;
}

const FeaturedCarousel = ({ galleryCategories }: FeaturedCarouselProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Moments</h2>
      <div className="max-w-4xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {galleryCategories.flatMap(category => 
              category.images.slice(0, 1).map((image, index) => (
                <CarouselItem key={`${category.title}-${index}`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9}>
                        <div className="relative h-full overflow-hidden rounded-lg">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold mb-1">{image.caption}</h3>
                            <p className="text-sm opacity-90">{category.title}</p>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
