import React, { useEffect, useState } from "react";
import {
  Code,
  Users,
  Layout,
  Award,
  ArrowRight,
  Mail,
  Monitor,
  Boxes,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../utils/projects";
import InstantTopLink from "../../utils/instantTopLink";

// ProjectCard Component
const ProjectCard = ({ project, index }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Calculate stagger delay based on index
  const staggerDelay = index * 200; // 200ms delay between each card

  // If no project data is available, return null or a fallback
  if (!project) return null;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${staggerDelay}ms`,
      }}
      className={`cursor-pointer w-full sm:max-w-[90%] md:max-w-[100%] lg:max-w-[95%] mx-auto mb-8 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform 
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        duration-700`}
    >
      <div className="relative w-full h-[300px]">
        <img
          src={project?.image || 'fallback-image-url'}
          alt={project?.title || 'Project Title'}
          className="w-full h-full object-cover"
        />
        <div
          style={{
            transitionDelay: `${staggerDelay + 200}ms`, // Additional 200ms delay for the category badge
          }}
          className={`absolute top-4 right-4 bg-[#003f8c] text-white px-4 py-2 rounded-full text-sm transition-all duration-500
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          {project?.category || 'No Category'}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between h-[230px] sm:h-[200px] md:h-[200px]">
        <h3 
          style={{
            transitionDelay: `${staggerDelay + 100}ms`, // Slightly delayed title animation
          }}
          className={`text-lg sm:text-xl font-bold mb-4 group-hover:text-[#003f8c] transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {project?.title || 'No Title'}
        </h3>
        <p 
          style={{
            transitionDelay: `${staggerDelay + 150}ms`, // Delayed description animation
          }}
          className={`text-gray-600 mb-4 text-sm flex-grow transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {project?.description || 'No description available.'}
        </p>
        <button 
          style={{
            transitionDelay: `${staggerDelay + 250}ms`, // Most delayed button animation
          }}
          className={`mt-4 flex items-center gap-2 text-[#003f8c] font-semibold group-hover:gap-4 transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          View Project Details <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};


const CompanyPortfolio = () => {
  // const projects = [
  //   {
  //     title: "E-commerce UI Modernization",
  //     description:
  //       "Complete frontend overhaul of a major e-commerce platform serving 1M+ daily users. Implemented responsive design, dynamic product filtering, and real-time cart updates.",
  //     impact: "40% faster page loads | 25% increase in mobile conversions",
  //     category: "E-commerce",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     title: "SaaS Dashboard",
  //     description:
  //       "Built a modern analytics dashboard with real-time data visualization, custom charts, and interactive reports. Features dark mode and accessibility compliance.",
  //     impact: "98% positive user feedback | 60% faster data access",
  //     category: "Web Application",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     title: "Real Estate Platform",
  //     description:
  //       "Developed a feature-rich property listing platform with virtual tours, interactive maps, and advanced search functionality using React and Next.js.",
  //     impact: "2x faster property search | 45% better engagement",
  //     category: "Real Estate",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     title: "Learning Management System",
  //     description:
  //       "Created an intuitive LMS interface with video integration, progress tracking, and interactive assessments. Fully responsive with offline capabilities.",
  //     impact: "35% higher course completion | 50% more user retention",
  //     category: "Education",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: "#003f8c" }}
        className="text-white py-32 lg:py-32"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center lg:text-left"
          >
            Crafting Digital Experiences That Inspire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 mb-8 text-center lg:text-left"
          >
            We build modern, responsive, and high-performance frontend solutions
            that engage users and drive business growth.
          </motion.p>
        </div>
      </motion.header>

      {/* Portfolio Section */}
      <section className="pt-20 pb-12">
        <div className="mx-auto px-4 md:px-6 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Web Development Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of modern, responsive, and user-centric
              frontend projects that set new standards in digital experiences.
            </p>
          </motion.div>

          <div className="flex justify-center items-center p-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 max-w-5xl">
              {projects?.length > 0 ? (
                projects.map((project, index) => (
                  <InstantTopLink
                    to={`/projectDetail/${project?.slug}`}
                    key={index}
                  >
                    <ProjectCard project={project} index={index} />
                    {/* <h1>Id: {project.id}</h1>
                    <h1>Title: {project.title}</h1>
                    <h1>Description: {project.description}</h1> */}
                  </InstantTopLink>
                ))
              ) : (
                <p>Loading projects...</p> // or show a skeleton loader
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ backgroundColor: "#003f8c" }}
        className="py-20 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Our Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12 mb-6" />,
                title: "Custom Web Development",
                description:
                  "Responsive, performant, and scalable frontend solutions using modern frameworks and best practices.",
              },
              {
                icon: <Layout className="w-12 h-12 mb-6" />,
                title: "UI/UX Design",
                description:
                  "User-centered design solutions that combine aesthetics with functionality for optimal user experience.",
              },
              {
                icon: <Boxes className="w-12 h-12 mb-6" />,
                title: "Component Libraries",
                description:
                  "Custom component libraries and design systems for consistent and maintainable applications.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg"
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl py-12 px-4 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-10 rounded-[2.5rem] pointer-events-none"></div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-6 leading-tight"
            >
              Transform Your Ideas Into Reality
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-500 text-center mb-10"
            >
              Unlock the potential of your frontend projects with cutting-edge
              designs and seamless user experiences.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <InstantTopLink
                to="/contactUs"
                className="flex items-center gap-4 text-lg sm:text-xl font-semibold bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-white" />
                Start Now
              </InstantTopLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyPortfolio;
