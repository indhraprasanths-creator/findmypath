import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CareerTestIntro() {
  const quizInfoRef = useRef(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleScrollToQuizInfo = () => {
    if (quizInfoRef.current) {
      quizInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-4xl font-bold">
          Discover the <span className="text-purple-600">Career</span>{" "}
          <span className="text-red-500">Meant for You!</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Take a simple quiz and find out where your passion and skills can take you.
        </p>
        <button
          onClick={handleScrollToQuizInfo}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium"
        >
          Discover your strongest skills
        </button>
      </section>

      {/* Quiz Info */}
      <section ref={quizInfoRef} className="text-center py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-pink-700 mb-12">What's Inside This Quiz?</h3>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 max-w-6xl mx-auto">
          <div className="bg-gray-200 p-6 rounded-lg text-left flex-1">
            <h4 className="text-lg font-semibold mb-2">Find Your Strengths</h4>
            <p className="text-sm text-gray-800">
              Everyone is good at something — you just have to find it...
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-left flex-1">
            <h4 className="text-lg font-semibold mb-2">Choose the Right Path</h4>
            <p className="text-sm text-gray-800">
              Based on what you like and what you’re good at, we’ll suggest careers...
            </p>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg text-left flex-1">
            <h4 className="text-lg font-semibold mb-2">See Your Career Matches</h4>
            <p className="text-sm">
              After you finish the quiz, you’ll see a list of careers that fit you best...
            </p>
          </div>
        </div>

        <Link to="/career-quizzes">
          <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold inline-flex items-center">
            Take a fun quiz to find your path! →
          </button>
        </Link>
      </section>
    </div>
  );
}
