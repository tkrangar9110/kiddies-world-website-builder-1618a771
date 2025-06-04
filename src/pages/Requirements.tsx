
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Users, Brain, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Requirements = () => {
  const gradeRequirements = [
    {
      title: "Day-Care (6 months - 2 years)",
      icon: Users,
      color: "bg-pink-500",
      basicRequirements: [
        "Current immunization records",
        "Health assessment form completed by physician",
        "Emergency contact information (minimum 3 contacts)",
        "Feeding schedule and dietary information",
        "Diaper supplies and comfort items",
        "Sleep schedule documentation"
      ],
      booksAndReaders: [
        "Board books with simple pictures",
        "Touch-and-feel sensory books",
        "Musical books with sound buttons",
        "Cloth books for safe exploration",
        "Large picture books for story time"
      ]
    },
    {
      title: "Toddlers (2-3 years)",
      icon: Brain,
      color: "bg-blue-500",
      basicRequirements: [
        "Updated immunization records",
        "Potty training progress documentation",
        "Ability to walk independently",
        "Basic verbal communication skills",
        "Comfort items for nap time",
        "Allergy and dietary restriction information"
      ],
      booksAndReaders: [
        "Simple picture books with basic words",
        "Interactive books with flaps and textures",
        "Counting books (1-10)",
        "Color identification books",
        "Animal sound books",
        "Short story books for attention span development"
      ]
    },
    {
      title: "Nursery (3-4 years)",
      icon: BookOpen,
      color: "bg-green-500",
      basicRequirements: [
        "Completed potty training",
        "Ability to communicate needs clearly",
        "Basic social interaction skills",
        "Following simple 2-3 step instructions",
        "Current health assessment",
        "Separation comfort from parents"
      ],
      booksAndReaders: [
        "Alphabet recognition books (A-Z)",
        "Phonics beginning readers",
        "Number books (1-20)",
        "Shape and color learning books",
        "Simple rhyming books",
        "Basic sight word books"
      ]
    },
    {
      title: "Pre-K (4-5 years)",
      icon: GraduationCap,
      color: "bg-purple-500",
      basicRequirements: [
        "Age-appropriate social skills",
        "Basic letter recognition (uppercase and lowercase)",
        "Number recognition (1-20)",
        "Ability to write first name",
        "Following classroom rules and routines",
        "School readiness assessment completion"
      ],
      booksAndReaders: [
        "Beginning reader series (Level 1)",
        "Phonics workbooks",
        "Math concept books (addition/subtraction basics)",
        "Science exploration books",
        "Character development story books",
        "Writing practice books"
      ]
    },
    {
      title: "Elementary Support (Grades 1-3)",
      icon: Star,
      color: "bg-orange-500",
      basicRequirements: [
        "Current school enrollment verification",
        "Academic progress reports from primary school",
        "Reading level assessment",
        "Math skills evaluation",
        "Homework completion capabilities",
        "After-school care authorization from parents"
      ],
      booksAndReaders: [
        "Grade-level reading books",
        "Math workbooks aligned with grade standards",
        "Science textbooks and activity books",
        "Writing composition books",
        "Reference materials (dictionary, atlas)",
        "Educational magazines and periodicals"
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
              Academic <span className="text-blue-600">Requirements</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive requirements for each grade level including basic academic standards and recommended books and readers
            </p>
          </div>

          <div className="grid gap-8">
            {gradeRequirements.map((grade, index) => {
              const IconComponent = grade.icon;
              return (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`${grade.color} rounded-full p-3 mr-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-800">{grade.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Basic Requirements
                        </h3>
                        <ul className="space-y-3">
                          {grade.basicRequirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
                          Required Books & Readers
                        </h3>
                        <ul className="space-y-3">
                          {grade.booksAndReaders.map((book, bookIndex) => (
                            <li key={bookIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{book}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-800 text-center">
                  General Enrollment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      All Students Must Provide:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Completed enrollment application</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Birth certificate or age verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Current immunization records</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Emergency contact information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Health assessment by licensed physician</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Assessment & Evaluation:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Pre-enrollment developmental screening</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Ongoing progress monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Quarterly parent-teacher conferences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Portfolio-based documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Year-end progress reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Requirements;
