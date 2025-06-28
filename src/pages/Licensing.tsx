
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileCheck, Star } from "lucide-react";

const Licensing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Licensing & <span className="text-purple-600">Accreditation</span>
              </h1>
              <p className="text-xl text-gray-600">
                Committed to maintaining the highest standards of care and education
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FileCheck className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">State Licensing</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Kiddies World Kinder Care Center is fully licensed by the Republic of Liberia Ministry of Education 
                  and operates in compliance with all state regulations for childcare facilities.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold">License Information:</p>
                  <ul className="mt-2 space-y-1 text-purple-700">
                    <li>• License Type: Childcare and Early Education Facility</li>
                    <li>• Capacity: Licensed for children ages 6 months to 8 years</li>
                    <li>• Renewal Date: Annual renewal required</li>
                    <li>• License displayed prominently at facility entrance</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Compliance Standards</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We maintain strict compliance with all regulatory requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Health & Safety:</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Regular health inspections</li>
                      <li>• Fire safety compliance</li>
                      <li>• Emergency preparedness plans</li>
                      <li>• Child-proofed environments</li>
                      <li>• First aid certified staff</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Staff Requirements:</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Background checks completed</li>
                      <li>• Early childhood education training</li>
                      <li>• CPR and first aid certification</li>
                      <li>• Ongoing professional development</li>
                      <li>• Proper staff-to-child ratios</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-orange-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Quality Standards</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Beyond basic licensing requirements, we strive for excellence in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Developmentally appropriate curriculum and activities</li>
                  <li>Nutritious meal planning and food safety</li>
                  <li>Family engagement and communication</li>
                  <li>Inclusive practices for children of all abilities</li>
                  <li>Environmental sustainability initiatives</li>
                  <li>Community partnerships and resources</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Regular Inspections</h2>
                <p className="text-gray-600 mb-4">
                  Our facility undergoes regular inspections to ensure continued compliance:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-blue-800">
                    <li>• Annual licensing renewal inspections</li>
                    <li>• Unannounced monitoring visits</li>
                    <li>• Health department inspections</li>
                    <li>• Fire safety inspections</li>
                    <li>• Quality improvement assessments</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Parent Rights</h2>
                <p className="text-gray-600 mb-4">
                  As a licensed facility, parents have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>View our current license and inspection reports</li>
                  <li>Access their child's records and assessments</li>
                  <li>Receive advance notice of policy changes</li>
                  <li>File complaints with licensing authorities</li>
                  <li>Participate in quality improvement processes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Licensing Authority</h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Republic of Liberia Ministry of Education</strong><br />
                    Early Childhood Development Division
                  </p>
                  <p className="text-gray-600 text-sm">
                    For questions about our licensing or to file a complaint, you may contact the licensing authority directly.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
                <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <p className="text-gray-700 italic text-lg">
                    "We are committed to maintaining and exceeding all licensing requirements to provide 
                    the safest, highest quality care and education for the children and families we serve."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Licensing;
