
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the best start? Contact us today to schedule a tour 
            and learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Red Hill Field, Virginia<br />
                  Montserrado County<br />
                  Monrovia, Liberia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-medium text-lg">
                  0886510567 / 0776445800
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Monday - Friday: 8:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-purple-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  kiddiesworldkcc13@gmail.com
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="font-bold text-gray-800">Schedule a Tour</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                See our facilities and meet our caring staff. Tours available Monday through Friday.
              </p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Book Your Tour
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 text-center">Send Us a Message</CardTitle>
                <p className="text-gray-600 text-center">
                  Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childAge">Child's Age/Program Interest</Label>
                  <Input id="childAge" placeholder="e.g., 3 years old - Nursery program" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your needs, questions, or schedule preferences..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Family?</h3>
          <p className="text-xl mb-8 opacity-90">
            Enrollment is open! Secure your child's spot in our nurturing learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Download Enrollment Forms
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
