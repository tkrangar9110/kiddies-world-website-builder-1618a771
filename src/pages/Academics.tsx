
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Users, Brain, Heart, Star, CheckCircle } from "lucide-react";

const Academics = () => {
  const ageGroups = [
    {
      title: "Day-Care (6 months - 2 years)",
      icon: Heart,
      color: "bg-pink-500",
      requirements: [
        "Basic health and immunization records",
        "Diaper supplies and comfort items",
        "Feeding schedule and dietary information",
        "Emergency contact information"
      ]
    },
    {
      title: "Toddlers (2-3 years)",
      icon: Users,
      color: "bg-blue-500",
      requirements: [
        "Potty training progress documentation",
        "Updated immunization records",
        "Comfort items for nap time",
        "Allergy and dietary restriction information"
      ]
    },
    {
      title: "Nursery (3-4 years)",
      icon: BookOpen,
      color: "bg-green-500",
      requirements: [
        "Completed potty training",
        "Basic social interaction skills",
        "Ability to communicate needs verbally",
        "Current health assessment"
      ]
    },
    {
      title: "Pre-K (4-5 years)",
      icon: Brain,
      color: "bg-purple-500",
      requirements: [
        "Age-appropriate social skills",
        "Basic letter and number recognition",
        "Ability to follow simple instructions",
        "School readiness assessment"
      ]
    },
    {
      title: "Elementary Support (Grades 1-3)",
      icon: Star,
      color: "bg-orange-500",
      requirements: [
        "Current school enrollment verification",
        "Academic progress reports",
        "Homework assistance needs assessment",
        "After-school care authorization"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Academic <span className="text-blue-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive educational requirements and age-appropriate learning standards
            </p>
          </div>

          <div className="grid gap-8">
            {ageGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${group.color} rounded-full p-3 mr-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{group.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        Academic Requirements:
                      </h3>
                      <ul className="space-y-3">
                        {group.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">
                        Development Focus:
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          Cognitive Development
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          Social/Emotional Growth
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          Physical Development
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Language & Communication
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              General Academic Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Enrollment Requirements:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Current immunization records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Emergency contact information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Health assessment form</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Assessment Methods:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Regular developmental screenings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Portfolio-based assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Parent-teacher conferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600">Progress reports and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
