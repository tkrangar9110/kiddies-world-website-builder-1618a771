
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <Heart className="h-6 w-6" />
              </div>
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
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enrollment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Licensing</a>
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
