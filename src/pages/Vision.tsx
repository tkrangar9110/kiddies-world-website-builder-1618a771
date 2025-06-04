
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, Target, Lightbulb, Globe } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-purple-600">Vision</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Shaping the future through exceptional early childhood education
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-purple-600 rounded-full p-4">
                <Eye className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Vision Statement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              To be the premier early childhood education center that empowers children 
              to become confident, creative, and compassionate learners who are prepared 
              to thrive in an ever-changing world. We envision a community where every 
              child's unique potential is recognized, nurtured, and celebrated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in all aspects of early childhood education, 
                setting high standards for learning, care, and development.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-green-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace innovative teaching methods and technologies to create 
                engaging learning experiences that prepare children for the future.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-orange-600 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We build strong partnerships with families and the community to 
                create a supportive network that benefits every child's growth.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              As we look to the future, we remain committed to evolving our programs 
              and approaches to meet the changing needs of children and families. 
              Our vision guides us in creating an environment where learning is joyful, 
              discovery is celebrated, and every child can reach their full potential.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
