import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion'
import JulienPhoto from '../assets/julien_photo.jpg'

const Home = () => {
  return (
    <motion.div
    className="w-full min-h-screen px-4 pt-20 bg-gray-50"

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">

        {/* Main Text Content */}
        <div className="flex flex-col justify-center">
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-center"
            strings={["Hey, I'm Julien"]}
            typeSpeed={120}
            backSpeed={140}
            startDelay={600}
            loop
          />
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-gray-500">
            CS & AI @ Northeastern University
          </h1>
          <h3 className="md:text-3xl sm:text-2xl text-xl font-bold text-center text-gray-500">
            Minor in Mathematics
          </h3>
        </div>

        {/* Image */}
        <img className="w-96 h-96 mx-auto my-20 rounded-full aspect-square hover:scale-125 transition-all duration-300" src={JulienPhoto} alt="JulienPhoto" />
      </div>
    </motion.div>
  );
};

export default Home;