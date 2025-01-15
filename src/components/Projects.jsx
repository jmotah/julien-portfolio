import React from "react";
import { motion } from "framer-motion";
import PortfolioPhoto from "../assets/portfolio_photo.png"
import SwarmScapePhoto from "../assets/swarmscape_photo.jpg"
import VRGameAnalysisPhoto from "../assets/vr_game_analysis_photo.png"
import ThreeTriosPhoto from "../assets/threetrios_photo.png"

const projects = [
  {
    title: "Personalized Portfolio Website",
    description: (
    <>
      A fully <strong>personalized portfolio</strong> talking more about <strong>me as a person</strong>. Showcases my skills, projects, and passions. Created using <strong>React</strong>, <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, <strong>GSAP</strong>, <strong>Farmer Motion</strong>, <strong>Web3Forms</strong>.
    </>
    ),
    link: "https://julien-portfolio.vercel.app",
    image: PortfolioPhoto,
  },
  {
    title: "SwarmScape",
    description:
    (
      <>
      Focuses on creating an <strong>AI-powered Greenhouse</strong> using <strong>Swarm Robotics</strong>. Inspiration comes from the desire to <strong>decrease food scarcity</strong> in our world which currently affeting over 29% of the population. 
      </>
    ),
    link: "https://github.com/jmotah",
    image: SwarmScapePhoto,
  },
  {
    title: "Understanding VR Game Popularity: A Data-Driven Analysis",
    description: 
    (
      <>
      <strong>Web-scrapped</strong> Steam's top virtual reality (VR) games to gain insight on what <strong>drives popularity</strong> among consumers. Utilized machine learning models including the <strong>Multiple Regression</strong> and <strong>Random Forest Regression</strong> models to identify the <strong>strongest predictors of game popularity</strong>.
      </>
    ),
    link: "https://github.com/jmotah",
    image: VRGameAnalysisPhoto,
  },
  {
    title: "Three Trios Game",
    description:
    (
      <>
      A <strong>dynamic</strong>, <strong>strategy-based</strong> card game based off the Red7 board game. Created using <strong>Java</strong>, the game follows the <strong>MVC design pattern</strong> and features a <strong>modular</strong> architecture to allow for <strong>easy customization</strong> of rules/strategies. Includes a <strong>single-player</strong> or the option to play against an <strong>AI Computer player</strong> through a <strong>GUI</strong>.
      </>
    ),
    link: "https://github.com/jmotahh",
    image: ThreeTriosPhoto,
  },
];

const Projects = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (

            <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            key={index}
            className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-teal-200 transform hover:scale-105 transition-all duration-300">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
            </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;