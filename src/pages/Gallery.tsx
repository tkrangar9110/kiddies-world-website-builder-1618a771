
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Calendar, Users, Star } from "lucide-react";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Learning Activities",
      description: "Children engaged in educational play and discovery",
      images: [
        { src: "/placeholder.svg", alt: "Math learning activity", caption: "Number games in Pre-K" },
        { src: "/placeholder.svg", alt: "Science experiment", caption: "Nature exploration" },
        { src: "/placeholder.svg", alt: "Reading time", caption: "Story time with Ms. Sarah" },
        { src: "/placeholder.svg", alt: "Art project", caption: "Creative expression time" }
      ]
    },
    {
      title: "Special Events",
      description: "Celebrations and memorable moments throughout the year",
      images: [
        { src: "/placeholder.svg", alt: "Holiday celebration", caption: "Winter celebration 2024" },
        { src: "/placeholder.svg", alt: "Graduation ceremony", caption: "Pre-K graduation" },
        { src: "/placeholder.svg", alt: "Family day", caption: "Annual family picnic" },
        { src: "/placeholder.svg", alt: "Costume party", caption: "Halloween fun day" }
      ]
    },
    {
      title: "Daily Activities",
      description: "Everyday moments of growth and learning",
      images: [
        { src: "/placeholder.svg", alt: "Outdoor play", caption: "Playground adventures" },
        { src: "/placeholder.svg", alt: "Lunch time", caption: "Healthy eating habits" },
        { src: "/placeholder.svg", alt: "Nap time", caption: "Peaceful rest period" },
        { src: "/placeholder.svg", alt: "Circle time", caption: "Morning circle discussion" }
      ]
    },
    {
      title: "Facilities",
      description: "Our safe and nurturing learning environments",
      images: [
        { src: "/placeholder.svg", alt: "Classroom", caption: "Bright and spacious classrooms" },
        { src: "/placeholder.svg", alt: "Playground", caption: "Safe outdoor play area" },
        { src: "/placeholder.svg", alt: "Library corner", caption: "Reading nook" },
        { src: "/placeholder.svg", alt: "Art station", caption: "Creative arts center" }
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

          {/* Gallery Categories */}
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <Camera className="h-16 w-16 text-white opacity-60" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{image.caption}</h3>
                      <p className="text-sm text-gray-600">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Recent Events Highlight */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Recent Event Highlights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Spring Festival</h3>
                <p className="text-sm text-gray-600">
                  Annual spring celebration with families, featuring performances and activities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Science Fair</h3>
                <p className="text-sm text-gray-600">
                  Children showcased their discoveries and experiments to families
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Awards Day</h3>
                <p className="text-sm text-gray-600">
                  Celebrating achievements and milestones of our wonderful students
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
