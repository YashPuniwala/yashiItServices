import React from "react";
import { Link } from "react-router-dom";

// Custom link component that scrolls to top instantly
const InstantTopLink = ({ to, children, className = "", onClose }) => {
  const handleClick = () => {
    // Instantly set scroll position to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    if (onClose) {
      onClose(); // Call onClose to close the menu
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`inline-block hover:text-blue-600 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default InstantTopLink;
