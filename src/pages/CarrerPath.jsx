import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import heroside from '../assets/cp hero.png';

function CareerPath() {
  const streamSectionRef = useRef(null);
  const navigate = useNavigate();

  const scrollToStreamSection = () => {
    streamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const streamData = [
    {
      title: "Science",
      items: ["Engineering", "Medical", "Pure Sciences", "IT/Computer", "Pharmacy"]
    },
    {
      title: "Commerce",
      items: ["BCom (General/Accounting/Finance)", "BBA", "CA, CS, CMA", "Hotel Management"]
    },
    {
      title: "Arts",
      items: ["BA (Humanities/Social Sciences)", "Psychology", "Law", "Mass Comm & Journalism"]
    }
  ];

  const entranceExams = [
    { title: "Engineering", exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE"] },
    { title: "Medicine", exams: ["NEET", "AIIMS", "JIPMER"] },
    { title: "Commerce", exams: ["CA Foundation", "CUET", "IPU CET", "BBA Entrance", "DU JAT"] },
    { title: "Law", exams: ["CLAT", "AILET", "LSAT India", "SLAT", "MH CET Law"] },
    { title: "Design", exams: ["NIFT", "NID", "UCEED", "CEED"] },
    { title: "Vocational & Professional", exams: ["Hotel Mgmt", "Event Mgmt", "Travel & Tourism", "Animation & Multimedia"] }
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-4">Ready for Your Future?</h1>
            <p className="text-lg mb-6">After 12th, your real journey begins. Find the best path for your dreams.</p>
            <button
              onClick={scrollToStreamSection}
              className="bg-white text-purple-700 font-semibold px-6 py-2 rounded shadow hover:bg-purple-100 transition"
            >
              Start Exploring Courses
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src={heroside} alt="Career Planning" className="w-full max-w-md rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* Career Info Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Choose the Right Career and College!</h2>
        <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600">
          After you finish 12th grade, you have many good choices in front of you. This is the time to think about what you enjoy doing and what you want to become. The courses and colleges you choose now can help you reach your goals.
        </p>
      </section>

      {/* Quiz Call to Action */}
      <div className="text-center my-8">
        <h3 className="text-xl font-bold text-purple-700 mb-2">Which Career Fits You?</h3>
        <p>Think about what you enjoy, what you're good at, and how you want to work in the future.</p>
        <button className="bg-purple-700 text-white mt-4 px-6 py-2 rounded hover:bg-purple-800 transition">
          Take Stream Quiz
        </button>
      </div>

      {/* Stream Section */}
      <section ref={streamSectionRef} className="py-10 px-4 text-center bg-gray-50">
        <h3 className="text-xl font-semibold text-purple-700 mb-6">After 12th: Choose Your Career and College</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {streamData.map((stream) => (
            <div key={stream.title} className="w-64 bg-white p-4 rounded shadow-md text-left">
              <h4 className="font-bold text-center mb-2">{stream.title}</h4>
              <ul className="list-disc list-inside text-sm">
                {stream.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Entrance Exams Section */}
      <section className="px-6 py-12 bg-white">
        <h3 className="text-2xl font-bold text-center text-purple-800 mb-8">Important Entrance Exams After 12th</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {entranceExams.map((category) => (
            <div key={category.title} className="bg-gray-50 p-5 rounded shadow-md">
              <h4 className="font-semibold mb-2">{category.title}</h4>
              <ul className="list-disc list-inside text-sm">
                {category.exams.map((exam, idx) => (
                  <li key={idx}>{exam}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* College Info CTA */}
      <section className="py-12 text-center bg-gray-50">
        <h3 className="text-xl font-bold text-pink-600 mb-4">Top Colleges in India</h3>
        <p className="mb-4 text-sm max-w-xl mx-auto">
          Visit the official websites of top colleges across India to explore detailed information about courses, admissions, and campus life.
        </p>
        <button
          onClick={() => navigate('/collegelist')}
          className="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800"
        >
          Click here to see a list
        </button>
      </section>

    </div>
  );
}

export default CareerPath;