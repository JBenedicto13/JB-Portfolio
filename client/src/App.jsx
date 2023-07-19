import './App.css';
import Routing from "./components/routing/Routing";
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='main'>
            <Routing />
            <ScrollToTopButton />
          </div>
        </div>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;