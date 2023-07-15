import '../styles/hero.css';
import ResumePDF from '../assets/John-Benedict-Benedicto-Resume.pdf';
function Hero() {

  return (
    <div id='hero-section' className="hero">
      <div className="hero-section">
        <div className='hero-left'>
          <img id='hero' src='https://res.cloudinary.com/dxnta6ljp/image/upload/f_auto,q_auto/v1/Portfolio/nwuucuyxcj3bxfxvhhtz' alt="hero" />
          <div className='circle1'></div>
          <div className='circle2'></div>
        </div>
        <div className='hero-right'>
          <p>
              <span>I'm JB</span>
              <br />
              an aspiring 
              Web Developer
              and Graphic Designer
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
 