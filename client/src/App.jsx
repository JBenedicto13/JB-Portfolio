import './App.css';
import Routing from "./components/routing/Routing";
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='main'>
          <Routing />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;