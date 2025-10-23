import React, { useEffect, useRef } from 'react';
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
    { title: "Science", exams: [
      "Engineering (B.Tech/B.E.)", 
      "Medicine (MBBS, BDS, Nursing)", 
      "B.Sc. (Bachelor of Science)", 
      "BCA (Bachelor of Computer Applications)", 
      "Pharmacy (B.Pharm)", 
      "BAMS (Bachelor of Ayurvedic Medicine and Surgery)", 
      "BDS (Bachelor of Dental Surgery)", 
      "Biotechnology", 
      "Forensic Science", 
      "Environmental Science", 
      "Agriculture"
    ] },
    { title: "Commerce", exams: [
      "B.Com (Bachelor of Commerce)", 
      "BBA (Bachelor of Business Administration)", 
      "BMS (Bachelor of Management Studies)", 
      "BCA (Bachelor of Computer Applications)", 
      "CA (Chartered Accountancy)", 
      "CMA (Cost Management Accountancy)", 
      "CS (Company Secretary)", 
      "Hotel Management", 
      "Tourism & Travel Management", 
      "Fashion Designing", 
      "Event Management", 
      "Advertising & Marketing"
    ] },
    { title: "Arts", exams: [
      "BA (Bachelor of Arts)", 
      "BFA (Bachelor of Fine Arts)", 
      "B.Des (Bachelor of Design)", 
      "Journalism & Mass Communication", 
      "Psychology", 
      "Political Science", 
      "History", 
      "Philosophy", 
      "Sociology", 
      "Law (5-year integrated course)", 
      "Social Work", 
      "Tourism & Travel Management", 
      "Animation & Multimedia", 
      "Film Making"
    ] }
  ];
  
  // Scroll to the top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

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
        <h1 className="text-5xl font-semibold mb-4">Why Choosing the Right Career Matters!</h1>
        <h2 className="text-3xl font-semibold mb-4">Choose the Right Career and College!</h2>
        <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600">
        After you finish 12th grade, you have many good choices in front of you. This is the time to think about what you enjoy doing and what you want to become. The course and college you choose now can help you reach your goals. It’s normal to feel a little confused, but don’t worry. We are here to guide you. You will find career options, courses, exams, and colleges all in one place. Take your time, explore everything, and choose the path that feels right for you. Your future starts today!
        </p>
      </section>

      {/* Quiz Call to Action */}
      <div className="text-center my-8">
        <h3 className="text-xl font-bold text-purple-700 mb-2">Which Career Fits You?</h3>
        <p>Think about what you enjoy, what you’re good at, and how you want to work in the future.</p>
        <button
          onClick={() => navigate('/career-quizzes')}
          className="bg-purple-700 text-white mt-4 px-6 py-2 rounded hover:bg-purple-800 transition"
        >
          Take Stream Quiz
        </button>
      </div>

      {/* Stream Section */}
      {/* <section ref={streamSectionRef} className="py-10 px-4 text-center bg-gray-50">
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
      </section> */}

      {/* Stream Options */}
      <section className="grid md:grid-cols-3 gap-6 mt-20">
        <div
          className="p-8 bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Science</h2>
          <p className="text-gray-600 mb-4">Explore a future in medicine, engineering, and tech.</p>
          <span className="text-2xl">→</span>
        </div>

        <div
          className="p-8 bg-purple-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Commerce</h2>
          <p className="mb-4">Learn about business, money management, and accounting.</p>
          <span className="text-2xl">→</span>
        </div>

        <div
          className="p-8 bg-black text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Arts & Humanities</h2>
          <p className="mb-4">Explore careers in law, design, and social sciences.</p>
          <span className="text-2xl">→</span>
        </div>
      </section>




      {/* Entrance Exams Section */}
      <section className="px-6 py-12 bg-white">
        <h3 className="text-2xl font-bold text-center text-purple-800 mb-8">After 12th: Choose Your Career and College</h3>
        <p className="max-w-2xl mx-auto mb-6 text-sm text-gray-600">
        After finishing 12th grade, it’s time to decide your next big step. You have many exciting options in Science, Commerce, and Arts. Choosing the right course, exam, and college will shape your future. Here’s a simple guide to help you.
        </p>
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
      {/* exams section  */}
      <section className="max-w-3xl mx-auto p-4">
      <h2 className="text-center text-xl font-bold text-purple-700 mb-6">
        Important Entrance <br />
        <span className="text-pink-600">Exams After 12th</span>
      </h2>

      <div className="space-y-6">
        {/* Engineering */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Engineering</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>JEE Main</li>
            <li>JEE Advanced</li>
            <li>BITSAT (Birla Institute of Technology and Science Admission Test)</li>
            <li>VITEEE (VIT Engineering Entrance Examination)</li>
            <li>KIITEE (Kalinga Institute of Industrial Technology Entrance Exam)</li>
            <li>SRMJEEE (SRM Joint Engineering Entrance Exam)</li>
          </ol>
        </div>

        {/* Medicine */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Medicine</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>NEET (National Eligibility cum Entrance Test)</li>
            <li>AIIMS MBBS Entrance Exam (All India Institute of Medical Sciences)</li>
            <li>JIPMER MBBS</li>
            <li>Jawaharlal Institute of Postgraduate Medical Education and Research</li>
          </ol>
        </div>

        {/* Commerce */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Commerce</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>CA Foundation (Chartered Accountancy Foundation)</li>
            <li>CUET (Common University Entrance Test)</li>
            <li>IPU CET (Indraprastha University Common Entrance Test)</li>
            <li>BBA Entrance Exams (for various universities)</li>
            <li>DU JAT (Delhi University Joint Admission Test for BBA/BMS)</li>
          </ol>
        </div>

        {/* Law */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Law</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>CLAT (Common Law Admission Test)</li>
            <li>AILET (All India Law Entrance Test)</li>
            <li>LSAT India (Law School Admission Test)</li>
            <li>SLAT (Symbiosis Law Admission Test)</li>
            <li>MH CET Law (Maharashtra Common Entrance Test for Law)</li>
          </ol>
        </div>

        {/* Design */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Design</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>NIFT (National Institute of Fashion Technology Entrance Exam)</li>
            <li>NID (National Institute of Design Entrance Exam)</li>
            <li>UCEED (Undergraduate Common Entrance Exam for Design)</li>
            <li>CEED (Common Entrance Exam for Design)</li>
          </ol>
        </div>

        {/* Other Vocational & Professional */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-lg text-gray-800">Other Vocational & Professional Exams</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>Hotel Management Entrance Exams (for institutes like IHMs)</li>
            <li>Event Management Entrance Exams (for institutes like EMDI)</li>
            <li>Travel & Tourism Management Exams</li>
            <li>Animation & Multimedia Exams (for institutes like MAAC)</li>
          </ol>
        </div>
      </div>
    </section>


      {/* College Info CTA */}
      <section className="py-12 text-center bg-gray-50">
        <h3 className="text-xl font-bold text-pink-600 mb-4">Top Colleges in India</h3>
        <p className="mb-4 text-sm max-w-xl mx-auto">
        Visit the official websites of top colleges across India to explore detailed information about courses, admissions, and campus life. Stay updated with the latest trends and opportunities!
        </p>
        <button
          onClick={() => navigate('/collegelist')}
          className="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800"
        >
          Click here to see a list of top colleges in India
        </button>
      </section>

    </div>
  );
}

export default CareerPath;

