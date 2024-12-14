import React from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../../utils/projects";
import InstantTopLink from "../../../utils/instantTopLink";

const RecentProjects = () => {
  // const projects = [
  //   {
  //     id: "01",
  //     title: "E-commerce UI Modernization",
  //     description:
  //       "Complete frontend overhaul of a major e-commerce platform serving 1M+ daily users. Implemented responsive design, dynamic product filtering, and real-time cart updates.",
  //     impact: "40% faster page loads | 25% increase in mobile conversions",
  //     category: "E-commerce",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: "02",
  //     title: "SaaS Dashboard",
  //     description:
  //       "Built a modern analytics dashboard with real-time data visualization, custom charts, and interactive reports. Features dark mode and accessibility compliance.",
  //     impact: "98% positive user feedback | 60% faster data access",
  //     category: "Web Application",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: "03",
  //     title: "Real Estate Platform",
  //     description:
  //       "Developed a feature-rich property listing platform with virtual tours, interactive maps, and advanced search functionality using React and Next.js.",
  //     impact: "2x faster property search | 45% better engagement",
  //     category: "Real Estate",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: "04",
  //     title: "Learning Management System",
  //     description:
  //       "Created an intuitive LMS interface with video integration, progress tracking, and interactive assessments. Fully responsive with offline capabilities.",
  //     impact: "35% higher course completion | 50% more user retention",
  //     category: "Education",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  //   },
  // ];

  const TiltCard = ({ children }) => {
    const [transform, setTransform] = React.useState("");
    const [transition, setTransition] = React.useState("");

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
      setTransition("transform 0.1s ease-out");
    };

    const handleMouseLeave = () => {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
      setTransition("transform 0.5s ease-out");
    };

    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform, transition }}
      >
        {children}
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
        }}
        className={`cursor-pointer ${
          index === 1
            ? "md:mt-16"
            : index === 2
            ? "md:mt-0" // Add distance between 1st and 3rd cards
            : index === 3
            ? "md:mt-16" // Add margin-top for 4th card
            : ""
        } md:w-[90%] lg:w-[80%] mx-auto mb-8`}
      >
        <TiltCard>
          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover rounded-[1.5rem] md:h-full"
            />
          </div>
        </TiltCard>

        <div className="py-4 md:py-6 px-4 rounded-b-lg">
          <div className="space-y-5 md:space-y-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-[1.5rem] md:text-3xl font-semibold">
                {project.id}-{project.title}
              </h3>
            </div>
            <p className="text-[1rem] font-medium md:text-lg leading-relaxed">
              {project.description}
            </p>
            <InstantTopLink
              to={`/projectDetail/${project.slug}`}
              className="hover:text-current"
              >
            <button className="inline-block px-6 py-2 border border-black text-black rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 text-base sm:text-lg">
              View Detail
            </button>
              </InstantTopLink>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="text-black pb-14 pt-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Project</h2>
          <p className="text-xl max-w-5xl mx-auto">
            At Hexaly, we pride ourselves on delivering innovative and effective
            solutions that drive results. Here are some of our recent projects
            that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          {projects.map((project, index) => (
            
              <ProjectCard key={project.id} project={project} index={index} />
        
          ))}
        </div>

        <div className="text-center mt-4 md:mt-8">
          <InstantTopLink to="/portfolio">
            <button className="px-8 py-3 bg-[#003f8c] text-white rounded-full hover:bg-blue-800 transition-colors duration-300 text-lg">
              View More
            </button>
          </InstantTopLink>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
