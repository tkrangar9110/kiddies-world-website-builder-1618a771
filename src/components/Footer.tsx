import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/85064e33-bb10-4b81-ae99-c6209af82175.png" 
                alt="Kiddies World Logo" 
                className="h-8 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">Kiddies World</h3>
            </div>
            <p className="text-gray-300">
              Nurturing young minds and hearts in a safe, inclusive environment where every child can thrive and grow.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Our Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Day-Care (6 months - 2 years)</li>
              <li>Toddlers (2-3 years)</li>
              <li>Nursery (3-4 years)</li>
              <li>Pre-K (4-5 years)</li>
              <li>Elementary Support (Grades 1-3)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/requirements" className="hover:text-white transition-colors">Requirements</Link></li>
              <li><Link to="/schedule-tour" className="hover:text-white transition-colors">Schedule a Tour</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">Red Hill Field, Virginia, Montserrado County, Monrovia, Liberia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">0886510567 / 0776445800</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">kiddiesworldkcc13@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">Mon-Fri: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kiddies World Kinder Care Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/licensing" className="hover:text-white transition-colors">Licensing</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm italic">
            "Where learning meets love, and every child's potential is nurtured with care."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
