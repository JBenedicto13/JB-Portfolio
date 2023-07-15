import '../styles/hero.css';
import HeroPic from '../assets/hero.png';
function Hero() {

  return (
    <div id='hero-section' className="hero">
      <div className="hero-section">
        <div className='hero-left'>
          <img id='hero' src={HeroPic} alt="hero" />
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
          <div id='btnResume'>
            <span id='resume-svg'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#f3f3f3" d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"/></svg></span>
            <span id='resume-text'>Resume</span>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Hero;
 