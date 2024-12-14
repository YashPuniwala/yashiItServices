import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InstantTopLink from "../../utils/instantTopLink";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if the current route is `projectDetail/${project.id}`
  const isProjectDetailPage = location.pathname.startsWith("/projectDetail/");

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Set the initial state based on scroll position when the component mounts
  useEffect(() => {
    if (!isProjectDetailPage) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isProjectDetailPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isProjectDetailPage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-all duration-300 z-50 ${
        isProjectDetailPage || scrolled
          ? "bg-white text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="font-bold text-2xl">Yashi IT Services</div>

      {/* Menu items for larger screens */}
      <div className="hidden lg:flex space-x-6">
        <InstantTopLink
          to="/"
          className="font-normal text-current hover:text-current"
          onClose={() => setMenuOpen(false)} // Close menu on link click
        >
          Home
        </InstantTopLink>
        <InstantTopLink
          to="/portfolio"
          className="font-normal text-current hover:text-current"
          onClose={() => setMenuOpen(false)} // Close menu on link click
        >
          Portfolio
        </InstantTopLink>
        <InstantTopLink
          to="/services"
          className="font-normal text-current hover:text-current"
          onClose={() => setMenuOpen(false)} // Close menu on link click
        >
          Services
        </InstantTopLink>
        <InstantTopLink
          to="/contactUs"
          className="font-normal text-current hover:text-current"
          onClose={() => setMenuOpen(false)} // Close menu on link click
        >
          Contact
        </InstantTopLink>
      </div>

      {/* Search and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <button
          className={`lg:hidden ${
            scrolled || isProjectDetailPage ? "text-black" : "text-white"
          }`}
          onClick={() => {
            console.log("Toggling menu:", !menuOpen);
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </button>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-white">
          <InstantTopLink
            to="/"
            className="text-lg"
            onClose={() => setMenuOpen(false)} // Close menu on link click
          >
            Home
          </InstantTopLink>
          <InstantTopLink
            to="/portfolio"
            className="text-lg"
            onClose={() => setMenuOpen(false)} // Close menu on link click
          >
            Portfolio
          </InstantTopLink>
          <InstantTopLink
            to="/services"
            className="text-lg"
            onClose={() => setMenuOpen(false)} // Close menu on link click
          >
            Services
          </InstantTopLink>
          <InstantTopLink
            to="/contactUs"
            className="text-lg"
            onClose={() => setMenuOpen(false)} // Close menu on link click
          >
            Contact
          </InstantTopLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
