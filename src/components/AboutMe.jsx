import React from "react";
import { motion } from "framer-motion";
import DJPhoto from "../assets/dj_photo.png";
import SoccerPhoto from "../assets/soccer_photo.JPG";
import MotorcyclePhoto from "../assets/motorcycle_photo.jpeg";
import RowingPhoto from "../assets/rowing_photo.jpg"

const sections = [
  {
    title: "Rowing",
    paragraph:
      "I picked up rowing crew early in high school. I was trained as a starboard rower rowing as seven seat in an eight " + 
      "eight man boat. With more experience, my team and I were split into two four man boats where I then rowed three seat. " +
      "We travelled all around the north east competing in various competitions held in New Jersey, Connecticuit, Pennsylvania, and " +
      "even Boston!",
    image: RowingPhoto,
    alt: "Rowing Photo"
  },
  {
    title: "DJing",
    paragraph:
      "My roommate and I started learning how to DJ during our Freshman year at university. It was helpful motivating " +
      "and bouncing ideas off one another to continue and progress with something we were both in. Present day, together, we " +
      "have DJed multiple events!",
    image: DJPhoto,
    alt: "DJ Photo",
  },
  {
    title: "Soccer",
    paragraph:
      "Soccer has been a big part of my life since a kid. Growing up, I've played for multiple club teams and am a " +
      "Bayern Munich and Tottenham Hotspur fan. I still play soccer for the university intramural team and try to play pickup " +
      "whenever I can!",
    image: SoccerPhoto,
    alt: "Soccer Photo",
  },
  {
    title: "Motorcycles",
    paragraph:
      "I've had a love for bikes since I can remember, but when I was 17 years old I got my official license. " +
      "I was able to purchase a Kawasaki Ninja 650 as my first bike and absolutely love it. I've done some work to it including " +
      "installing an exhaust, dyno tune, and a few small modifications. There's just something about the wind on your face while riding.",
    image: MotorcyclePhoto,
    alt: "Motorcycle Photo",
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
          className={`w-full min-h-screen px-4 py-10 md:py-20 grid items-center ${
            index % 2 === 0 ? "bg-gray-50 text-black" : "bg-black text-white"
          }`}
        >
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {index % 2 === 0 ? (
              <>
                {/* Image */}
                <img
                  className="w-96 h-96 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300"
                  src={section.image}
                  alt={section.alt}
                />

                {/* Main Text Content */}
                <div className="flex flex-col justify-center text-center md:text-right">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    {section.title}
                  </h1>
                  <p className="text-lg sm:text-lg md:text-2xl py-4 text-gray-500">
                    {section.paragraph}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Main Text Content */}
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    {section.title}
                  </h1>
                  <p className="text-lg sm:text-lg md:text-2xl py-4 text-gray-500">
                    {section.paragraph}
                  </p>
                </div>

                {/* Image */}
                <img
                  className="w-96 h-96 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto my-4 rounded-full aspect-square hover:scale-110 transition-all duration-300"
                  src={section.image}
                  alt={section.alt}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default AboutMe;