
import React from 'react';
import { Award, Briefcase, Heart } from "lucide-react";

const EventHighlights = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Recent Event Highlights
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-yellow-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Achievement Awards</h3>
          <p className="text-sm text-gray-600">
            Celebrating our students' outstanding accomplishments and academic excellence
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Exploration</h3>
          <p className="text-sm text-gray-600">
            Students explored various professions and shared their future aspirations
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-pink-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Events</h3>
          <p className="text-sm text-gray-600">
            Bringing families together through engaging activities and celebrations
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventHighlights;
