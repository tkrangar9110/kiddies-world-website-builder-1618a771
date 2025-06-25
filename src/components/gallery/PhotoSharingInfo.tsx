
import React from 'react';

const PhotoSharingInfo = () => {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Sharing Your Child's Moments</h3>
      <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
        We love capturing and sharing the special moments of your child's journey with us. 
        Photos are shared through our secure parent portal, and we always respect your 
        privacy preferences. If you have questions about photo sharing policies, 
        please don't hesitate to ask our staff.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Parent Portal Login
        </button>
        <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-colors">
          Photo Policy Info
        </button>
      </div>
    </div>
  );
};

export default PhotoSharingInfo;
