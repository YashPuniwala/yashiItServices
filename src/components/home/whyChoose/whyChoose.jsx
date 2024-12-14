import React, { useRef } from "react";
import { Code, Database, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featureRef = useRef(null);
  const imageRef = useRef(null);

  // Individual in-view checks
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isDescInView = useInView(descRef, { once: true, margin: "-100px" });
  const isFeatureInView = useInView(featureRef, {
    once: true,
    margin: "-100px",
  });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  // Animation variants
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-7xl mx-auto px-4 py-10 md:py-16 mt-8 gap-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2 max-w-lg">
        {/* Title */}
        <motion.h2
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-4xl font-medium mb-6 relative inline-block"
        >
          Why Choose Our Tech Stack?
        </motion.h2>

        {/* Description */}
        <motion.p
          ref={descRef}
          className="text-gray-700 mb-8 text-lg"
          initial="hidden"
          animate={isDescInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          Every project starts with cutting-edge technology selection. We
          carefully choose the best tools and frameworks that match your project
          requirements, ensuring scalability, performance, and maintainable
          code.
        </motion.p>

        {/* Features with staggered animation */}
        <motion.div
          ref={featureRef}
          className="space-y-6"
          initial="hidden"
          animate={isFeatureInView ? "visible" : "hidden"}
          variants={featureVariants}
        >
          <motion.div
            className="flex items-center gap-4"
            variants={textVariants}
          >
            <div className="text-[#003f8c]">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Modern Development</h3>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={textVariants}
          >
            <div className="text-[#003f8c]">
              <Database size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Scalable Architecture</h3>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={textVariants}
          >
            <div className="text-[#003f8c]">
              <Rocket size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Optimized Performance</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image */}
       <motion.div
        ref={imageRef}
        className="w-full md:w-1/2 max-w-lg flex justify-center md:justify-end"
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="relative w-full max-w-full">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            alt="Developers collaborating on code review"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
