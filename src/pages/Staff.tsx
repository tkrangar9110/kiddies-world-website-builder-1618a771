
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Star, Award } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      name: "Mrs. Margaret T. Siaffa",
      title: "Director & Founder",
      qualifications: "BBA Business Administration (University of Liberia), B Certificate & Teachers Training Certificates (Catholic Educational Secretariat)",
      image: "/lovable-uploads/8c13435f-ac7a-4bfc-9ddf-39dd0c8b5de5.png",
      biography: "Mrs Margaret T Siaffa is a Liberian business woman and a teacher following her mother's footsteps in educating and molding the minds of little children. She is a Christian and is married to Mr Hilton Siaffa Sr. Together they have 5 children. She has been passionate about children from her early age when she would gather her neighbors children and baby sit until they come from the market or work. While baby sitting she would tell them stories, read books to them and engage them with rhymes and outdoor activities. She is focused on the care and education of young children from infancy to eight years. Mrs Siaffa comes with several years of experience as a classroom teacher and as an administrator. She worked as a kindergarten and lower elementary teacher at the St. Teresa's Convent school as a Kindergarten teacher for ten years and went on to serve as dean of student's affairs for five additional years before resigning to open her own childcare center. She started the Kiddies World Kinder Care Center in September 2013. She's passionate about people and children and enjoys the role she plays by coordinating schedules, checking lesson plans, supervising teachers and most importantly working with the kids.",
      specialties: ["Early Childhood Education", "Administration", "Curriculum Development", "Teacher Supervision"]
    },
    {
      name: "Mrs. Dour-Sahr",
      title: "Registrar/Administrator",
      qualifications: "Educational Administration & Management",
      image: "/lovable-uploads/1c521b19-bc2c-4d3b-9501-4c6cdf4559df.png",
      biography: "Mrs. Dour-Sahr serves as our dedicated Registrar and Administrator, bringing valuable experience in educational management and student services to Kiddies World.",
      specialties: ["Registration Management", "Administrative Support", "Student Records", "Family Communication"]
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
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {staffMembers.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden">
                  <img 
                    src={staff.image} 
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
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
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Heart className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">About:</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 leading-relaxed">{staff.biography}</p>
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
