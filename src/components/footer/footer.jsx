import React from "react";
import {
  FaBehance,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { servicesContent } from "../../utils/servicesContent";
import InstantTopLink from "../../utils/instantTopLink";
import { projects } from "../../utils/projects";

const servicesData = [
  "Website Design & Development",
  "Mobile App Development",
  "E-Commerce and CMS",
  "Animation",
  "Designing",
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-8 md:py-14">
      <div className="container mx-auto px-4 sm:px-0 md:px-0 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-2xl lg:max-w-screen-xl xl:max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:justify-around px-4 md:px-0 lg:px-0 py-8 md:py-10 space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="w-[100%] md:w-[33%] lg:w-[28%] text-left md:text-left">
            <h1 className="text-4xl sm:text-3xl md:text-[2rem] lg:text-4xl font-bold text-white mb-2 sm:mb-4">
              Yashi IT Services
            </h1>
            {/* <p className="text-sm sm:text-sm uppercase text-red-500 mb-2 sm:mb-4">
              Innovation • Passion • Dedication
            </p> */}
            <p className="text-sm sm:text-sm leading-relaxed">
              Yashi IT Services is an established web development and design
              company that works with companies in all sectors of business. We
              combine the latest technologies, tools, and frameworks with years
              of experience to deliver customized, reliable, and efficient
              solutions.
            </p>
            <div className="mt-6 sm:mt-10 space-y-2 text-xs sm:text-sm">
              <p className="flex justify-left md:justify-start items-left space-x-2">
                <span role="img" aria-label="phone">
                  📞
                </span>
                <span className="text-sm">+91-9876543213</span>
              </p>
              <p className="flex justify-left md:justify-start items-left space-x-2">
                <span role="img" aria-label="email">
                  ✉️
                </span>
                <span className="text-sm">info@yashiitservice.in</span>
              </p>
              <p className="flex justify-left md:justify-start items-left space-x-2">
                <span role="img" aria-label="hr">
                  📧
                </span>
                <span className="text-sm">hr@yashiitservice.in</span>
              </p>
              <p className="flex justify-left md:justify-start items-left space-x-2">
                <span role="img" aria-label="social">
                  🔗
                </span>
                <span className="text-sm">Yashiitservices</span>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 md:w-[50%] text-left md:text-left">
            {/* Our Company */}
            <div className="w-full">
              <h2 className="text-white text-lg sm:text-lg font-semibold mb-3 sm:mb-4">
                Our Company
              </h2>
              <ul className="text-sm sm:text-xs flex flex-col space-y-1 sm:space-y-2">
                <InstantTopLink to="/" className="block hover:text-gray-500">
                  <li>Home</li>
                </InstantTopLink>
                <InstantTopLink
                  to="/portfolio"
                  className="block hover:text-gray-500"
                >
                  <li>Portfolio</li>
                </InstantTopLink>
                <InstantTopLink
                  to="/contactUs"
                  className="block hover:text-gray-500"
                >
                  <li>Contact Us</li>
                </InstantTopLink>
                <InstantTopLink
                  to="/services"
                  className="block hover:text-gray-500"
                >
                  <li>Services</li>
                </InstantTopLink>
              </ul>
            </div>

            {/* Services */}
            <div className="w-[105%] lg:w-[80%]">
              <h2 className="text-white text-lg sm:text-lg font-semibold mb-3 sm:mb-4">
                Services
              </h2>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-xs">
                {servicesContent.map((service) => (
                  <li key={service.id}>
                    <InstantTopLink
                      className="hover:text-gray-500"
                      to={`/services/${service.slug}`} // Use slug instead of id
                    >
                      {service.title}
                    </InstantTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div className="w-full mt-0 sm:mt-8 md:mt-0">
              <h2 className="text-white text-lg sm:text-lg font-semibold mb-3 sm:mb-4">
                Portfolio
              </h2>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-xs">
                {projects.map((project) => (
                  <li key={project.id}>
                    <InstantTopLink
                      className="hover:text-gray-500"
                      to={`/projectDetail/${project.slug}`}
                    >
                      {project.title}
                    </InstantTopLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 mt-8 flex flex-col md:flex-row md:justify-around items-center text-xs sm:text-sm">
          <p className="text-gray-400 mb-4 md:mb-0 text-center">
            © 2024 Yash IT Services Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex justify-left space-x-4 sm:space-x-6 text-gray-400">
            <FaTwitter className="text-lg sm:text-xl" />
            <FaFacebook className="text-lg sm:text-xl" />
            <FaLinkedin className="text-lg sm:text-xl" />
            <FaInstagram className="text-lg sm:text-xl" />
            <FaPinterest className="text-lg sm:text-xl" />
            <FaSkype className="text-lg sm:text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
