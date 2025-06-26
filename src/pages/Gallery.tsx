
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
          src: "/lovable-uploads/7837ad24-bc9f-49cb-8775-d31f025aa5eb.png", 
          alt: "Awards ceremony", 
          caption: "Annual Achievement Awards" 
        },
        { 
          src: "/lovable-uploads/d9c49945-a627-427f-bd40-476e81fd3b69.png", 
          alt: "Trophy presentation", 
          caption: "Excellence in Learning" 
        },
        { 
          src: "/lovable-uploads/69c4d973-55c7-40a1-8c14-c7b69feaa7f1.png", 
          alt: "Award winners", 
          caption: "Student Achievement Recognition" 
        },
        { 
          src: "/lovable-uploads/e32c67c2-288c-45fa-b882-f9bce407c63e.png", 
          alt: "Staff and parents celebration", 
          caption: "Community Achievement Celebration" 
        },
        { 
          src: "/lovable-uploads/3b32148d-6269-417f-ac26-619fb8212f56.png", 
          alt: "Award ceremony group photo", 
          caption: "Excellence Recognition Event" 
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
          src: "/lovable-uploads/5f497004-653d-4f83-8b3f-430d657342a4.png", 
          alt: "Career day costumes", 
          caption: "Future Professionals Day" 
        },
        { 
          src: "/lovable-uploads/bc1417d7-fa75-4a70-bee9-3d3128a6e449.png", 
          alt: "Students in professional attire", 
          caption: "When I Grow Up Theme" 
        },
        { 
          src: "/lovable-uploads/ab807f95-6fe5-496b-891f-78dfe9d0a3b0.png", 
          alt: "Career exploration", 
          caption: "Discovering Dream Jobs" 
        },
        { 
          src: "/lovable-uploads/a03d7f02-4e9a-40ae-ba24-66f2c88daeaf.png", 
          alt: "Professional dress up", 
          caption: "Career Exploration Day" 
        },
        { 
          src: "/lovable-uploads/5a10a917-69a1-4e40-8218-4b2b2e853c24.png", 
          alt: "Medical professionals career day", 
          caption: "Future Doctors and Nurses" 
        },
        { 
          src: "/lovable-uploads/19c48a8a-bca2-47b7-92e9-8952e7616f7c.png", 
          alt: "Doctor costume career day", 
          caption: "Little Doctor in Training" 
        },
        { 
          src: "/lovable-uploads/dba5b16b-469d-42dc-bd3f-58c4a17955aa.png", 
          alt: "Firefighter costume", 
          caption: "Future Firefighter Hero" 
        },
        { 
          src: "/lovable-uploads/0ffa3823-937c-4f14-a4d8-a22ddcf19f45.png", 
          alt: "Firefighter in action", 
          caption: "Emergency Services Career Day" 
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
          src: "/lovable-uploads/5303db98-928c-4f11-b7a7-c1bbaa3e7563.png", 
          alt: "School celebration", 
          caption: "Community Family Day" 
        },
        { 
          src: "/lovable-uploads/1b50bf9f-e7ec-4873-9a2e-c3a2a816f619.png", 
          alt: "Student showcase", 
          caption: "Special Events & Celebrations" 
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
          src: "/lovable-uploads/01734933-3bf6-42c6-8e3a-dc2d82da3c54.png", 
          alt: "Students learning", 
          caption: "Interactive Learning Session" 
        },
        { 
          src: "/lovable-uploads/2fd2bea9-465c-4a5b-bba7-20ffb421176f.png", 
          alt: "Happy students in classroom", 
          caption: "Classroom Joy and Learning" 
        },
      ]
    }
  ];

  console.log('Gallery updated with new uploaded images');
  console.log('Total images in gallery:', galleryCategories.reduce((total, cat) => total + cat.images.length, 0));

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
