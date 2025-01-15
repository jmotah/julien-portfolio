import React from "react";
import { motion } from "framer-motion";
import MailIcon from "../assets/mail_icon.png";
import GithubIcon from "../assets/github_icon.png";
import LinkedInIcon from "../assets/linkedin_icon.png";

const socials = [
  {
    title: "Mail",
    href: "mailto:jmotaharian1@gmail.com",
    linkToDisplay: "jmotaharian1@gmail.com",
    image: MailIcon,
  },
  {
    title: "Github",
    href: "https://github.com/jmotah",
    linkToDisplay: "github.com/jmotah",
    image: GithubIcon,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/jmotah/",
    linkToDisplay: "linkedin.com/in/jmotah/",
    image: LinkedInIcon,
  },
];

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ee48dc3-d1b8-4559-9376-a52db8502a96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex items-center justify-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-20 space-x-24 px-6">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md shadow-teal-200 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-medium py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-center space-y-12">
          {socials.map((social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 hover:opacity-50 flex items-center"
              key={social.title}
            >
              <div className="flex justify-center items-center text-xl font-bold space-x-10">
                <img src={social.image} className="w-20 h-20" alt={social.title} />
                <span>
                  {social.title} : {social.linkToDisplay}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;