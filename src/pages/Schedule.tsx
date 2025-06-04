
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Calendar, Sun, Moon, BookOpen } from "lucide-react";

const Schedule = () => {
  const dailySchedule = [
    { time: "8:00 - 8:30", activity: "DEVOTION", icon: Sun },
    { time: "8:30 - 9:00", activity: "Circle Time", icon: Calendar },
    { time: "9:00 - 11:00", activity: "Learning Time/Game", icon: Clock },
    { time: "11:00 - 11:45", activity: "Launch/Recess", icon: Sun },
    { time: "12:00 - 12:15", activity: "Story Time/Rhymes", icon: Calendar },
    { time: "12:05 - 1:00", activity: "Music (Pre K-3rd Grade) Mon., Wed & Friday", icon: Clock },
    { time: "12:05 - 1:00", activity: "Computer (Pre K 3rd Grade) Tues & Thursday", icon: Clock },
    { time: "1:00 - 1:20", activity: "Naptime (Daycare - Pre-K)", icon: Moon },
    { time: "1:20 - 2:00", activity: "Reading Readiness", icon: Calendar },
    { time: "2:00 - 2:30", activity: "Snacks", icon: Clock },
    { time: "2:30 - 2:50", activity: "Free Play", icon: Sun },
    { time: "3:00 - 4:00", activity: "Study Class", icon: Calendar }
  ];

  const academicSchedule = [
    { period: "Registration begins", dates: "July 11, 2024 - August 30, 2024" },
    { period: "1st Term", dates: "September 2, 2024 to November 28 2024" },
    { period: "2nd Term", dates: "December 2, 2024 to February 28, 2025" },
    { period: "4th Term", dates: "June 2, 2025 to July, 2025" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Daily <span className="text-orange-600">Schedule</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Structured learning and play times designed for optimal development
            </p>
          </div>

          {/* Academic Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Academic Schedule
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid gap-4">
                {academicSchedule.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-blue-500 rounded-full p-2 mr-4">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-semibold text-blue-600 text-lg mr-4 mb-1 sm:mb-0">
                          {item.period}
                        </span>
                        <span className="text-gray-700 text-lg">{item.dates}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-semibold text-center">
                  Note: Every Friday school lets out at 2:30pm
                </p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Monday - Friday</h4>
                <p className="text-lg">8:00 AM - 4:00 PM</p>
                <p className="text-sm opacity-90 mt-2">Friday: 8:00 AM - 2:30 PM</p>
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
