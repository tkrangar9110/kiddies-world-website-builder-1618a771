
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Users, Clock, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Terms of <span className="text-green-600">Service</span>
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Enrollment Agreement</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  By enrolling your child at Kiddies World Kinder Care Center, you agree to these terms and conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Complete and accurate enrollment forms must be submitted before care begins</li>
                  <li>All required health and immunization records must be current</li>
                  <li>Parents must provide emergency contact information and keep it updated</li>
                  <li>A non-refundable enrollment fee is required to secure your child's spot</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Hours and Attendance</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Operating hours: Monday - Friday, 8:00 AM - 4:00 PM</li>
                  <li>Children must be picked up by closing time</li>
                  <li>Late pickup fees apply after closing time</li>
                  <li>Please notify us of any anticipated absences</li>
                  <li>Sick children should not attend to prevent spread of illness</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Tuition is due in advance on the first of each month</li>
                  <li>Late fees apply to payments made after the 10th of the month</li>
                  <li>Returned check fees apply to insufficient fund payments</li>
                  <li>No refunds for absences, holidays, or temporary closures</li>
                  <li>Two weeks written notice required for withdrawal</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Health and Safety</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Children with fever, vomiting, or contagious conditions cannot attend</li>
                  <li>All medications must be in original containers with proper authorization</li>
                  <li>We follow state health department guidelines for illness policies</li>
                  <li>Emergency procedures are in place for medical situations</li>
                  <li>Regular safety drills are conducted as required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Behavior Policy</h2>
                <p className="text-gray-600 mb-4">
                  We maintain a positive, nurturing environment for all children. Our behavior guidance approach includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Positive reinforcement and redirection techniques</li>
                  <li>Clear, consistent expectations appropriate for each age group</li>
                  <li>Communication with parents about behavioral concerns</li>
                  <li>Development of individual behavior plans when needed</li>
                  <li>Right to dismiss children whose needs cannot be safely met</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Liability and Authorization</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Parents authorize emergency medical treatment when they cannot be reached</li>
                  <li>The center is not responsible for lost or damaged personal items</li>
                  <li>Parents grant permission for children to participate in routine activities</li>
                  <li>Photo and video consent for educational documentation and promotional use</li>
                  <li>Transportation authorization for field trips and emergencies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate this agreement with two weeks written notice. 
                  Immediate termination may occur for non-payment, violation of policies, 
                  or when the center cannot safely meet a child's needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Kiddies World Kinder Care Center</strong><br />
                    Red Hill Field, Virginia, Montserrado County, Monrovia, Liberia<br />
                    Phone: 0886510567 / 0776445800<br />
                    Email: kiddiesworldkcc13@gmail.com
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

export default TermsOfService;
