// src/components/LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex">
        <div className="w-1/2 p-8">
          {/* Search bar component */}
        </div>
        <div className="w-1/2">
          <img src="/image1.jpg" alt="Image 1" className="w-full mb-4" />
          <img src="/image2.jpg" alt="Image 2" className="w-full mb-4" />
          <img src="/image3.jpg" alt="Image 3" className="w-full" />
        </div>
      </div>
      <div id="solutions" className="p-8">
        {/* Solutions content */}
      </div>
      <div id="features" className="p-8">
        {/* Features content */}
      </div>
      <div id="about" className="p-8">
        {/* About content */}
      </div>
    </div>
  );
};

export default LandingPage;
