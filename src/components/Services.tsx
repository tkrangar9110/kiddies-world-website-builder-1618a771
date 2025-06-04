
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Heart, BookOpen, Users, Palette, Music } from "lucide-react";

const Services = () => {
  const ageGroups = [
    {
      title: "Day-Care (6 months - 2 years)",
      icon: <Baby className="h-8 w-8 text-pink-500" />,
      description: "Loving care for your littlest ones with focus on safety, comfort, and early sensory development.",
      features: ["Safe environment", "Sensory play", "Loving caregivers", "Flexible schedules"]
    },
    {
      title: "Toddlers (2-3 years)",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: "Encouraging independence and social skills through play-based learning and exploration.",
      features: ["Social development", "Motor skills", "Language building", "Creative play"]
    },
    {
      title: "Nursery (3-4 years)",
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      description: "Creative expression and early learning fundamentals in a structured yet playful environment.",
      features: ["Art & creativity", "Pre-literacy", "Number concepts", "Emotional growth"]
    },
    {
      title: "Pre-K (4-5 years)",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      description: "School readiness program focusing on academic foundations and social-emotional development.",
      features: ["School preparation", "Reading readiness", "Math concepts", "Social skills"]
    },
    {
      title: "Pre-1st & Grades 1-3",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description: "Comprehensive elementary support with homework assistance and enrichment activities.",
      features: ["Homework help", "Academic support", "Enrichment programs", "Character building"]
    }
  ];

  const developmentAreas = [
    {
      title: "Social & Emotional",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      description: "Building confidence, empathy, and healthy relationships"
    },
    {
      title: "Physical Development",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      description: "Gross and fine motor skills through active play"
    },
    {
      title: "Cognitive Growth",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      description: "Critical thinking and problem-solving abilities"
    },
    {
      title: "Creative Expression",
      icon: <Music className="h-6 w-6 text-orange-500" />,
      description: "Arts, music, and imaginative play opportunities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From infants to elementary school children, we provide age-appropriate programs 
            that nurture every child's unique potential and foster lifelong learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ageGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-50 rounded-full p-4">
                    {group.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <ul className="space-y-2">
                  {group.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our <span className="text-orange-500">Development Focus</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-md">
                  {area.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
