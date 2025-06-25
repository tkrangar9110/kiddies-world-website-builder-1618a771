
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LucideIcon } from 'lucide-react';

interface GalleryCategoryProps {
  category: {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    images: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
  };
}

const GalleryCategory = ({ category }: GalleryCategoryProps) => {
  const IconComponent = category.icon;
  
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.images.map((image, imageIndex) => (
          <Card key={imageIndex} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.caption}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GalleryCategory;
