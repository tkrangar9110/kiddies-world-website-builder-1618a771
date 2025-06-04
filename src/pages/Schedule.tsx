
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Calendar, Sun, Moon } from "lucide-react";

const Schedule = () => {
  const dailySchedule = [
    { time: "6:00 AM", activity: "Early Morning Arrival & Free Play", icon: Sun },
    { time: "7:00 AM", activity: "Breakfast Time", icon: Clock },
    { time: "8:00 AM", activity: "Circle Time & Morning Activities", icon: Calendar },
    { time: "9:30 AM", activity: "Learning Centers & Educational Play", icon: Clock },
    { time: "10:30 AM", activity: "Outdoor Play & Physical Activities", icon: Sun },
    { time: "11:30 AM", activity: "Lunch Preparation & Lunch", icon: Clock },
    { time: "12:30 PM", activity: "Quiet Time & Nap/Rest Period", icon: Moon },
    { time: "2:30 PM", activity: "Afternoon Snack", icon: Clock },
    { time: "3:00 PM", activity: "Arts & Crafts / STEM Activities", icon: Calendar },
    { time: "4:00 PM", activity: "Free Play & Homework Help (School-age)", icon: Clock },
    { time: "5:00 PM", activity: "Outdoor Play & Pick-up Time", icon: Sun },
    { time: "6:30 PM", activity: "Final Pick-up & Evening Care", icon: Moon }
  ];

  const academicSchedule = [
    {
      day: "Monday",
      focus: "Language & Literacy",
      activities: ["Phonics practice", "Story time", "Letter recognition", "Writing activities"]
    },
    {
      day: "Tuesday", 
      focus: "Mathematics & Numbers",
      activities: ["Number games", "Counting exercises", "Shape recognition", "Basic math concepts"]
    },
    {
      day: "Wednesday",
      focus: "Science & Discovery",
      activities: ["Nature exploration", "Simple experiments", "Science observations", "STEM activities"]
    },
    {
      day: "Thursday",
      focus: "Creative Arts & Music",
      activities: ["Art projects", "Music and movement", "Creative expression", "Cultural activities"]
    },
    {
      day: "Friday",
      focus: "Social Studies & Life Skills",
      activities: ["Community helpers", "Life skills practice", "Social interaction games", "Show and tell"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Daily & Academic <span className="text-orange-600">Schedule</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Structured learning and play times designed for optimal development
            </p>
          </div>

          {/* Daily Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Daily Schedule
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid gap-4">
                {dailySchedule.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="bg-orange-500 rounded-full p-2 mr-4">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-semibold text-orange-600 text-lg mr-4 mb-1 sm:mb-0">
                            {item.time}
                          </span>
                          <span className="text-gray-700 text-lg">{item.activity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Academic Schedule */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Weekly Academic Focus
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicSchedule.map((day, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 rounded-full p-2 mr-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{day.day}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {day.focus}
                  </h4>
                  
                  <ul className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Monday - Friday</h4>
                <p className="text-lg">6:00 AM - 6:30 PM</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Weekend Care</h4>
                <p className="text-lg">Available upon request</p>
              </div>
            </div>
            <p className="mt-6 text-sm opacity-90">
              Extended hours available for families with special needs
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
