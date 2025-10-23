import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '../supabase';

// Assets
import img1 from '../assets/grid 1.png';
import img2 from '../assets/grid 3.png';
import img3 from '../assets/group 4.png';
import img4 from '../assets/group 5.png';
import img5 from '../assets/group 6 (2).png';
import img6 from '../assets/home right .png';
import img7 from '../assets/home footer above.png';
import img8 from '../assets/grid 2.png';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const servicesRef = useRef(null);

  // Check login status
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkSession();
  }, []);

  // Scroll to Services section if triggered
  useEffect(() => {
    if (location.state?.scrollToServices && isLoggedIn) {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state, isLoggedIn]);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="px-6 py-10 mx-auto space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-10">
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-9 m-10">
          <div className="space-y-5 max-w-xl">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Your journey to a great career starts here
            </h1>
            <p className="text-xl text-gray-700">
              Our platform helps school and college students explore the right courses, discover career options, and plan their future with quizzes, resources, and expert guidance.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm hover:bg-purple-700 inline-block mt-4"
            >
              Start your future today
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img src={img6} alt="Hero" className="max-w-xs md:max-w-md" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef}>
        <div className="flex items-center my-10 mx-10">
          <h2 className="text-3xl font-semibold text-white mr-6 border-2 w-32 h-12 flex items-center justify-center rounded-xl border-purple-600 bg-purple-500">
            Services
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg">
            At BuildMyPath, we offer a range of tools and guidance to help students explore courses, discover career options, and plan their future with confidence. Our platform includes:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
          {services.map((service) => (
            <Link
              to={service.link}
              key={service.id}
              className={`rounded-3xl flex flex-col justify-between p-7 border-b-4 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ${service.bg}`}
            >
              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="bg-white text-black font-bold px-5 py-2 rounded-lg inline-block mb-4">
                  {service.description}
                </p>
                <span className="inline-block text-green-600 font-medium hover:text-green-800 transition-colors duration-300">
                  Learn more →
                </span>
              </div>
              <div className="flex justify-end mt-4">
                <img src={service.image} alt={service.title} className="h-24 w-24 object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 rounded-xl flex flex-col lg:flex-row justify-between items-center px-6 py-10">
        <div className="max-w-xl space-y-4">
          <h3 className="text-2xl font-semibold">Let’s make things happen</h3>
          <p className="text-gray-600">
            Contact us today to learn how BuildMyPath can help you choose the right course, explore careers, and plan your future with confidence.
          </p>
          <Link 
            to="/contact" 
            className="bg-black text-white px-8 py-3 rounded-md hover:opacity-90 inline-block"
          >
            Get your free proposal
          </Link>
        </div>
        <img src={img7} alt="Call to action" className="h-60 object-contain mt-8 lg:mt-0" />
      </section>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Career discovery quizzes",
    image: img1,
    description: "Explore your interests and discover paths that fit you best.",
    link: "/career-test",
    bg: "bg-gray-950 text-white",
  },
  {
    id: 2,
    title: "Stream and course selection help",
    image: img8,
    description: "Find the right course and subjects with expert guidance.",
    link: "/stream-selection",
    bg: "bg-purple-500 text-white",
  },
  // {
  //   id: 3,
  //   title: "Personalized career suggestions",
  //   image: img2,
  //   description: "Get tailored career suggestions based on your profile.",
  //   link: "/career-suggestions",
  //   bg: "bg-gray-900 text-white",
  // },
  {
    id: 4,
    title: "Resources and articles",
    image: img3,
    description: "Read up on industry trends, courses, and guides.",
    link: "/resources",
    bg: "bg-white border border-gray-300",
  },
  {
    id: 5,
    title: "College and exam creation",
    image: img4,
    description: "Plan and manage college and exam entries seamlessly.",
    link: "/college-exams",
    bg: "bg-purple-500 text-white",
  },
  // {
  //   id: 6,
  //   title: "Student dashboard & tracking",
  //   image: img5,
  //   description: "Track your goals and manage your progress in one place.",
  //   link: "/usertypeselection",
  //   bg: "bg-gray-900 text-white",
  // },
];

export default Home;
