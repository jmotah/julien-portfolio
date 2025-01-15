import React from "react";
import { motion } from "framer-motion";
import DJPhoto from "../assets/dj_photo.png"
import SoccerPhoto from "../assets/soccer_photo.JPG"
import MotorcyclePhoto from "../assets/motorcycle_photo.jpeg"

const sections = [
  {
    title: "Motorcycles",
    paragraph: "I've had a love for bikes since I can remember, but when I was 17 years old I got my official license. " 
    + "I was able to purchase a Kawasaki Ninja 650 as my first bike and absolutely love it. I've done some work to it including "
    + "installing an exhaust, dyno tune, and a few small modifications. There's just something about the wind hitting you while riding.",
    image: MotorcyclePhoto,
    alt: "MotorcyclePhoto"
  },
  {
    title: "DJing",
    paragraph: "My roommate and I started learning how to DJ during our Freshman year at university. It was helpful motivating "
    + "and bouncing ideas off one another to continue and progress with something we were both in. Present day, together, we "
    + "have DJed multiple events!",
    image: DJPhoto,
    alt: "DJPhoto"
  },
  {
    title: "Soccer",
    paragraph: "Soccer has been a big part of my life since a kid. Growing up, I've played for multiple club teams and am a "
    + "Bayern Munich and Tottenham Hotspur fan. I still play soccer for the university intramural team and try to play pickup "
    + "whenever I can!", 
    image: SoccerPhoto,
    alt: "SoccerPhoto"
  },
];

const AboutMe = () => {
  return (
    <motion.div
      className="flex items-center justify-center flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-full h-[735px] px-4 pt-20 grid items-center ${
            index % 2 === 0 ? "bg-gray-50 text-black" : "bg-black text-white"
          }`}
        >
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            {index % 2 === 0 ? (
              <>
                {/* Image */}
                <img className="w-96 h-96 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300" 
                src={section.image} alt={section.alt} />

                {/* Main Text Content */}
                <div className="flex flex-col justify-center">
                  <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-right">
                    {section.title}
                  </h1>
                  <p className="md:text-2xl sm:text-lg text-lg py-2 text-gray-500">
                    {section.paragraph}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Main Text Content */}
                <div className="flex flex-col justify-center">
                  <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-left">
                    {section.title}
                  </h1>
                  <p className="md:text-2xl sm:text-lg text-lg py-2 text-gray-500">
                    {section.paragraph}
                  </p>
                </div>

                {/* Image */}
                <img className="w-96 h-96 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300" 
                src={section.image} alt={section.alt} />
              </>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default AboutMe;