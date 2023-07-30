import '../styles/hero.css';
import ResumePDF from '../assets/John-Benedict-Benedicto-Resume.pdf';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function Hero() {

  const heroRightRef = useRef(null);
  const heroLeftRef = useRef(null);

  useEffect(() => {
    const heroLeft = heroLeftRef.current;
    const firstCircle = heroLeft.querySelector('.circle1');
    const secondCircle = heroLeft.querySelector('.circle2');
    const heroImage = heroLeft.querySelector('#hero');

    const heroRight = heroRightRef.current;
    const titleSpan = heroRight.querySelector('#myName');
    const contentEl = heroRight.querySelector('#whatIDo');
    const resumeButton = heroRight.querySelector('#btnResume');

    gsap.set([titleSpan, contentEl, resumeButton], { opacity: 0, y: -20 });
    gsap.set([firstCircle, secondCircle], { opacity: 0, x: -20 });
    gsap.set(heroImage, { opacity: 0, x: 20 });

    const timeline = gsap.timeline();

    timeline.to([firstCircle, secondCircle, heroImage], {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1, 
    });

    timeline.to(titleSpan, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    timeline.to(contentEl, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    timeline.to(resumeButton, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    return () => {
      timeline.kill();
    };
  }, []);
  
  return (
    <div id='hero-section' className="hero">
      <div className="hero-section">
        <div ref={heroLeftRef} className='hero-left'>
          <img id='hero' src='https://res.cloudinary.com/dxnta6ljp/image/upload/f_auto,q_auto/v1/Portfolio/nwuucuyxcj3bxfxvhhtz' alt="hero" />
          <div className='circle1'></div>
          <div className='circle2'></div>
        </div>
        <div ref={heroRightRef} className='hero-right'>
          <p>
              <span id='myName'>I'm JB</span>
              <br />
              <p id='whatIDo'>an aspiring 
              Web Developer
              and Graphic Designer</p>
          </p>
          <a href={ResumePDF} target='_blank' id='btnResume'>
            <span id='resume-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="#f3f3f3" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51ZM178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27ZM83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28Zm-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27Z"/></svg>
            </span>
            <span id='resume-text'>Resume</span>
          </a>
        </div>
      </div>
    </div>
   
  );
}

export default Hero;
 