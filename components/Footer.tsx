import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} FormCraft. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/PurvikaJagtap7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/purvika-jagtap/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
