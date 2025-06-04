
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, BookOpen, Star, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Safe Environment",
      description: "Creating secure spaces where children feel protected and can explore confidently."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Nurturing Care",
      description: "Providing loving support that encourages each child's emotional and social growth."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: "Lifelong Learning",
      description: "Fostering natural curiosity and the desire to learn, discover, and grow."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Family Support",
      description: "Partnering with families to provide comprehensive support and encouragement."
    }
  ];

  const achievements = [
    { icon: <Star className="h-6 w-6 text-yellow-500" />, text: "Licensed & Accredited" },
    { icon: <Award className="h-6 w-6 text-blue-500" />, text: "Experienced Staff" },
    { icon: <Heart className="h-6 w-6 text-pink-500" />, text: "Family-Centered Approach" },
    { icon: <Shield className="h-6 w-6 text-green-500" />, text: "Safe & Secure Facility" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-orange-500">Kiddies World</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At Kiddies World Kinder Care Center, our focus is to provide stimulating early learning 
            and support social/emotional, physical, and cognitive development. Our goal is to nurture 
            children's natural desire to be lifelong learners while providing unwavering support to 
            the families we serve.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-2">
                  {achievement.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <div className="bg-gray-50 rounded-full p-4 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Commitment</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to creating an inclusive environment where every child feels valued, 
                supported, and encouraged to reach their full potential. Our experienced team of 
                educators and caregivers work closely with families to ensure each child receives 
                the individual attention they deserve.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Developmentally appropriate curriculum</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Small class sizes for individual attention</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Regular communication with families</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuous professional development</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8 text-center">
              <div className="bg-white rounded-full p-6 mx-auto mb-6 w-24 h-24 flex items-center justify-center shadow-md">
                <Heart className="h-12 w-12 text-pink-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Where Learning Meets Love</h4>
              <p className="text-gray-600">
                Every day, we create magical moments of discovery, growth, and joy for the children in our care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
