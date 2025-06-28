
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Ready to Join Our Family?</h3>
      <p className="text-xl mb-8 opacity-90">
        Enrollment is open! Secure your child's spot in our nurturing learning environment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
          Download Enrollment Forms
        </Button>
        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
          Schedule a Meeting
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
