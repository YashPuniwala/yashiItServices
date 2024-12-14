import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import InstantTopLink from "../../../utils/instantTopLink";

function Hero() {
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2, // Slightly reduced for consistency
        ease: "easeInOut",
      },
    },
  };
  
  const startNowButtonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2, // Matched with title duration
        ease: "easeInOut",
      },
    },
  };
  
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100, // Adjusted for smoother spring
        damping: 12,   // Lower damping for a more natural motion
        duration: 1.2, // Matched duration with title and button for consistency
      },
    },
  };
  
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06, // Minor increase to sync with other timings
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Shortened to match other animations
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero h-auto py-20 sm:h-[100vh] md:h-auto lg:h-[90vh] lg:py-0">
      {/* <div className="curve"></div> */}
      <div className="container mx-auto px-0 md:px-12 flex flex-col lg:flex-row items-center justify-evenly h-full space-y-8 lg:space-y-0 lg:space-x-4">
        {/* Text Content */}
        <div className="max-w-lg text-center lg:text-left mt-14 lg:mt-0">
          <motion.h2
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-blue-200 mb-4 md:mb-8"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            IT Software & Design
          </motion.h2>

          <motion.h1
            className="text-[3rem] sm:text-6xl md:text-6xl lg:text-6xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* "Creating a better" part */}
            {"Creating a better".split("").map((char, index) => (
              <motion.span key={`cb-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}

            {/* Space between "Creating a better" and "IT solutions" */}
            <motion.span> </motion.span>

            {/* "IT solutions" part with blue color */}
            {"IT solutions".split("").map((char, index) => (
              <motion.span
                key={`its-${index}`}
                className="text-blue-300"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

            <InstantTopLink to="/contactUs">
          <motion.button
            initial="hidden"
            animate="visible"
            variants={startNowButtonVariants}
            className="px-6 py-3 mt-6 sm:mt-12 bg-transparent rounded-full border text-white hover:bg-white hover:text-black text-xl"
          >
            Start Now
          </motion.button>
          </InstantTopLink>
        </div>

        {/* Illustration */}
        <motion.div
          className="flex justify-center lg:justify-end w-full lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/laptop.png"
            alt="IT Solutions Illustration"
            className="max-w-full lg:h-auto sm:h-[25rem] md:h-[22rem] bg-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
