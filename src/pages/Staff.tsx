
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Star, Award } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      name: "Sarah Johnson",
      title: "Director & Lead Educator",
      qualifications: "M.Ed. Early Childhood Education, 15+ years experience",
      specialties: ["Curriculum Development", "Child Psychology", "Family Engagement"],
      image: "/placeholder.svg"
    },
    {
      name: "Maria Rodriguez",
      title: "Pre-K Lead Teacher",
      qualifications: "B.A. Elementary Education, Montessori Certified",
      specialties: ["School Readiness", "Language Development", "Creative Arts"],
      image: "/placeholder.svg"
    },
    {
      name: "Jennifer Chen",
      title: "Infant & Toddler Specialist",
      qualifications: "B.S. Child Development, Infant Care Certification",
      specialties: ["Early Development", "Nutrition", "Sensory Learning"],
      image: "/placeholder.svg"
    },
    {
      name: "Michael Thompson",
      title: "Physical Education Coordinator",
      qualifications: "B.S. Kinesiology, Youth Fitness Specialist",
      specialties: ["Motor Skills", "Outdoor Activities", "Health & Wellness"],
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Williams",
      title: "Special Needs Coordinator",
      qualifications: "M.S. Special Education, IEP Specialist",
      specialties: ["Inclusive Education", "Behavioral Support", "Family Advocacy"],
      image: "/placeholder.svg"
    },
    {
      name: "David Park",
      title: "After-School Program Director",
      qualifications: "B.A. Education, Homework Help Specialist",
      specialties: ["Academic Support", "Homework Assistance", "Study Skills"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Dedicated <span className="text-green-600">Staff</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the caring professionals who nurture and educate your children every day
            </p>
          </div>

          {/* Staff Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {staffMembers.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Heart className="h-16 w-16 text-blue-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{staff.name}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">{staff.title}</h4>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Qualifications:</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{staff.qualifications}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Specialties:</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {staff.specialties.map((specialty, specIndex) => (
                        <div key={specIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Staff Qualifications */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Standards & Qualifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-sm text-gray-600">
                  All staff hold relevant degrees in education or child development
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Certification</h3>
                <p className="text-sm text-gray-600">
                  CPR, First Aid, and age-appropriate teaching certifications
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience</h3>
                <p className="text-sm text-gray-600">
                  Minimum 3+ years experience in early childhood education
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Training</h3>
                <p className="text-sm text-gray-600">
                  Ongoing professional development and specialized training
                </p>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              We're always looking for passionate, qualified educators to join our family. 
              If you're dedicated to nurturing young minds and making a difference in children's lives, 
              we'd love to hear from you.
            </p>
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
