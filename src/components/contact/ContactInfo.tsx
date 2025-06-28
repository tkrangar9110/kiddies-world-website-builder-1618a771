
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
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
        <Link to="/schedule-tour">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Book Your Tour
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
