import React, { useEffect, useState } from "react";
import { FaGoogle, FaApple, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import signupImg from "../assets/Signup.png";
import logo from "../assets/BuildMyPath.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSignup = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert("Error: " + error.message);
    else alert("Check your email for the magic link!");
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173",
        scopes: "email profile",
      },
    });
    if (error) alert("Google Sign-in failed: " + error.message);
  };

  const handleAppleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
      options: {
        redirectTo: "http://localhost:5173",
      },
    });
    if (error) alert("Apple Sign-in failed: " + error.message);
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const user = session.user;

        // Check if profile exists
        const { data: existingProfile, error: fetchError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (!existingProfile && !fetchError) {
          // Create profile with default user_type = null
          await supabase.from("profiles").insert([
            {
              id: user.id,
              email: user.email,
              user_type: null, // Will be selected later
            },
          ]);
        }

        navigate("/usertypeselection");
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b py-5 px-6 shadow-sm">
        <img src={logo} alt="Logo" className="h-7" />
      </nav>

      <main className="flex-grow flex justify-center items-center py-12">
        <div className="bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col md:flex-row w-[92%] max-w-5xl gap-10">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src={signupImg} alt="Signup Visual" className="max-w-xs" />
          </div>

          <div className="md:w-1/2 space-y-5">
            <h2 className="text-2xl font-bold text-purple-700">Sign up</h2>
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                className="pl-10 pr-4 py-2 w-full border rounded-md outline-purple-500"
              />
            </div>
            <button
              onClick={handleEmailSignup}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-2 rounded-md"
            >
              {loading ? "Sending..." : "Continue"}
            </button>
            <div className="flex items-center gap-3">
              <hr className="flex-grow border-t" />
              <span className="text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-t" />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md text-sm"
            >
              <FaGoogle />
              Continue with Google
            </button>
            <button
              onClick={handleAppleLogin}
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-sm"
            >
              <FaApple />
              Continue with Apple
            </button>
            <p className="text-sm text-center pt-2">
              Already have an account?
              <a href="/login" className="text-green-600 font-semibold ml-2">Log In</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
