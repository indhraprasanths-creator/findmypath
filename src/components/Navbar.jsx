import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check auth session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-purple-600">
        BuildMyPath
      </Link>

      {/* Main Navigation */}
      <ul className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className={`hover:text-purple-600 ${location.pathname === "/" && "text-purple-600 font-semibold"}`}>
          Start Here <span>➜</span>
        </Link>
        <Link to="/stream-selection" className="hover:text-purple-600">
          Streams ▾
        </Link>
        <Link to="/carrerPath" className="hover:text-purple-600">
          Career Pathways ▾
        </Link>
        <Link to="/resources" className="hover:text-purple-600">
          Resources ▾
        </Link>
        <Link to="/collegelist" className="hover:text-purple-600">
          Colleges & Exams ▾
        </Link>
        <Link to="/skilldevelopment" className="hover:text-purple-600">
          Growth
        </Link>
        <Link to="/contact" className="hover:text-purple-600">
          Support
        </Link>
      </ul>

      {/* Auth Controls */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium hover:text-purple-600">
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
