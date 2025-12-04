import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioPhoto from "../assets/portfolio_photo.png"
import SwarmScapePhoto from "../assets/swarmscape_photo.jpg"
import VRGameAnalysisPhoto from "../assets/vr_game_analysis_photo.png"
import ThreeTriosPhoto from "../assets/threetrios_photo.png"
import UDHCaseStudyPhoto from "../assets/udh_case_study_photo.png"
import SQLRoadmapPhoto from "../assets/sql_roadmap_photo.png"
import MisconnectDetectorPhoto from "../assets/misconnect_detector_photo.png"
import FakeNewsDetectorPhoto from "../assets/fake_news_detector_photo.png"
import MotionMaxPhoto from "../assets/motion_max_photo.png"
import InterviewCoachPhoto from "../assets/interview_coach_photo.png"

const projects = [
  {
    title: "United Data Hub (UDH) Case Study",
    description: (
    <>
      Led <strong>6+ feedback sessions</strong> with <strong>16 analysts</strong> at United Airlines to surface gaps in
      <strong> SQL training</strong>, <strong>data refresh visibility</strong>, and
      <strong> documentation ownership</strong> across UDH. Delivered recommendations (e.g.,
      <strong> sample data previews</strong>, <strong>activity dashboards</strong>) and a standardized
      <strong> UDH orientation</strong> to streamline onboarding and reduce support load.
    </>
    ),
    link: "Internal company information",
    image: UDHCaseStudyPhoto,
  },
  {
    title: "Redshift SQL Roadmap Website (Onboarding Hub)",
    description: (
    <>
      Built a <strong>self-service learning hub</strong> for United Airlines with curated examples, short videos, and <strong>company-curated challenge problems</strong> that get new <strong>analysts</strong> hands-on with <strong>company software</strong> and <strong>internal resources</strong> (Redshift, DBeaver, internal LLM tools). Designed for analysts—including those new to <strong>SQL</strong> or <strong>Redshift</strong>—the roadmap scaffolds fundamentals to production patterns, embeds best practices, and <strong>integrates new employees into company resources</strong>, workflows, and support channels so they ramp faster and feel <strong>more confident</strong>.
    </>
    ),
    link: "Internal company information",
    image: SQLRoadmapPhoto,
  },
  {
    title: "MarsX GenAI Potential Baggage Misconnect Detector",
    description: (
    <>
      Developed an <strong>LLM-powered detector</strong> for United Airlines that combines <strong>live bag scans</strong>, <strong>flight schedules</strong>, and <strong>weather intelligence</strong> to generate <strong>plain-language risk</strong> alerts. Improved reliability with <strong>state handling</strong>, <strong>smart caching</strong>, and <strong>time zone normalization</strong>, enabling earlier, clearer decisions to <strong>hold</strong> or <strong>reroute</strong> bags.
    </>
    ),
    link: "Internal company information",
    image: MisconnectDetectorPhoto,
  },
  {
    title: "AI Interview Coach",
    description: (
    <>
      Built an <strong>AI</strong>-powered interview coach that uses webcam and mic input to give real-time feedback on delivery. Trained a custom <strong>CNN</strong> in <strong>PyTorch</strong> for facial emotion / nervousness detection, combined with eye-contact tracking via <strong>OpenCV</strong> and a speech-to-text pipeline for WPM, filler rate, and silence. Modeled coaching decisions as an <strong>RL</strong> tabular <strong>Q-learning</strong> problem (interrupt vs.\ stay quiet) with simple feature thresholds and cooldowns, and deployed via a <strong>Flask</strong> API and <strong>React</strong> frontend showing live overlays and post-interview feedback.
    </>
    ),
    link: "https://github.com/annahiggins1/interview-coach",
    image: InterviewCoachPhoto,
  },
  {
    title: "Fake News & Propaganda Detector (NLP)",
    description: (
    <>
      Trained and compared <strong>LogReg</strong>, <strong>LSTM</strong>, <strong>RNN</strong>, and <strong>BERT</strong> on normalized text from <strong>FakeNewsNet</strong>, <strong>LIAR</strong>, and a misinformation dataset. Achieved <strong>~93% accuracy/F1</strong> with fine-tuned BERT and <strong>~88% accuracy</strong> with LSTM; shipped a quick-start inference interface using <strong>PyTorch</strong> and <strong>HuggingFace</strong>.
    </>
    ),
    link: "https://github.com/jmotah/fake-news-and-propaganda-detector",
    image: FakeNewsDetectorPhoto,
  },
  {
    title: "motionMAX - Fitness & Welness Platform",
    description: (
    <>
      Built a full-stack fitness app with distinct roles for <strong>admins</strong>, <strong>trainers</strong>, and <strong>clients</strong>. Trainers can design <strong>custom workouts</strong> and track progress, while clients log <strong>food and macros</strong> and receive <strong>messaging support</strong> from trainers. Admins oversee <strong>subscriptions, revenue trends, and user activity</strong>. Implemented features for support ticket management, product catalog updates, and full profile customization. Deployed with a <strong>Flask + MySQL</strong> backend, <strong>Streamlit</strong> UI, and one-command <strong>Docker Compose</strong> setup.
    </>
    ),
    link: "https://github.com/Kaz3015/CS-3200-MotionMax",
    image: MotionMaxPhoto,
  },
  {
    title: "Personalized Portfolio Website",
    description: (
    <>
      A fully <strong>personalized portfolio</strong> talking more about <strong>me as a person</strong>. Showcases my skills, projects, and passions. Created using <strong>React</strong>, <strong>Node.js</strong>, <strong>Tailwind CSS</strong>, <strong>Framer Motion</strong>, <strong>Web3Forms</strong>.
    </>
    ),
    link: "https://github.com/jmotah/julien-portfolio",
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
    link: "https://github.com/jmotah/VR-Game-Popularity-Analysis",
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
    link: "https://github.com/jmotah/Three-Trios",
    image: ThreeTriosPhoto,
  },
];

const Projects = () => {
  const [popupText, setPopupText] = useState(null);

  const handleClick = (e, link) => {
    // Check if link starts with http:// or https://
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      e.preventDefault();
      setPopupText(link);
    }
  };

  const closePopup = () => {
    setPopupText(null);
  };

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
            onClick={(e) => handleClick(e, project.link)}
            className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-teal-200 transform hover:scale-105 transition-all duration-300"
          >
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

      {/* Popup Modal */}
      <AnimatePresence>
        {popupText && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Project Information
              </h3>
              <p className="text-gray-700 mb-6">{popupText}</p>
              <button
                onClick={closePopup}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;