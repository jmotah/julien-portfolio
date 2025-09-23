import React from "react";
import { motion } from "framer-motion";
import PortfolioPhoto from "../assets/portfolio_photo.png"
import SwarmScapePhoto from "../assets/swarmscape_photo.jpg"
import VRGameAnalysisPhoto from "../assets/vr_game_analysis_photo.png"
import ThreeTriosPhoto from "../assets/threetrios_photo.png"
import UDHCaseStudyPhoto from "../assets/udh_case_study_photo.png"
import SQLRoadmapPhoto from "../assets/sql_roadmap_photo.png"
import MisconnectDetectorPhoto from "../assets/misconnect_detector_photo.png"
import FakeNewsDetectorPhoto from "../assets/fake_news_detector_photo.png"
import MotionMaxPhoto from "../assets/motion_max_photo.png"

const projects = [
  {
    title: "United Data Hub (UDH) Case Study",
    description: (
    <>
      Led <strong>6+ feedback sessions</strong> with <strong>16 analysts</strong> to surface gaps in
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
      Built a <strong>self-service learning hub</strong> with curated examples, videos, and challenge
      tasks to accelerate analyst onboarding to <strong>Redshift</strong> and <strong>DBeaver</strong>.
      Centralized <strong>SQL conventions</strong> and common query patterns and introduced
      <strong> internal LLM workflows</strong> for querying and documentation.
    </>
    ),
    link: "Internal company information",
    image: SQLRoadmapPhoto,
  },
  {
    title: "MarsX GenAI Potential Baggage Misconnect Detector",
    description: (
    <>
      Developed an <strong>LLM-powered detector</strong> fusing <strong>live bag scans</strong>,
      <strong> flight schedules</strong>, and <strong>weather intelligence</strong> to produce
      <strong> plain-language misconnect risk</strong> for agents and passengers. Increased reliability
      via <strong>state handling</strong>, <strong>smart caching</strong>, and
      <strong> time-zone normalization</strong>, enabling earlier, actionable alerts.
    </>
    ),
    link: "Internal company information",
    image: MisconnectDetectorPhoto,
  },
  {
    title: "Fake News & Propaganda Detector (NLP)",
    description: (
    <>
      Trained and compared <strong>LogReg</strong>, <strong>LSTM</strong>, <strong>RNN</strong>, and
      <strong> BERT</strong> on normalized text from <strong>FakeNewsNet</strong>, <strong>LIAR</strong>,
      and a misinformation dataset (thousands of articles/claims). Achieved
      <strong> ~93% accuracy/F1 with fine-tuned BERT</strong>; shipped a
      <strong> quick-start inference interface</strong> for real-time sentence classification using
      <strong> PyTorch</strong> and <strong>HuggingFace</strong>.
    </>
    ),
    link: "https://github.com/jmotah/fake-news-and-propaganda-detector",
    image: FakeNewsDetectorPhoto,
  },
  {
    title: "motionMAX - Fitness & Welness Platform",
    description: (
    <>
      Full-stack app using <strong>Streamlit</strong> (frontend), <strong>Flask REST API</strong> (backend),
      and <strong>MySQL</strong> (DB). Features <strong>RBAC</strong> (sales, trainer, client, admin);
      trainer-programmed <strong>workouts</strong> with tracking; <strong>food/macros</strong> logging and recipes;
      trainer–client <strong>messaging</strong>; admin/sales <strong>analytics</strong> (CAC, CLV, revenue, monthly
      subscribers); surveys for <strong>demographics/feedback</strong>; product catalog with price updates & out-of-stock;
      <strong>support tickets</strong> lifecycle; maintenance-mode toggle; and full <strong>profile CRUD</strong>. One-command
      <strong> Docker Compose</strong> setup.
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