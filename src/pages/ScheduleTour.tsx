
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail, User, Baby } from "lucide-react";

const ScheduleTour = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tour request submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll contact you soon to confirm your tour.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Schedule a <span className="text-blue-600">Tour</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to show you our facilities and meet your family. Schedule your personalized tour today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tour Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Facility Tour</h3>
                    <p className="text-gray-600">Explore our classrooms, play areas, and learning environments designed for different age groups.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Meet Our Staff</h3>
                    <p className="text-gray-600">Get to know our qualified teachers and caregivers who will be working with your child.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Baby className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Programs Overview</h3>
                    <p className="text-gray-600">Learn about our curriculum, daily schedules, and age-appropriate activities.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Q&A Session</h3>
                    <p className="text-gray-600">Ask questions about enrollment, policies, and anything else you'd like to know.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-4">Tour Hours</h3>
                <div className="space-y-2 text-blue-700">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Monday - Friday: 9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Tours typically last 30-45 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Request Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Request Your Tour</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Child's name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Age *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select age</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1 year">1 year</option>
                      <option value="2 years">2 years</option>
                      <option value="3 years">3 years</option>
                      <option value="4 years">4 years</option>
                      <option value="5 years">5 years</option>
                      <option value="6 years">6 years</option>
                      <option value="7 years">7 years</option>
                      <option value="8 years">8 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific questions or requirements for your visit..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-md transition-colors"
                >
                  Schedule My Tour
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Need to speak with us directly?</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>0886510567 / 0776445800</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>kiddiesworldkcc13@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleTour;
