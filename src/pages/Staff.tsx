import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageModal from "@/components/ImageModal";
import { GraduationCap, Heart, Star, Award } from "lucide-react";

const Staff = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const staffMembers = [
    {
      name: "Mrs. Margaret T. Siaffa",
      title: "Director & Founder",
      qualifications: "BBA Business Administration (University of Liberia), B Certificate & Teachers Training Certificates (Catholic Educational Secretariat)",
      image: "/lovable-uploads/c759b9ef-2e94-465d-b3f4-061d2a3419a1.png",
      biography: "Mrs Margaret T Siaffa is a Liberian business woman and a teacher following her mother's footsteps in educating and molding the minds of little children. She is a Christian and is married to Mr Hilton Siaffa Sr. Together they have 5 children. She has been passionate about children from her early age when she would gather her neighbors children and baby sit until they come from the market or work. While baby sitting she would tell them stories, read books to them and engage them with rhymes and outdoor activities. She is focused on the care and education of young children from infancy to eight years. Mrs Siaffa comes with several years of experience as a classroom teacher and as an administrator. She worked as a kindergarten and lower elementary teacher at the St. Teresa's Convent school as a Kindergarten teacher for ten years and went on to serve as dean of student's affairs for five additional years before resigning to open her own childcare center. She started the Kiddies World Kinder Care Center in September 2013. She's passionate about people and children and enjoys the role she plays by coordinating schedules, checking lesson plans, supervising teachers and most importantly working with the kids.",
      specialties: ["Early Childhood Education", "Administration", "Curriculum Development", "Teacher Supervision"]
    },
    {
      name: "Mrs. Dour-Sahr",
      title: "Registrar/Administrator",
      qualifications: "Bachelor of Business Administration (B.B.A.) in Accounting (2017) - United Methodist University, Liberia; Diploma (2013) - Royal Institute for Secretarial Science, Liberia; Diploma & WAEC Certificate (2011) - Cathedral Catholic High School, Liberia",
      image: "/lovable-uploads/1c521b19-bc2c-4d3b-9501-4c6cdf4559df.png",
      biography: "Mrs. Dour-Sahr serves as our dedicated Registrar and Administrator, bringing valuable experience in educational management and student services to Kiddies World.",
      specialties: ["Registration Management", "Administrative Support", "Student Records", "Family Communication"]
    },
    {
      name: "Massa K. Davis",
      title: "Pre-First Teacher",
      qualifications: "Early Childhood Education",
      image: "/lovable-uploads/9c864855-9bdb-47e2-b198-4b1eb4b25240.png",
      biography: "Massa K. Davis is our dedicated Pre-First Teacher who specializes in preparing children for their transition to first grade. She focuses on building foundational academic skills while maintaining a nurturing and supportive learning environment.",
      specialties: ["Pre-First Grade Preparation", "Foundational Skills", "Reading Readiness", "Academic Transition"]
    },
    {
      name: "Miss Toya",
      title: "Teacher Aide",
      qualifications: "Child Development & Educational Support",
      image: "/lovable-uploads/5daf11bb-3885-4c62-b54d-2cc8ca79d317.png",
      biography: "Miss Toya serves as our supportive Teacher Aide, providing essential assistance in classroom management and individual student support. She helps create a positive learning environment for all children.",
      specialties: ["Classroom Support", "Individual Student Assistance", "Learning Activities", "Behavioral Support"]
    },
    {
      name: "Mrs. Lewis",
      title: "Pre-Kindergarten Teacher",
      qualifications: "Pre-K Education & Child Development",
      image: "/lovable-uploads/5b739453-552a-44d3-ac6a-5a308ee29244.png",
      biography: "Mrs. Lewis brings expertise in Pre-Kindergarten education, focusing on school readiness and social-emotional development. She creates engaging activities that prepare children for kindergarten success.",
      specialties: ["Pre-K Curriculum", "School Readiness", "Social Skills Development", "Early Literacy"]
    },
    {
      name: "Miss Kamara",
      title: "Nursery Teacher",
      qualifications: "Infant & Toddler Care Certification",
      image: "/lovable-uploads/a140fb1e-57c1-4d68-9152-74f4de8b4c72.png",
      biography: "Miss Kamara specializes in nursery care and education for our youngest learners. She provides loving, attentive care while introducing early learning concepts through play and exploration.",
      specialties: ["Infant Care", "Toddler Development", "Early Learning", "Sensory Play"]
    },
    {
      name: "Mrs. King",
      title: "1st Grade Teacher",
      qualifications: "Elementary Education Certification",
      image: "/lovable-uploads/4128eb87-7103-4f48-a9b3-9b4adcbe76ff.png",
      biography: "Mrs. King is our experienced 1st Grade Teacher who focuses on building strong academic foundations in reading, writing, and mathematics. She creates an encouraging environment where young learners can thrive.",
      specialties: ["Elementary Curriculum", "Reading & Writing", "Mathematics", "Student Assessment"]
    },
    {
      name: "Mrs. Dayrell",
      title: "Daycare & Toddler Teacher",
      qualifications: "Toddler Care & Development",
      image: "/lovable-uploads/c93462bd-5854-4939-b781-79681c9c685b.png",
      biography: "Mrs. Dayrell provides specialized care and education for our daycare and toddler programs. She creates safe, nurturing environments where young children can explore and learn through play.",
      specialties: ["Toddler Care", "Developmental Activities", "Safety Management", "Parent Communication"]
    },
    {
      name: "Mrs. Gbaablo",
      title: "2nd Grade Teacher",
      qualifications: "Elementary Education & Curriculum Development",
      image: "/lovable-uploads/7ac34e9a-8125-4130-a4c7-73d390ce8588.png",
      biography: "Mrs. Gbaablo is our dedicated 2nd Grade Teacher who builds upon foundational skills to develop more advanced academic abilities. She encourages critical thinking and independent learning.",
      specialties: ["Advanced Elementary Skills", "Critical Thinking", "Independent Learning", "Academic Progress"]
    },
    {
      name: "Miss Wreh",
      title: "3rd Grade Teacher",
      qualifications: "Elementary Education & Advanced Curriculum",
      image: "/lovable-uploads/496b18c4-636f-4e4c-a297-d0bcf7f173ac.png",
      biography: "Miss Wreh is our dedicated 3rd Grade Teacher who focuses on developing advanced academic skills and independent learning abilities. She creates challenging yet supportive learning environments that prepare students for higher grade levels.",
      specialties: ["Advanced Elementary Education", "Critical Reading", "Mathematical Problem Solving", "Independent Study Skills"]
    },
    {
      name: "Miss Thomas",
      title: "Care Giver",
      qualifications: "Child Care & Development Certification",
      image: "/lovable-uploads/847ec20a-f3c9-4af1-b47d-8566fbe53a58.png",
      biography: "Miss Thomas is a dedicated Care Giver who provides nurturing support and supervision for children throughout their day at Kiddies World. She ensures a safe and caring environment for all children.",
      specialties: ["Child Supervision", "Safety Protocols", "Daily Care Routines", "Emotional Support"]
    },
    {
      name: "Miss Johnson",
      title: "Care Giver",
      qualifications: "Child Care & Safety Certification",
      image: "/lovable-uploads/b6f0e66a-fc73-4989-96d2-14040e13964c.png",
      biography: "Miss Johnson serves as a caring and attentive Care Giver, supporting children's daily needs and activities. She maintains a warm and secure environment where children feel safe and valued.",
      specialties: ["Child Care", "Activity Supervision", "Health & Safety", "Behavioral Guidance"]
    },
    {
      name: "Mr. Karr",
      title: "Support Staff",
      qualifications: "Educational Support & Maintenance",
      image: "/lovable-uploads/672ae71d-467b-4b64-b17c-79778d894513.png",
      biography: "Mr. Karr is an essential member of our Support Staff team, ensuring that our facilities are maintained and safe for all children and staff. He provides reliable support for various school operations.",
      specialties: ["Facility Maintenance", "Safety Protocols", "Equipment Management", "Operational Support"]
    },
    {
      name: "Miss Borbor",
      title: "Support Staff",
      qualifications: "Administrative & Operational Support",
      image: "/lovable-uploads/f31c4ed5-8ef1-4828-8577-cb7f6f4cc5b3.png",
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
    },
    {
      name: "Miss Bleh",
      title: "Computer Teacher",
      qualifications: "Computer Science & Educational Technology",
      image: "/lovable-uploads/044aea3a-c290-4ae7-8112-295ee90561f6.png",
      biography: "Miss Bleh is our dedicated Computer Teacher who introduces children to the world of technology and digital literacy. She creates age-appropriate computer lessons that help students develop essential 21st-century skills.",
      specialties: ["Computer Literacy", "Educational Technology", "Digital Skills", "STEM Education"]
    }
  ];

  const handleImageClick = (imageSrc: string, staffName: string) => {
    setSelectedImage({
      src: imageSrc,
      alt: staffName,
      caption: staffName
    });
  };

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
                <div 
                  className="h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(staff.image, staff.name)}
                >
                  <img 
                    src={staff.image} 
                    alt={staff.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
        caption={selectedImage?.caption}
      />

      <Footer />
    </div>
  );
};

export default Staff;
