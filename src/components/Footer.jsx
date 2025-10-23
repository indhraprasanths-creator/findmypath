import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 rounded-md mt-12">
      <p className="text-sm">
        © 2023 - 2025 BuildMyCareer® Global Inc. •{" "}
        <Link to="/privacy-policy" className="underline hover:text-gray-400">
          Privacy Policy
        </Link>{" "}
        •{" "}
        <Link to="/cookie-settings" className="underline hover:text-gray-400">
          Cookie Settings
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
