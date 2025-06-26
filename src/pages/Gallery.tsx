
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
        { 
          src: "/lovable-uploads/b321771b-8172-4f50-955d-8c7a733ee4c7.png", 
          alt: "Certificate presentation ceremony", 
          caption: "Academic Excellence Recognition" 
        },
        { 
          src: "/lovable-uploads/24add711-85ab-4cc1-b9f9-c3b21623c6a6.png", 
          alt: "Graduation ceremony with certificates", 
          caption: "Graduation Day Awards" 
        },
        { 
          src: "/lovable-uploads/15689b1f-56e7-4a13-9472-c2998adce8a3.png", 
          alt: "Miss Kiddies World royalty award ceremony", 
          caption: "Miss & Mr. Kiddies World Royalty" 
        },
        { 
          src: "/lovable-uploads/9da898e2-be86-43d1-90db-ba8827e4930f.png", 
          alt: "Kiddies World royalty winners", 
          caption: "Royal Recognition Ceremony" 
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
        { 
          src: "/lovable-uploads/dfc5f860-5bc7-4a4f-b407-360f59cb24ba.png", 
          alt: "Students in elegant dresses at celebration", 
          caption: "Formal Celebration Event" 
        },
        { 
          src: "/lovable-uploads/6c1222b5-8ae6-4966-b859-473fdd9f38fb.png", 
          alt: "Paint and Sip party with students in aprons", 
          caption: "Paint & Sip Creative Party" 
        },
        { 
          src: "/lovable-uploads/4244c111-11c3-4c57-aff6-74f1c6853b73.png", 
          alt: "Students lined up for Paint & Sip event", 
          caption: "Paint & Sip Group Activity" 
        },
        { 
          src: "/lovable-uploads/e888b675-76f1-4b19-940e-9e4cf4449cea.png", 
          alt: "Children enjoying Paint & Sip party meal", 
          caption: "Paint & Sip Party Celebration" 
        },
        { 
          src: "/lovable-uploads/e609beac-f107-4bf3-b2f6-b4cfaa8487f0.png", 
          alt: "Students showing off their artwork", 
          caption: "Paint & Sip Art Showcase" 
        },
        { 
          src: "/lovable-uploads/297b1883-d8a9-4ae3-99f8-b1d93ec30a1f.png", 
          alt: "Children displaying their creative paintings", 
          caption: "Creative Art Exhibition" 
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
        { 
          src: "/lovable-uploads/7cf5898d-9aa9-4b1a-b0f1-4e02db17858c.png", 
          alt: "Student speaking at graduation", 
          caption: "Student Leadership Speech" 
        },
        { 
          src: "/lovable-uploads/21c58697-48d8-4abb-9de1-a21ed55be923.png", 
          alt: "Graduate giving speech", 
          caption: "Graduation Speech Presentation" 
        },
        { 
          src: "/lovable-uploads/c23aa164-8fd8-489c-9994-fdd176c0660c.png", 
          alt: "Young graduate with microphone", 
          caption: "Confident Young Speaker" 
        },
        { 
          src: "/lovable-uploads/280a41ea-b6aa-4369-b031-6c12d0eceada.png", 
          alt: "Graduation ceremony graduates", 
          caption: "Proud Graduates Together" 
        },
        { 
          src: "/lovable-uploads/1cb8c0f7-2f40-4504-85e0-b31f0b710f4b.png", 
          alt: "Group of graduates in caps and gowns", 
          caption: "Graduation Day Group Photo" 
        },
        { 
          src: "/lovable-uploads/ee64d6b4-fd7e-4704-9f27-5d094a794c81.png", 
          alt: "Graduate with award ribbon speaking", 
          caption: "Award Winner Speech" 
        },
        { 
          src: "/lovable-uploads/5d7051cc-81d5-45d7-a162-940eea13d9c1.png", 
          alt: "Student speaking at podium", 
          caption: "Public Speaking Excellence" 
        },
        { 
          src: "/lovable-uploads/489d92ab-0bab-41e2-872a-cdf61bb4fbaa.png", 
          alt: "Teacher with students in classroom", 
          caption: "Engaged Classroom Learning" 
        },
      ]
    }
  ];

  console.log('Gallery updated with Paint & Sip party and classroom photos');
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
