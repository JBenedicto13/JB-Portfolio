import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blockchainIcon from "../assets/blockchain-icon.svg";
import graphicDesignTech from "./data/graphicDesignTech";
import LogoSlide from "./LogoSlide";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredIconGD, setHoveredIconGD] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    // Function to set the isDesktop state based on the window width
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    // Add event listener on component mount to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const sections = Array.from(sectionsRef.current.children);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionsRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
          // snap: 1 / (sections.length - 1),
          // markers: true,
        },
      });
    }
  }, [isDesktop]);

  return (
    <div id="about-section" className="about">
      <div className="about-container" ref={sectionsRef}>
        <section>
          <div className="about-content">
            <h1>About</h1>
            <p>
              {/* I am a graduating student who wants to pursue a career as a Web
              Developer specializing on blockchain Dapps. I use MERN Stack as it
              use mostly by modern APIs for blockchain development. I have
              developed a Website with a minting page for an NFT Project before,
              also I have developed a Web-based Voting System through Blockchain
              Technology in Polygon Mumbai Testnet as our capstone project. */}
              I am a passionate and dedicated software engineer with experience
              in developing web-based system and apps in both Web2 and Web3
              field. I wanted to pursue a career as a Blockchain Engineer who
              build Dapps mainly with Next.js and Rust that are fast, reliable
              and secured.
            </p>
          </div>
          <div className="about-side">
            <div className="arrow-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"
                />
              </svg>
            </div>
            <div className="blockchain">
              <img src={blockchainIcon} alt="blockchain" />
            </div>
          </div>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </section>

        <section>
          <div className="about-ojt-dost">
            <div className="title">
              <h1>Student Trainee at DOST3</h1>
            </div>
            <div className="contents">
              <div className="title-div">
                <p>
                  I took my On-the-job training in the Department of Science and
                  Technology Regional Office No. 3 (DOST3) as a student trainee
                  under the Management Information System Unit in the Software
                  and System Development Section. Here, I have developed an ICT
                  Inventory System using PHP and MySQL and learned a lot of
                  things about working in government and different soft skills.
                </p>
              </div>
              <div className="image-div">
                <img
                  src="https://res.cloudinary.com/dxnta6ljp/image/upload/f_auto,q_auto/v1/Portfolio/jgb8ausljxeng6e4v3he"
                  alt="dost-building"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="technologies-section">
        <div className="technologies-header">
          <h1>Technologies that I use</h1>
        </div>
        <div className="technologies-content">
          <p>Web Development</p>
          <div className="tech-div">
            <LogoSlide
              hoveredIcon={hoveredIcon}
              setHoveredIcon={setHoveredIcon}
            />
            {isDesktop && (
              <LogoSlide
                hoveredIcon={hoveredIcon}
                setHoveredIcon={setHoveredIcon}
              />
            )}
          </div>
          <p>Graphic Design</p>
          <div className="tech-div">
            {graphicDesignTech.map((icon, index) => {
              return (
                <span
                  key={index}
                  onMouseEnter={() => setHoveredIconGD(index)}
                  onMouseLeave={() => setHoveredIconGD(null)}
                >
                  {hoveredIconGD === index ? icon.name : icon.svg}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
