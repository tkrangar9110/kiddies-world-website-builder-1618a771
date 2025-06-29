
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";

const ScheduleTour = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Schedule Your <span className="text-blue-600">Tour</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Come visit us and see why Kiddies World is the perfect place for your child to learn and grow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Tour Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <CalendarDays className="h-6 w-6 text-blue-600 mr-3" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Meet our caring and qualified teachers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">See our safe and nurturing classrooms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Learn about our educational programs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Explore our play areas and facilities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">Discuss enrollment options and requirements</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    Tour Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 3:00 PM</p>
                  <p className="text-gray-600"><strong>Duration:</strong> Approximately 30-45 minutes</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Red Hill Field, Virginia<br />
                    Montserrado County<br />
                    Monrovia, Liberia
                  </p>
                  <div className="flex items-center mt-4">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">0886510567 / 0776445800</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tour Request Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 text-center">Request Your Tour</CardTitle>
                <p className="text-gray-600 text-center">
                  Fill out the form below and we'll contact you to confirm your tour date and time.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action="https://formsubmit.co/kiddiesworldkcc13@gmail.com" method="POST" className="space-y-6">
                  {/* Hidden fields for better user experience */}
                  <input type="hidden" name="_subject" value="New Tour Request from Kiddies World" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent Name</Label>
                      <Input 
                        id="parentName" 
                        name="Parent Name"
                        placeholder="Enter your full name" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Name</Label>
                      <Input 
                        id="childName" 
                        name="Child Name"
                        placeholder="Enter your child's name" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Child's Age</Label>
                      <select name="Child Age" className="w-full p-2 border border-gray-300 rounded-md" required>
                        <option value="">Select age</option>
                        <option value="6 months - 1 year">6 months - 1 year</option>
                        <option value="1 - 2 years">1 - 2 years</option>
                        <option value="2 - 3 years">2 - 3 years</option>
                        <option value="3 - 4 years">3 - 4 years</option>
                        <option value="4 - 5 years">4 - 5 years</option>
                        <option value="5 - 6 years">5 - 6 years</option>
                        <option value="6+ years">6+ years</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="Email Address"
                        type="email" 
                        placeholder="Enter your email" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="Phone Number"
                      type="tel" 
                      placeholder="Enter your phone number" 
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input 
                        id="preferredDate" 
                        name="Preferred Date"
                        type="date" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <select name="Preferred Time" className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea 
                      id="message" 
                      name="Additional Message"
                      placeholder="Any specific questions or requirements for your visit?"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                    Request Tour
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleTour;
