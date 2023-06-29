import '../styles/hero.css';
import HeroPic from '../assets/hero.png';
function Hero() {

  return (
    <div className="hero">
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
        </div>
      </div>
    </div>
   
  );
}

export default Hero;
 