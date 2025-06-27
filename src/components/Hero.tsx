
import { Button } from "@/components/ui/button";
import { Heart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Heart className="h-12 w-12 text-pink-500" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="text-blue-600">Kiddies World</span>
            <br />
            <span className="text-orange-500">Kinder Care Center</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
            Providing a safe, developmentally inclusive environment where children 
            grow, learn, and thrive every day
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium">Ages 6 months - Grade 3</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <Users className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-700 font-medium">Nurturing Environment</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule-tour">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Schedule a Tour
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
