
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Shield, Star } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Kiddies World</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn about our mission, values, and commitment to nurturing young minds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Mission Statement</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The mission of the Kiddies World Kinder Care Center is to provide the highest quality care, while creating a nurturing and supportive environment for children, parents, and highly skilled staff. Through a play-based program that attends to the whole child, we seek to enrich every child's experience, and to empower each child to joyfully develop at his/her own rate. Through, the cooperative partnership of parents and staff, we provide a model of community that will sustain and enrich our children throughout their lives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
              </div>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  Safety and security for every child
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-3" />
                  Inclusive and supportive environment
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-pink-500 mr-3" />
                  Nurturing care and encouragement
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  Excellence in early childhood education
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Vision Statement
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-3xl mx-auto">
              We provide a safe, developmentally, inclusive environment for: Day-Care, toddlers, Nursery, Pre-K, Pre-1st, Grade 1, 2, & Grade 3 school age children. Our focus is to provide stimulating early learning and social/emotional, physical and cognitive development. Our goal is to support and nurture that children's and our worn natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
