import '../styles/works.css';
import RE_Work from '../assets/RE-SS.png';
import Html_icon from '../assets/html-icon.svg';
import Css_icon from '../assets/css-icon.svg';
import Reactjs_icon from '../assets/reactjs-icon.svg';

function Works() {

  return (
    <div id='works-section' className="works">
      <div className="works-header">
        <p>
          <span>Works</span>
          <br />
          Most of my works are personal and school projects.
        </p>
      </div>
      <div className='works-content'>
        <div className='work-card'>
          <p>Rising Eggplants (NFT Project)</p>
          <div className='work-card-body'>
            <img className='work-cover' src={RE_Work} alt="RE_Work" />
            <div className='tech-icons'>
              <span><img src={Html_icon} alt="Html_icon" /></span>
              <span><img src={Css_icon} alt="Css_icon" /></span>
              <span><img src={Reactjs_icon} alt="Reactjs_icon" /></span>
            </div>
          </div>
          <div className='action-buttons'>
            <button>GITHUB</button>
            <button>VISIT</button>
          </div>
        </div>

        <div className='work-card'>
          <p>Rising Eggplants (NFT Project)</p>
          <div className='work-card-body'>
            <img className='work-cover' src={RE_Work} alt="RE_Work" />
            <div className='tech-icons'>
              <span><img src={Html_icon} alt="Html_icon" /></span>
              <span><img src={Css_icon} alt="Css_icon" /></span>
              <span><img src={Reactjs_icon} alt="Reactjs_icon" /></span>
            </div>
          </div>
          <div className='action-buttons'>
            <button>GITHUB</button>
            <button>VISIT</button>
          </div>
        </div>

        <div className='work-card'>
          <p>Rising Eggplants (NFT Project)</p>
          <div className='work-card-body'>
            <img className='work-cover' src={RE_Work} alt="RE_Work" />
            <div className='tech-icons'>
              <span><img src={Html_icon} alt="Html_icon" /></span>
              <span><img src={Css_icon} alt="Css_icon" /></span>
              <span><img src={Reactjs_icon} alt="Reactjs_icon" /></span>
            </div>
          </div>
          <div className='action-buttons'>
            <button>GITHUB</button>
            <button>VISIT</button>
          </div>
        </div>
      </div>
      <div className='works-controls'>
        <button>PREV</button>
        <button>NEXT</button>
      </div>
      
    </div>
   
  );
}

export default Works;
 