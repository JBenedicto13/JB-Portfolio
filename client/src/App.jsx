import './App.css';
import Home from './components/Home';
import ViewWork from './components/ViewWork';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/work/view/:id' element={<ViewWork />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;