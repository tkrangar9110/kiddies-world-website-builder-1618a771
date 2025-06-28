
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Privacy <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  At Kiddies World Kinder Care Center, we collect information that is necessary to provide quality care and education for your child:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Child's personal information (name, age, medical information, emergency contacts)</li>
                  <li>Parent/guardian contact information and employment details</li>
                  <li>Educational records and developmental assessments</li>
                  <li>Photos and videos for educational documentation and school activities</li>
                  <li>Communication records between staff and families</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
                </div>
                <p className="text-gray-600 mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Provide safe, quality childcare and educational services</li>
                  <li>Communicate with parents about their child's progress and activities</li>
                  <li>Maintain health and safety records as required by law</li>
                  <li>Process enrollment and billing</li>
                  <li>Comply with state licensing requirements</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-orange-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">Information Sharing</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or share your personal information with third parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>When required by law or regulatory authorities</li>
                  <li>In case of medical emergencies</li>
                  <li>With contracted service providers who assist in our operations (background check companies, etc.)</li>
                  <li>With your explicit written consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. Physical files are kept in locked cabinets, and digital records are 
                  password-protected with limited access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access your child's records</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Withdraw consent for non-essential uses of information</li>
                  <li>Request information about how your data is used</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
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

export default PrivacyPolicy;
