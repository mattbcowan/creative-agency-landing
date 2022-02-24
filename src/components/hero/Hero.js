import React from "react";
import "./Hero.css";
import useWindowSize from "../../hooks/useWindowSize";

const Hero = () => {
  const windowSize = useWindowSize();

  return (
    <div className="hero">
      <picture className="hero--image">
        <source
          srcSet="/assets/desktop/image-hero.jpg"
          media="(min-width: 768px)"
        />
        <img src="/assets/mobile/image-hero.jpg" alt="hero" />
      </picture>
      <div className="hero--text">
        <h1>Branding & website design agency</h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
