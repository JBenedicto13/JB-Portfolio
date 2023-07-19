import '../styles/navbar.css';
import myLogo from "../assets/my-logo-black.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className='navbar'>
            <span onClick={() => navigate('/')}><img id='nav-logo' src={myLogo} alt="my-logo" /></span>
            <ul className='navbar-nav'>
                <li><a href="/#hero-section">Home</a></li>
                <li><a href="/#works-section">Works</a></li>
                <li><a href="/#about-section">About</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;
   