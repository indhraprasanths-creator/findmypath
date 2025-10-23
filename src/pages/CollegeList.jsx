import React, { useRef } from 'react';
import Collegehero from '../assets/src/assets/Collegelist-hero.png';

const collegeSections = [
  {
    title: 'Top Engineering Colleges in India',
    description: 'Discover premier institutions offering top-notch engineering programs across India.',
    color: 'text-pink-700',
    colleges: [
      {
        name: 'IITs (Indian Institutes of Technology)',
        description: 'Renowned for academic excellence and research, IITs are among the most prestigious engineering institutions in India.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmCM-2o14EpsjmZBRUAa37Ua3Rt7GjpI7eg&s'
      },
      {
        name: 'NITs (National Institutes of Technology)',
        description: 'NITs provide high-quality engineering education, fostering innovation and strong industry connections.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9kA_ORDaQ55uW72dg6bzaQwxT8vgMmOPmw&s'
      },
      {
        name: 'VIT Vellore',
        description: 'VIT is known for its modern infrastructure and wide range of engineering disciplines.',
        image: 'https://vit.ac.in/wp-content/uploads/2024/01/VIT-history-img.webp'
      },
      {
        name: 'SRM Institute of Science and Technology',
        description: 'SRM focuses on research-driven engineering programs with strong industry integration.',
        image: 'https://images.shiksha.com/mediadata/images/articles/1584704603phpyv6Sd7.jpeg'
      }
    ]
  },
  {
    title: 'Top Medical Colleges in India',
    color: 'text-pink-700',
    colleges: [
      {
        name: 'AIIMS (All India Institute of Medical Sciences)',
        description: 'AIIMS is India’s premier medical institute, known for cutting-edge healthcare and education.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL33c3XVHYGWO8rAHSYRJ1O-PU15qBrEmMQ&s'
      },
      {
        name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
        description: 'JIPMER offers comprehensive medical education and hands-on clinical experience.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiFFgC7GzbJ2NHAjqI1LUV37_uNUpgsT5hw&s'
      },
      {
        name: 'Christian Medical College - Vellore',
        description: 'CMC Vellore is globally recognized for quality healthcare education and service.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-_2S8eDjDXmS1uqwpi5H7Mk7AMEPWGPeuA&s'
      },
      {
        name: 'Kasturba Medical College - Manipal',
        description: 'KMC offers a strong foundation in medical education with excellent facilities.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYxY9jBW4jua9ZdhlMsgHNDYQYypozq7qHw&s'
      }
    ]
  },
  {
    title: 'Top Law Colleges in India',
    color: 'text-pink-700',
    colleges: [
      {
        name: 'National Law School of India University - Bangalore',
        description: 'NLSIU is India’s leading law school with a reputation for academic excellence and strong alumni.',
        image: 'https://media.assettype.com/barandbench%2F2020-10%2F5d28d9a1-bb0b-451b-8fee-e83b371720a5%2FNLSIU_Blr.jpg'
      },
      {
        name: 'NLU Delhi (National Law University - Delhi)',
        description: 'NLU Delhi is known for high-quality legal education and impactful research.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNOsyRdUtJTIsqlTlgR3u_Mg7MPMqkDJcyQ&s'
      },
      {
        name: 'Symbiosis Law School - Pune',
        description: 'Symbiosis offers innovative legal education and practical legal training.',
        image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/9127_SLS_New.jpg?h=260&w=360&mode=crop'
      },
      {
        name: 'Faculty of Law - Delhi University',
        description: 'One of India’s oldest law colleges, DU Law is respected for its academic rigour and legacy.',
        image: 'https://crl.du.ac.in/law/images/du_vc.jpg'
      }
    ]
  }
];

function CollegeList() {
  // Create a reference to scroll to the Info Banner section
  const infoRef = useRef(null);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold mb-4">Top Colleges in India</h1>
            <p className="mb-6 text-lg max-w-md">
              Explore the best colleges across India to shape your academic and professional future.
            </p>
            <button
              onClick={() => infoRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-red-600 font-semibold px-6 py-2 rounded hover:bg-red-100 transition"
            >
              Start Exploring Colleges
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={collegehero}
              alt="College Illustration"
              className="w-60 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <div
        ref={infoRef}
        className="bg-blue-100 text-center py-4 px-6 text-sm text-gray-700 font-medium"
      >
        Choosing the right college is a crucial step in shaping your career and future growth.
      </div>

      {/* College Lists */}
      {collegeSections.map((section, index) => (
        <section key={index} className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className={`text-2xl font-bold mb-2 text-center ${section.color}`}>
            {section.title}
          </h2>
          {section.description && (
            <p className="text-center text-sm text-gray-600 mb-8">{section.description}</p>
          )}
          <div className="space-y-6">
            {section.colleges.map((college, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded shadow flex flex-col md:flex-row gap-4 items-start"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{college.name}</h4>
                  <p className="text-sm text-gray-700">{college.description}</p>
                </div>
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full md:w-48 h-32 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default CollegeList;

