import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import sideimage from '../assets/hero-image.png';

function ScienceStream() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-12 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-6xl font-bold leading-tight">SCIENCE</h1>
          <h2 className="text-4xl font-semibold mt-2">STREAM</h2>
          <p className="mt-6 max-w-lg">
            This stream is for students who are interested in pursuing careers in fields like medicine,
            engineering, technology, research, and more.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 mt-6 rounded-full flex items-center gap-2">
            go <span>➡️</span>
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src={sideimage}
            alt="Student"
            className="w-72"
          />
        </div>
      </section>

      {/* Stream Categories */}
      <div className="bg-blue-300 flex flex-wrap justify-center p-4 gap-4">
        {['ENGINEERING', 'MEDICINE', 'DATA SCIENCE', 'BIOTECHNOLOGY', 'AGRICULTURE'].map((item) => (
          <div key={item} className="text-white font-semibold text-sm cursor-pointer">
            {item}
          </div>
        ))}
      </div>

      {/* Subjects and Careers */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">SUBJECTS IN SCIENCE:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
            <li>Biology (for students interested)</li>
            <li>Computer Science (Optional)</li>
            <li>English</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">CAREER OPTIONS:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Doctor (MBBS, BDS, Nursing)</li>
            <li>Engineer (Mechanical, Civil, Electrical, Computer, etc.)</li>
            <li>Scientist/Researcher</li>
            <li>Software Developer</li>
            <li>Architect</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default ScienceStream;
