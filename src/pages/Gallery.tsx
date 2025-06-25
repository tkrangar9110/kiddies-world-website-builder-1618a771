
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
          src: "/lovable-uploads/fd7f4c62-6b5b-4dd8-aadc-0df7f2a70e6f.png", 
          alt: "Awards ceremony", 
          caption: "Annual Achievement Awards" 
        },
        { 
          src: "/lovable-uploads/4bb7bdc1-3399-4119-af94-1e6949c6eaaf.png", 
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
          src: "/lovable-uploads/85b51b69-5e87-4b95-bb50-9d16ef00c0b9.png", 
          alt: "Career day costumes", 
          caption: "Future Professionals Day" 
        },
        { 
          src: "/lovable-uploads/1f07e37f-9d6a-4bf4-9b14-06a06cb0e9e8.png", 
          alt: "Students in professional attire", 
          caption: "When I Grow Up Theme" 
        },
        { 
          src: "/lovable-uploads/6aebacf4-4b49-4ed3-8c58-e4e81cf38bb7.png", 
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
          src: "/lovable-uploads/f8b4c44b-6c75-4b45-bb0b-5c18b5946a0c.png", 
          alt: "School celebration", 
          caption: "Community Family Day" 
        },
        { 
          src: "/lovable-uploads/61e9d4f3-b04e-4c8d-a738-bee7dea5adf1.png", 
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
          src: "/lovable-uploads/39c69ffe-1b94-47f5-8344-b491ee0b1616.png", 
          alt: "Students learning", 
          caption: "Interactive Learning Session" 
        },
        { 
          src: "/lovable-uploads/c869de5b-3b5e-4fb4-8c6b-cf8b83b27d3f.png", 
          alt: "Educational activity", 
          caption: "Hands-on Discovery" 
        },
        { 
          src: "/lovable-uploads/9b81e40d-f2e3-4ad6-8bb9-0c6fb33f4b77.png", 
          alt: "Creative learning", 
          caption: "Creative Expression Time" 
        },
      ]
    }
  ];

  console.log('Gallery categories:', galleryCategories);
  console.log('Image paths being used:', galleryCategories.map(cat => cat.images.map(img => img.src)));

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
