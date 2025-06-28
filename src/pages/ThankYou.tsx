
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Calendar } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="bg-green-100 rounded-full p-6 mx-auto mb-6 w-24 h-24 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎉 Thank You!
            </h1>

            {/* Confirmation Message */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We've received your message and will be in touch shortly. We're excited to help your child begin their learning journey with us!
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">What happens next?</h3>
                <div className="space-y-2 text-blue-700 text-left">
                  <p>✅ We'll review your request within 24 hours</p>
                  <p>✅ You'll receive a confirmation call or email</p>
                  <p>✅ We'll schedule your personalized tour</p>
                  <p>✅ Get ready to see why families love Kiddies World!</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg flex items-center gap-2"
                >
                  <Home className="h-5 w-5" />
                  Return to Home
                </Button>
              </Link>
              
              <Link to="/schedule-tour">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule Another Tour
                </Button>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Questions? We're here to help!</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <span>📞</span>
                  <span>0886510567 / 0776445800</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✉️</span>
                  <span>kiddiesworldkcc13@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Warm Closing Message */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic">
                "Thank you for choosing Kiddies World Kinder-Care Center. <br />
                We can't wait to welcome your family!" 🧸🌈
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
