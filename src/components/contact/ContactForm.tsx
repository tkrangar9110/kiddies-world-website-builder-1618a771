
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800 text-center">Send Us a Message</CardTitle>
        <p className="text-gray-600 text-center">
          Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form action="https://formsubmit.co/kiddiesworldkcc13@gmail.com" method="POST" className="space-y-6">
          {/* Hidden fields for better user experience */}
          <input type="hidden" name="_subject" value="New Inquiry from Kiddies World Website" />
          <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="Enter your first name" 
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Enter your last name" 
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="Enter your email" 
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                name="phone"
                placeholder="Enter your phone number" 
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="childAge">Child's Age/Program Interest</Label>
            <Input 
              id="childAge" 
              name="childAge"
              placeholder="e.g., 3 years old - Nursery program" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us about your needs, questions, or schedule preferences..."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
