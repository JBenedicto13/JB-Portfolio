import '../styles/navbar.css';
import myLogo from "../assets/my-logo-black.png";

function Navbar() {

    return (
        <nav className='navbar'>
            <span><img id='nav-logo' src={myLogo} alt="my-logo" /></span>
            <ul className='navbar-nav'>
                <li><a href="">Home</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;
   