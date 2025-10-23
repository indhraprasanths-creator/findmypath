import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import studyingImage from "../assets/Clip path group.png";

const StreamSelection = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleStartQuiz = () => {
    navigate("/streamTest");
  };

  return (
    <main className="px-6 md:px-20 py-10">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the Right Stream for You</h1>
        <p className="text-xl font-semibold mb-6">Dream. Decide. Do.</p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Designed to help students choose the right stream after 10th, based on their interests and future goals.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="border rounded-full p-4 w-64 bg-white hover:bg-gray-100 font-semibold"
          >
            Take Stream Quiz →
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <img src={heroImage} alt="Students climbing" className="max-w-md max-w-full" />
        </div>
      </section>

      {/* Stream Options */}
      <section className="grid md:grid-cols-3 gap-6 mt-20">
        <div
          onClick={() => navigate('/science-stream')}
          className="p-8 bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Science</h2>
          <p className="text-gray-600 mb-4">Explore a future in medicine, engineering, and tech.</p>
          <span className="text-2xl">→</span>
        </div>

        <div
          onClick={() => navigate('/commerce-stream')}
          className="p-8 bg-purple-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Commerce</h2>
          <p className="mb-4">Learn about business, money management, and accounting.</p>
          <span className="text-2xl">→</span>
        </div>

        <div
          onClick={() => navigate('/arts-stream')}
          className="p-8 bg-black text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="font-bold text-lg mb-2">Arts & Humanities</h2>
          <p className="mb-4">Explore careers in law, design, and social sciences.</p>
          <span className="text-2xl">→</span>
        </div>
      </section>

      {/* Final Section */}
      <section className="flex flex-col md:flex-row items-center mt-20 gap-10">
        <img src={studyingImage} alt="Studying" className="w-72 max-w-full" />
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-gray-700">
            You've learned about Science, Commerce, and Arts. Now it's time to see which one suits you best.
            Everyone is good at different things, and the right stream can help you do well in the future.
            Take our short quiz to find the stream that fits you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default StreamSelection;
