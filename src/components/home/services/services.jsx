import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { servicesContent } from "../../../utils/servicesContent";
import { Link } from "react-router-dom";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const leftSectionRef = useRef(null);
  const isLeftInView = useInView(leftSectionRef, { once: true });

    // Detect if the screen size is below `md`
    const isBelowMd = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Digital Marketing",
      description:
        "Reach your audience where they are. From SEO to social media advertising, we create campaigns that generate leads.",
      icon: "https://cdn.prod.website-files.com/6665f65e997e06ea00481f41/67038ceedd4a4de64802a691_Collaboration.svg"
    },
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices to ensure scalability and performance.",
      icon: "https://cdn.prod.website-files.com/6665f65e997e06ea00481f41/6703d3d692a7b4fbb9b7fc68_coming-soon.svg"
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your audience where they are. From SEO to social media advertising, we create campaigns that generate leads.",
      icon: "https://cdn.prod.website-files.com/6665f65e997e06ea00481f41/6703d3d692a7b4fbb9b7fc68_coming-soon.svg"
    },
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices to ensure scalability and performance.",
      icon: "https://cdn.prod.website-files.com/6665f65e997e06ea00481f41/6703d52184c0b349748b5e6e_social-media.svg"
    },
  ];

  const getCardStyle = (index) => {
    const basePosition = isBelowMd ? 130 : 176; // Adjust for screens below `md`
    const scrollThreshold = index * 500;

    if (scrollY < scrollThreshold) {
      return {
        transform: `translateY(100%)`,
        opacity: 0,
        visibility: "hidden",
      };
    }

    return {
      transform: `translateY(0)`,
      opacity: 1,
      visibility: "visible",
      position: "sticky",
      top: `${basePosition}px`,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-12">
          {/* Left Section with Fade */}
          <motion.div
            ref={leftSectionRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: isLeftInView ? 1 : 0,
              y: isLeftInView ? 0 : -50,
            }}
            transition={{ duration: 0.8 }}
            className="w-[87%] md:w-[140%] lg:w-[100%]"
          >
            <div className="md:sticky top-0 md:top-60">
              <h2 className="text-4xl font-semibold mb-6">
                Our Range Of{" "}
                <span className="relative pb-[0.2rem]">
                  Services
                  <span className=" absolute bottom-1 left-0 w-full h-3 bg-[#003f8c] -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                We can cover a full spectrum of services that will be suited for
                small and large organizations and businesses.
              </p>
            </div>
          </motion.div>

          {/* Right Section with Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isLeftInView ? 1 : 0,
              y: isLeftInView ? 0 : 50,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative space-y-10"
          >
            {servicesContent.map((card, index) => (
              <Link to={`/services/${card.slug}`} 
              key={index}
              >
              <div
                className="transition-all duration-500"
                style={getCardStyle(index)}
              >
                <div
                  className={`bg-white rounded-lg px-4 py-6 shadow-sm border border-gray-100 ${
                    index === cards.length - 1 ? "" : "mb-[14rem]"
                  }`}
                >
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {card?.title}
                      </h3>
                      <p className="text-gray-600 mb-14">{card?.description2}</p>
                      <button className="inline-flex items-center px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                        Learn More
                      </button>
                    </div>
                    <div className="order-1 md:order-2">
                      {/* <div className="w-full">{card.icon}</div> */}
                      <img alt="icon" src={card?.icon} className="w-[30rem] md:w-full lg:w-full mx-auto"/>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;