import React from "react";
import MailIcon from "../assets/mail_icon.png";
import GithubIcon from "../assets/github_icon.png";
import LinkedInIcon from "../assets/linkedin_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t pt-4 border-gray-600 space-y-4 md:space-y-0">

          {/* Left Section: Name */}
          <div className="flex items-center space-x-2">
            <span className="h-10 w-10 rounded-full bg-teal-400 inline-block"></span>
            <span className="text-lg font-bold">Julien</span>
          </div>

          {/* Center Section: Copyright */}
          <div className="text-center text-sm pt-1 text-gray-400">
            © 2025 Julien. All rights reserved.
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex space-x-4">
            {/* Mail Icon */}
            <a
              href="mailto:jmotaharian1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MailIcon}
                alt="Mail"
                className="w-8 h-8 hover:opacity-50"
              />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/jmotah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-8 h-8 hover:opacity-50"
              />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/jmotah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-50"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;