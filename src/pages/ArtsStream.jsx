import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Importing Navbar component
import Footer from '../components/Footer'; // Importing Footer component
import sideimage from '../assets/hero-image.png'; // Import your side image

function ArtsStream() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-12 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-6xl font-bold leading-tight">ARTS</h1>
          <h2 className="text-4xl font-semibold mt-2">STREAM</h2>
          <p className="mt-6 max-w-lg">
            This stream is for students who are passionate about humanities, social sciences, literature, and fine arts, opening doors to careers in law, journalism, teaching, civil services, and more.
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
        {['HISTORY', 'GEOGRAPHY', 'POLITICAL SCIENCE', 'PSYCHOLOGY', 'SOCIOLOGY', 'PHILOSOPHY', 'FINE ARTS'].map((item) => (
          <div key={item} className="text-white font-semibold text-sm cursor-pointer">
            {item}
          </div>
        ))}
      </div>

      {/* Subjects and Careers */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">SUBJECTS IN ARTS:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>History</li>
            <li>Geography</li>
            <li>Political Science</li>
            <li>Psychology</li>
            <li>Sociology</li>
            <li>Philosophy</li>
            <li>Fine Arts (optional)</li>
            <li>Economics (optional)</li>
            <li>Music (optional)</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">CAREER OPTIONS:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Historian</li>
            <li>Journalist</li>
            <li>Psychologist</li>
            <li>Teacher/Professor</li>
            <li>Civil Servant (IAS, IPS, etc.)</li>
            <li>Lawyer</li>
            <li>Artist</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ArtsStream;
