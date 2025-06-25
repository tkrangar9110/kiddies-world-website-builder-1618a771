
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Calendar, Users, Star, Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Photo <span className="text-pink-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Capturing precious moments of learning, growth, and joy at Kiddies World
            </p>
          </div>

          {/* Featured Carousel */}
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

          {/* Gallery Categories */}
          {galleryCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
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
          })}

          {/* Recent Events Highlight */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Recent Event Highlights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Achievement Awards</h3>
                <p className="text-sm text-gray-600">
                  Celebrating our students' outstanding accomplishments and academic excellence
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Exploration</h3>
                <p className="text-sm text-gray-600">
                  Students explored various professions and shared their future aspirations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Events</h3>
                <p className="text-sm text-gray-600">
                  Bringing families together through engaging activities and celebrations
                </p>
              </div>
            </div>
          </div>

          {/* Photo Sharing Information */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Sharing Your Child's Moments</h3>
            <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              We love capturing and sharing the special moments of your child's journey with us. 
              Photos are shared through our secure parent portal, and we always respect your 
              privacy preferences. If you have questions about photo sharing policies, 
              please don't hesitate to ask our staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Parent Portal Login
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-colors">
                Photo Policy Info
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
