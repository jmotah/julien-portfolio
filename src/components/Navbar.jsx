import { Link, NavLink } from "react-router-dom";
import JulienPhoto from "../assets/julien_photo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 text-black font-mono">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo, Name, Student Status */}
          <div className="flex items-center space-x-5">
            <Link to="/">
              <img
                className="w-10 h-10 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300"
                src={JulienPhoto}
                alt="JulienPhoto"
              />
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-2xl font-bold text-black">
                Julien
              </Link>
              <span className="text-sm pl-8 pt-0.5 text-black">
                Computer Science @ Northeastern University
              </span>
            </div>
          </div>

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
                href="/resume.png"
                className="px-3 py-2 rounded-md text-sm font-bold hover:text-white hover:bg-teal-500 transition-all duration-300"
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
      </div>
    </nav>
  );
};

export default Navbar;
