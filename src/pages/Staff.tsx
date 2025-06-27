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
    },
    {
      name: "Massa K. Davis",
      title: "Pre-First Teacher",
      qualifications: "Early Childhood Education",
      image: "/lovable-uploads/12214122-ea62-4028-951e-f95e099d9325.png",
      biography: "Massa K. Davis is our dedicated Pre-First Teacher who specializes in preparing children for their transition to first grade. She focuses on building foundational academic skills while maintaining a nurturing and supportive learning environment.",
      specialties: ["Pre-First Grade Preparation", "Foundational Skills", "Reading Readiness", "Academic Transition"]
    },
    {
      name: "Miss Toya",
      title: "Teacher Aide",
      qualifications: "Child Development & Educational Support",
      image: "/lovable-uploads/b11b8fa8-6ad8-4740-be33-57cf5db4f5b1.png",
      biography: "Miss Toya serves as our supportive Teacher Aide, providing essential assistance in classroom management and individual student support. She helps create a positive learning environment for all children.",
      specialties: ["Classroom Support", "Individual Student Assistance", "Learning Activities", "Behavioral Support"]
    },
    {
      name: "Mrs. Lewis",
      title: "Pre-Kindergarten Teacher",
      qualifications: "Pre-K Education & Child Development",
      image: "/lovable-uploads/d5be9a33-bcf4-459c-ad9a-7c9e1f17e47d.png",
      biography: "Mrs. Lewis brings expertise in Pre-Kindergarten education, focusing on school readiness and social-emotional development. She creates engaging activities that prepare children for kindergarten success.",
      specialties: ["Pre-K Curriculum", "School Readiness", "Social Skills Development", "Early Literacy"]
    },
    {
      name: "Miss Kamara",
      title: "Nursery Teacher",
      qualifications: "Infant & Toddler Care Certification",
      image: "/lovable-uploads/3c3dff81-22dd-42ed-9f73-3eaf19ea35a4.png",
      biography: "Miss Kamara specializes in nursery care and education for our youngest learners. She provides loving, attentive care while introducing early learning concepts through play and exploration.",
      specialties: ["Infant Care", "Toddler Development", "Early Learning", "Sensory Play"]
    },
    {
      name: "Mrs. King",
      title: "1st Grade Teacher",
      qualifications: "Elementary Education Certification",
      image: "/lovable-uploads/4d5da343-894e-45a4-80f9-5b5ea013d7a1.png",
      biography: "Mrs. King is our experienced 1st Grade Teacher who focuses on building strong academic foundations in reading, writing, and mathematics. She creates an encouraging environment where young learners can thrive.",
      specialties: ["Elementary Curriculum", "Reading & Writing", "Mathematics", "Student Assessment"]
    },
    {
      name: "Mrs. Dayrell",
      title: "Daycare & Toddler Teacher",
      qualifications: "Toddler Care & Development",
      image: "/lovable-uploads/1649521d-9216-40ea-9fb3-48f80fb8253e.png",
      biography: "Mrs. Dayrell provides specialized care and education for our daycare and toddler programs. She creates safe, nurturing environments where young children can explore and learn through play.",
      specialties: ["Toddler Care", "Developmental Activities", "Safety Management", "Parent Communication"]
    },
    {
      name: "Mrs. Gbaablo",
      title: "2nd Grade Teacher",
      qualifications: "Elementary Education & Curriculum Development",
      image: "/lovable-uploads/a4614148-dc63-444c-b047-032b971016f2.png",
      biography: "Mrs. Gbaablo is our dedicated 2nd Grade Teacher who builds upon foundational skills to develop more advanced academic abilities. She encourages critical thinking and independent learning.",
      specialties: ["Advanced Elementary Skills", "Critical Thinking", "Independent Learning", "Academic Progress"]
    },
    {
      name: "Miss Wreh",
      title: "3rd Grade Teacher",
      qualifications: "Elementary Education & Advanced Curriculum",
      image: "/lovable-uploads/02a965a8-6c13-48db-8596-5f9cd77f4297.png",
      biography: "Miss Wreh is our dedicated 3rd Grade Teacher who focuses on developing advanced academic skills and independent learning abilities. She creates challenging yet supportive learning environments that prepare students for higher grade levels.",
      specialties: ["Advanced Elementary Education", "Critical Reading", "Mathematical Problem Solving", "Independent Study Skills"]
    },
    {
      name: "Miss Thomas",
      title: "Care Giver",
      qualifications: "Child Care & Development Certification",
      image: "/lovable-uploads/f5c381c3-b050-47bc-a0d3-ceca76241623.png",
      biography: "Miss Thomas is a dedicated Care Giver who provides nurturing support and supervision for children throughout their day at Kiddies World. She ensures a safe and caring environment for all children.",
      specialties: ["Child Supervision", "Safety Protocols", "Daily Care Routines", "Emotional Support"]
    },
    {
      name: "Miss Johnson",
      title: "Care Giver",
      qualifications: "Child Care & Safety Certification",
      image: "/lovable-uploads/c8ef4bfe-23c6-4120-af14-2a176a58f351.png",
      biography: "Miss Johnson serves as a caring and attentive Care Giver, supporting children's daily needs and activities. She maintains a warm and secure environment where children feel safe and valued.",
      specialties: ["Child Care", "Activity Supervision", "Health & Safety", "Behavioral Guidance"]
    },
    {
      name: "Mr. Karr",
      title: "Support Staff",
      qualifications: "Educational Support & Maintenance",
      image: "/lovable-uploads/cf648aa6-75ce-4db9-aa70-aa62e61feaa1.png",
      biography: "Mr. Karr is an essential member of our Support Staff team, ensuring that our facilities are maintained and safe for all children and staff. He provides reliable support for various school operations.",
      specialties: ["Facility Maintenance", "Safety Protocols", "Equipment Management", "Operational Support"]
    },
    {
      name: "Miss Borbor",
      title: "Support Staff",
      qualifications: "Administrative & Operational Support",
      image: "/lovable-uploads/9105e1b9-f6fe-4e8b-afd0-a3587c5375a4.png",
      biography: "Miss Borbor provides valuable Support Staff services, assisting with various administrative and operational tasks that keep Kiddies World running smoothly. She ensures efficient daily operations.",
      specialties: ["Administrative Support", "Record Keeping", "Communication Assistance", "Daily Operations"]
    },
    {
      name: "Mr. Sleweon",
      title: "Music Teacher",
      qualifications: "Music Education & Performance",
      image: "/lovable-uploads/2c808e23-a2d0-443e-9667-56757e03728f.png",
      biography: "Mr. Sleweon brings the joy of music to Kiddies World as our dedicated Music Teacher. He introduces children to various musical concepts, instruments, and creative expression through engaging music programs.",
      specialties: ["Music Education", "Instrument Instruction", "Creative Expression", "Performance Skills"]
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
