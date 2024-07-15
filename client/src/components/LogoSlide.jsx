import React from "react";
import webdevTech from "./data/webdevTech";

const LogoSlide = ({ hoveredIcon, setHoveredIcon }) => {
  return (
    <div className="logos-slide">
      {webdevTech.map((icon, index) => {
        if (
          icon.name === "HTML" ||
          icon.name === "CSS" ||
          icon.name === "PHP-white" ||
          icon.name === "Github"
        )
          return null;

        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {hoveredIcon === index ? icon.name : icon.svg}
          </span>
        );
      })}
    </div>
  );
};

export default LogoSlide;
