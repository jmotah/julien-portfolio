import { Link, NavLink } from "react-router-dom";
import JulienPhoto from "../assets/julien_photo.jpeg";
import Resume from "../assets/resume.png"
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-50 text-black font-mono">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-5">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                className="w-10 h-10 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300"
                src={JulienPhoto}
                alt="JulienPhoto"
              />
            </Link>
            <div className="flex flex-col md:flex-row md:items-center sm:pt-1">
              <Link
                to="/"
                className="text-2xl font-bold text-black"
                onClick={closeMobileMenu}
              >
                Julien
              </Link>
              <span className="text-sm text-black pl-10 pt-0.5">
                Computer Science @ Northeastern University
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <NavLink
                to="/about-me"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                    : "px-3 py-2 rounded-md text-sm font-bold hover:bg-teal-500 transition-all duration-300 hover:text-white"
                }
              >
                About Me
              </NavLink>
              <span className="text-gray-400">|</span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href={Resume}
                className="px-3 py-2 rounded-md text-sm font-bold hover:text-white hover:bg-teal-500 transition-all duration-300"
                target='_blank' rel='noopener noreferrer'
              >
                Resume
              </a>
              <span className="text-gray-400">|</span>
            </div>
            <div className="flex items-center space-x-2">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                    : "px-3 py-2 rounded-md text-sm font-bold hover:bg-teal-500 transition-all duration-300 hover:text-white"
                }
              >
                Projects
              </NavLink>
              <span className="text-gray-400">|</span>
            </div>
            <div className="flex items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                    : "px-3 py-2 rounded-md text-sm font-bold hover:bg-teal-500 transition-all duration-300 hover:text-white"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 bg-gray-50 p-5">
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                  : "block px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:bg-teal-500 transition-all duration-300 hover:text-white"
              }
              onClick={closeMobileMenu}
            >
              About Me
            </NavLink>
            <a
              href="/resume.png"
              className="block px-3 py-2 text-sm font-bold text-gray-800 rounded-md hover:bg-teal-500 hover:text-white transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                  : "block px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:bg-teal-500 transition-all duration-300 hover:text-white"
              }
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-sm font-bold bg-teal-500 text-white"
                  : "block px-3 py-2 rounded-md text-sm font-bold text-gray-800 hover:bg-teal-500 transition-all duration-300 hover:text-white"
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;