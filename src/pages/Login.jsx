import React, { useState, useEffect } from "react";
import { FaGoogle, FaApple, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase"; // Make sure this is correctly set up
import logo from "../assets/BuildMyPath.svg";
import runnerImg from "../assets/illustration.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Email Login with Magic Link
  const handleEmailLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Magic link sent! Check your email.");
    }
    setLoading(false);
  };

  // Google Auth
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert("Google Sign-in failed: " + error.message);
  };

  // Apple Auth
  const handleAppleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
    });
    if (error) alert("Apple Sign-in failed: " + error.message);
  };

  // On successful login, redirect
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/usertypeselection"); // Redirect to user type selection
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white border-b shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>
      </nav>

      <main className="flex-grow py-10 flex justify-center items-center">
        <div className="shadow-md p-8 rounded-2xl flex flex-col md:flex-row w-[90%] max-w-5xl">
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <img src={runnerImg} alt="Visual" className="max-w-sm" />
            <p className="text-sm text-purple-500 mt-4 font-semibold">
              RUN AS IF IT WAS YOUR LAST.
            </p>
          </div>
          <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-purple-700">
              Log in to BuildMyPath
            </h2>
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md outline-purple-500"
              />
            </div>
            <button
              onClick={handleEmailLogin}
              className="w-full bg-purple-600 text-white py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Continue"}
            </button>

            <div className="flex items-center my-2">
              <hr className="flex-grow" />
              <span className="mx-2 text-gray-400">or</span>
              <hr className="flex-grow" />
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md"
            >
              <FaGoogle />
              Continue with Google
            </button>

            <button
              onClick={handleAppleLogin}
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-md"
            >
              <FaApple />
              Continue with Apple
            </button>

            <p className="text-sm text-center pt-4">
              Don't have an account?
              <a href="/signup" className="text-purple-600 font-semibold ml-2">Sign Up</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;