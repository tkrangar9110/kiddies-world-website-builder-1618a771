
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import GalleryHero from "@/components/gallery/GalleryHero";
import FeaturedCarousel from "@/components/gallery/FeaturedCarousel";
import GalleryCategory from "@/components/gallery/GalleryCategory";
import EventHighlights from "@/components/gallery/EventHighlights";
import PhotoSharingInfo from "@/components/gallery/PhotoSharingInfo";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Awards & Recognition",
      description: "Celebrating achievements and milestones of our wonderful students",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
      images: [
        { 
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", 
          alt: "Awards ceremony", 
          caption: "Annual Achievement Awards" 
        },
        { 
          src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop", 
          alt: "Trophy presentation", 
          caption: "Excellence in Learning" 
        },
      ]
    },
    {
      title: "Career Day Adventures",
      description: "Exploring future dreams and professional aspirations",
      icon: Briefcase,
      color: "from-blue-400 to-purple-500",
      images: [
        { 
          src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop", 
          alt: "Career day costumes", 
          caption: "Future Professionals Day" 
        },
        { 
          src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop", 
          alt: "Students in professional attire", 
          caption: "When I Grow Up Theme" 
        },
        { 
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", 
          alt: "Career exploration", 
          caption: "Discovering Dream Jobs" 
        },
      ]
    },
    {
      title: "School Events & Celebrations",
      description: "Community gatherings and special occasions that bring us together",
      icon: Heart,
      color: "from-pink-400 to-red-500",
      images: [
        { 
          src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop", 
          alt: "School celebration", 
          caption: "Community Family Day" 
        },
        { 
          src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop", 
          alt: "Outdoor school event", 
          caption: "Annual School Picnic" 
        },
      ]
    },
    {
      title: "Learning in Action",
      description: "Students engaged in educational activities and creative expression",
      icon: GraduationCap,
      color: "from-green-400 to-blue-500",
      images: [
        { 
          src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop", 
          alt: "Students learning", 
          caption: "Interactive Learning Session" 
        },
        { 
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", 
          alt: "Educational activity", 
          caption: "Hands-on Discovery" 
        },
        { 
          src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop", 
          alt: "Creative learning", 
          caption: "Creative Expression Time" 
        },
      ]
    }
  ];

  console.log('Gallery categories with new image paths:', galleryCategories);
  console.log('New image URLs being used:', galleryCategories.map(cat => cat.images.map(img => img.src)));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <GalleryHero />
          <FeaturedCarousel galleryCategories={galleryCategories} />
          
          {galleryCategories.map((category, categoryIndex) => (
            <GalleryCategory key={categoryIndex} category={category} />
          ))}

          <EventHighlights />
          <PhotoSharingInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
