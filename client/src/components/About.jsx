import { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import blockchainIcon from "../assets/blockchain-icon.svg";
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

  // useEffect(() => {
  //   if (isDesktop) {
  //     const sections = Array.from(sectionsRef.current.children);

  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: sectionsRef.current,
  //         pin: true,
  //         scrub: 1,
  //         end: "+=3000",
  //         // snap: 1 / (sections.length - 1),
  //         // markers: true,
  //       },
  //     });
  //   }
  // }, [isDesktop]);

  return (
    <div id="about-section" className="about">
      <div className="about-container" ref={sectionsRef}>
        <section>
          <div className="about-content">
            <h1>About</h1>
            <p>
              I&apos;m a Software Engineer who builds decentralized applications with a focus on performance, reliability, and security. My path into blockchain started unconventionally—as an NFT gaming scholar. What captivated me wasn&apos;t just the technology, but the open communities and collaborative spirit that surrounded it. That experience transformed my curiosity into a career.
              <br /> <br />
              I specialize in full-stack blockchain development using Next.js, React, Go, and Solidity. Over the past 2+ years, I&apos;ve developed smart contracts, built decentralized storage solutions with IPFS, created NFT platforms, and contributed to open-source blockchain education tools. At AR Data Technologies, I developed proof-of-concepts for client proposals and implemented secure IPFS storage systems for international clients.
              <br /> <br />
              I&apos;m a cum laude IT graduate who approaches development with both technical precision and creative problem-solving. I&apos;ve led projects, collaborated with international teams, and consistently delivered solutions that work—not just in theory, but in production.
              <br /> <br />
              I&apos;m looking for my next opportunity to build meaningful Web3 applications and contribute to teams that are shaping the future of decentralized technology.
            </p>
          </div>
          {/* <div className="about-side">
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
          </div> */}
          {/* <div className="circle1"></div> */}
          {/* <div className="circle2"></div> */}
        </section>

        {/* <section>
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
        </section> */}
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
